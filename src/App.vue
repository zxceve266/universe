<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    // components:{
    //   Navbar,
    //   Footer,
    // },
    // created(){
    //   this.$store.commit('ToggleLoading')
    //   this.$store.dispatch('setProdcutsRef')
    // }
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
