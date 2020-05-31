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
            total += item.quantity * item.price
        });
        return total
    }
}

const mutations = {
    AddToCart:(state,item)=>{
        state.cartItem.push(item)
        localStorage.setItem('cartData', JSON.stringify(state.cartItem))
    },
    RemoveFromCart(state,index){
        state.cartItem.splice(index,1)
        localStorage.setItem('cartData', JSON.stringify(state.cartItem))
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