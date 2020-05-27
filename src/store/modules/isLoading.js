const state = {
    isLoading : false,
    isInfo:''
}

const getters = {
    isLoading(state){
        return state.isLoading
    },
    isInfo:(state)=> state.isInfo
}

const mutations = {
    ToggleLoading(state){
        state.isLoading = !state.isLoading
    },
    ToggleInfo(state,item){
        state.isInfo = item
    }
}

const actions ={

}

export default {
    state,
    mutations,
    getters,
    actions
}