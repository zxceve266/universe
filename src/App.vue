<template>
  <div id="app">
    <Navbar/>
    <router-view/>
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
      this.$store.commit('Loading')
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

</style>
