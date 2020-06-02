import { firestoreAction } from 'vuexfire' 
import { dbProductsRef } from '../../firebase' //導入資料庫方法

const state = {
    products:[],
    currentCategory: '全部',
    itemPerPage:6,
    currentPage:0
}

const getters = {
    products:(state)=> state.products,
    currentCategory:(state)=> state.currentCategory,
    itemPerPage:(state)=> state.itemPerPage,
    currentPage:(state)=> state.currentPage,
    
    findItem:(state)=>{//根據ID 找到對應的Product
        return (id)=>{
            let pickItem = state.products.filter((item)=>{
                return item.id === id
            })
            return pickItem
        }
    },
    categories : (state) => { //根據原資料Category Key 返回出所有Category
        const categories = {};
        state.products.forEach((product) => {
            categories[product.newProduct.category] = product.newProduct.category;
        });
        return Object.keys(categories);
    },
    setProdcutsNum(state){
        let currentCategory = state.currentCategory
        let products = state.products
        let setProdcutsNum = [...products];//先設定全部的商品
        // 若是有選中分類(無選中全部)，將產品根據分類過濾出來
        if (currentCategory !== '全部') {
            setProdcutsNum = products.filter(product => product.newProduct.category === currentCategory);
        }
        return setProdcutsNum.length
        
    },
    setProductPagination: (state) => {
        let currentCategory = state.currentCategory
        let products = state.products
        let itemPerPage = state.itemPerPage
        const paginationData = [];
        let filteredProducts = [...products];//先設定全部的商品
    
        // 若是有選中分類(無選中全部)，將產品根據分類過濾出來
        if (currentCategory !== '全部') {
            filteredProducts = products.filter(product => product.newProduct.category === currentCategory);
        }
    
        // 根據 itemPerPage 製作分頁
        filteredProducts.forEach((product, index) => {
            if (index % itemPerPage === 0) {
                paginationData.push([]);
            }
            const page = parseInt(index / itemPerPage, 10);
            paginationData[page].push(product);
        });
        return paginationData;
    
    }
}

const mutations={
    setCatgory(state,item){
        state.currentCategory = item
        state.currentPage = 0 //每次設定類別時，分頁設定1
    },
    setCurrentPage(state,page){
        state.currentPage = page
    },
    setItemPerPage(state,value){
        state.currentPage = 0
        state.itemPerPage = value
    }

}

const actions ={
    setProdcutsRef : firestoreAction( async (context)=>{ //讓本地 menuItems 與 firestore 'Product' 同步
    await context.bindFirestoreRef('products',dbProductsRef.orderBy('createdAt'))
    context.commit('ToggleLoading')
    }),

    addNewProduct:async(context,payload)=>{
        context.commit('ToggleLoading')
        try {
            await dbProductsRef.add(payload)
            context.commit('ToggleLoading')
        } catch (error) {
            alert(`sorry 發生一些錯誤 請再試一次! ${error}`)
        }
    },
    removeProduct:async(context,id)=>{
        try{
            const item = await dbProductsRef.doc(id)
            item.delete()
        }catch(error){
            alert(`sorry 發生一些錯誤 請再試一次! ${error}`)
        }
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}