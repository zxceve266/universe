<template>
  <div id="app">
    <Navbar/>
    <router-view class="pt-4 mt-4"/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './views/Navbar'
import Footer from './views/Footer'
  export default {
    components:{
      Navbar,
      Footer,
    },
    created(){
      this.$store.commit('ToggleLoading')
      this.$store.dispatch('setProdcutsRef')
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
