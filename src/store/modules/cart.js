const cartData = JSON.parse(localStorage.getItem('cartData')) || []//設定初始購物車資料

const state = {
    cartItem: cartData
}

const getters ={
    cartItemNumber:(state)=> {
        let number = 0
        state.cartItem.forEach((item)=>{
            number += item.newProduct.quantity
        })
        return number
    },
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
    AddToCart: async (state, item)=>{
        const itemExists = await state.cartItem.find((cart)=>{//看看cartItem是否已經存在商品
            return item.newProduct.name === cart.newProduct.name
        })
        let infoQuantity = item.quantity//如果是在info加購物車的話 會有初始數量

        if(!itemExists){//如果cartItem沒有對應商品品名 (第一次加入購務車情況)
            let cartItem={
                newProduct:{
                    ...item.newProduct,
                    quantity:null,
                },
                uuid: Math.random().toString(16).slice(2)//生成uuid作為辨識
            };
            if(infoQuantity){//從info來的話設置 info來的數量
                cartItem.newProduct.quantity =  infoQuantity
            }else{//其他默認為1
                cartItem.newProduct.quantity = 1
            }
            state.cartItem.push(cartItem)
            localStorage.setItem('cartData', JSON.stringify(state.cartItem))
        }else{//如果已經有商品了就只加數量 (一次以上加入購務車情況)
            if(infoQuantity){//info來
                itemExists.newProduct.quantity +=infoQuantity
            }else{
                itemExists.newProduct.quantity +=1
            }
        }
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