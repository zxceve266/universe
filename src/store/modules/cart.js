const cartData = JSON.parse(localStorage.getItem('cartData')) || []//設定初始購物車資料

const state = {
    cartItem: cartData
}

const getters ={
    cartItemNumber:(state)=> state.cartItem.length,
    cartItem:(state)=> state.cartItem,
    cartTotal:(state)=>{
        let total = 0
        state.cartItem.forEach(item => {
            total += item.newProduct.quantity * item.newProduct.price
        });
        return total
    }
}

const mutations = {
    AddToCart:(state,item)=>{
        let cartItem = {
            ...item,
            uuid: Math.random().toString(16).slice(2)//生成uuid作為辨識
        }
        state.cartItem.push(cartItem)
        localStorage.setItem('cartData', JSON.stringify(state.cartItem))
    },
    RemoveFromCart(state,index){
        state.cartItem.splice(index,1)
        localStorage.setItem('cartData', JSON.stringify(state.cartItem))
    },
    ClearCart(state){
        state.cartItem = []
        localStorage.clear();
    }
}

const actions = {

}

export default{
    state,
    getters,
    mutations,
    actions
}