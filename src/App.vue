<template>
  <div id="app">
    <router-view></router-view>
    <loading :active.sync="isLoading"></loading>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
     computed:{
      ...mapGetters([
          'isLoading'
      ])
    },
    created(){
      this.$store.commit('ToggleLoading')
      this.$store.dispatch('setOrderRef')
      this.$store.dispatch('setProdcutsRef').then(()=>{//讓Products資料同步
        this.$store.dispatch('checkUser')//檢查是否有登入狀態
      }) 
    },
    mounted(){
      
    }
  }
</script>


<style lang="scss">
#app {
  font-family: 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
.space{
  margin-top: 60px;
}


</style>
