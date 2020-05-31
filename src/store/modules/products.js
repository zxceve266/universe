import { firestoreAction } from 'vuexfire' 
import { dbProductsRef } from '../../firebase' //導入資料庫方法

const state = {
    products:[],
}

const getters = {
    products:(state)=> state.products,
    
    findItem:(state)=>{
        return (id)=>{
            let pickItem = state.products.filter((item)=>{
                return item.id === id
            })
            return pickItem
        }
    }
}

const mutations={

}

const actions ={
    setProdcutsRef : firestoreAction( async (context)=>{ //讓本地 menuItems 與 firestore 'Product' 同步
    await context.bindFirestoreRef('products',dbProductsRef)
    context.commit('ToggleLoading')
    }),

    addNewProduct:async(context,payload)=>{
        try {
            await dbProductsRef.add(payload)
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