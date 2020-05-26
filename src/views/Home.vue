<template>
  <div class="home">
    <Banner/>
    <section class="section-title">
      <h2 class="mt-4">精選商品</h2>

    </section>
    <Featured/>
    <!-- <section class="section-title">
      <h2>太空之旅</h2>
    </section> -->
    <!-- <Htravel/> -->
  </div>
</template>

<script>
import Banner from '../components/Home/Banner'
import Featured from '../components/Home/Featured'
// import Htravel from '../components/Home/H-travel'
export default {
  name: 'Home',
  components: {
    Banner,
    Featured,
    // Htravel,
  }
}
</script>

<style lang="scss">
.section-title{
  width: 100%;
  height: 30vh;
  background-color: #1f2833;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before{
    content: "";
    width: 100%;
    height: 31vh;
    position: absolute;
    top: -30px;
    transform: skewY(-6deg) translateY(-50%);
    background-color: inherit;
    z-index: 0 !important;
  }

  h2{
    color: #fff;
    font-size: 3rem;
    letter-spacing: 5px;
  }
}
</style>