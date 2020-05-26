const state = {
    cartItem:[]
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