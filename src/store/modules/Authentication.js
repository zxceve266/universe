import { firebaseAuth } from '../../firebase'
import firebase from 'firebase/app'

const state = {
    currentUser:null
}

const getters = {
    currentUser:(state)=> state.currentUser
}

const mutations = {
    userStatus:(state,user)=>{
        user === null ? state.currentUser = null : state.currentUser = user.email
    }
}

const actions = {
    signIn : async ({ commit,state }, user) => {
        commit('ToggleLoading')
        if(state.currentUser === null){
            try {
                await firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.SESSION)//設定關掉頁面登出
                const userData = await firebaseAuth.signInWithEmailAndPassword(
                    user.email,
                    user.password
                )
                commit('userStatus', userData.user)
                commit('ToggleLoading')
            } catch (error) {
                const errorCode = error.code
                const errorMessage = error.message
                if (errorCode === 'auth/wrong-password') {
                    alert('密碼錯誤')
                } else {
                    alert(errorMessage)
                }
                commit('ToggleLoading')
            }
        }
        else{
            alert('重複登入')
        }
    },
    signOut : async ({ commit }) => {
        commit('ToggleLoading')
        try {
            await firebaseAuth.signOut()
            commit('ToggleLoading')
        } catch (error) {
            alert(`登出錯誤${error}`)
        }
        commit('userStatus', null)
    },
    checkUser: async ({commit})=>{//檢查是否登入
        try {
            let user = await firebaseAuth.currentUser;
            if(user){
                commit('userStatus', user)
            }
        } catch (error) {
            alert(error)
        }
       
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}