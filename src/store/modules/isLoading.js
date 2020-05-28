const state = {
    isLoading : false,
    isInfo:false
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
    ToggleInfo(state){
        state.isInfo = !state.isInfo
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