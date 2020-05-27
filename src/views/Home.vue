<template>
  <div class="home">
    <Banner />
    <Content/>
    <!-- <Featured /> -->
    <!-- <section class="section-title">
      <h2>太空之旅</h2>
    </section> -->
    <!-- <Htravel/> -->
  </div>
</template>

<script>
  import Banner from '../components/Home/Banner'
  // import Featured from '../components/Home/Featured'
  import Content from '../components/Home/Content'
  // import Htravel from '../components/Home/H-travel'
  export default {
    name: 'Home',
    components: {
      Banner,
      // Featured,
      Content,
      // Htravel,
    }
  }
</script>

<style lang="scss">
</style>