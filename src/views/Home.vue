<template>
  <div class="home">
    <Banner/>
    <section class="section-title">
      <h2>精選商品</h2>
    </section>
    <Featured/>
    <section class="section-title">
      <h2>太空之旅</h2>
    </section>
    <Htravel/>
  </div>
</template>

<script>
import Banner from '../components/Home/Banner'
import Featured from '../components/Home/Featured'
import Htravel from '../components/Home/H-travel'
export default {
  name: 'Home',
  components: {
    Banner,
    Featured,
    Htravel,
  }
}
</script>

<style lang="scss">
.section-title{
  width: 100%;
  height: 20vh;
  background-color: #000;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before,&::after{
    content: '';
    position: absolute;
    width: 30vw;
    height: 1px;
    background-color: #fff;
  }
  &::after{
    right: 0;
  }
  &::before{
    left: 0;
  }

  h2{
    color: #fff;
    font-size: 3rem;
    letter-spacing: 5px;
  }
}
</style>