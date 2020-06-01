import { firestoreAction } from 'vuexfire' 
import { dbOrderRef } from '../../firebase' //導入資料庫方法

const state={
    orders:[]
}

const getters = {
    orders:(state)=> state.orders,
    orderNumber:(state) => state.orders.length
}

const mutations={

}

const actions={
    setOrderRef:firestoreAction((context)=>{//讓本地 orders 與 firestore 'orders' 同步
    return context.bindFirestoreRef('orders',dbOrderRef.orderBy('createdAt'))
    }),

    addNewOrder : async ({commit}, order) =>{ //新增order 到firestore
        commit('ToggleLoading')
        try {
            await dbOrderRef.add(order)
            commit('ClearCart')
            commit('ToggleLoading')
        } catch (error) {
            alert(`sorry 發生一些錯誤 請再試一次! ${error}`)
        }
    },
    removeOrderItem:async (context,id)=>{
        try {
            const orderItem = await dbOrderRef.doc(id)
            orderItem.delete()
        } catch (error) {
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