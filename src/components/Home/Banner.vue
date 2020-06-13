<template>
   <div class="banner" ref="banner">
      <h1 class="mb-5 wow zoomIn" data-wow-duration="1.5s">來一場太空之旅吧</h1>
      <em class="banner-subText px-4 wow fadeInUp" data-wow-delay="0.5s">We are all in the gutter, but some of us are looking at the stars.</em>
      <button class="sp-btn btn-fill mt-5 wow fadeInUp" data-wow-delay="0.5s"
      @click="slide"
      >
         <span>開始探索</span>
      </button>
   </div>
</template>

<script>
   export default {
      methods:{
         slide(){
            let rect = this.$refs.banner.getBoundingClientRect()
            console.log(rect.height)
            window.scrollTo({
               top:rect.height,
               behavior:'smooth'
            })
         }
      }
   }
</script>

<style lang="scss" scoped>
.banner{
   background: url('../../assets/sky.webp') no-repeat;
   background-size: cover;
   background-position: bottom;
   background-attachment: fixed;
   width: 100%;
   height: 110vh;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   h1{
      color: #66fcf1;
      font-weight: 800;
      font-size: 10vh;
      text-align: center;
   }
   em{
      font-family: 'Oswald', sans-serif;
      letter-spacing: 2px;
      display: block;
      text-align: center;
      color: #c5c6c7;
      font-size: 30px;
   }
   // .banner-btn{
   //    padding: 10px 20px;
   //    background-color: transparent;
   //    margin-top: 60px;
   //    color: #c5c6c7;
   //    outline: none;
   //    border: 1px solid #66fcf1;
   //    font-size: 20px;
   //    &:active{
   //       background-color: #66fcf1;
   //       color: #fff;
   //    }
   // }
}
</style>