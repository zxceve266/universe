<template>
   <div class="banner">
      <h1 class="mb-5">來一場太空之旅吧</h1>
      <em class="banner-subText">That's one small step for man, one giant leap for mankind.</em>
      <button class="banner-btn">開始探索</button>
   </div>
</template>

<script>
   
</script>

<style lang="scss" scoped>
.banner{
   background: url('../../assets/sky.jpg') no-repeat;
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
   .banner-btn{
      padding: 10px 20px;
      background-color: transparent;
      margin-top: 60px;
      color: #c5c6c7;
      outline: none;
      border: 1px solid #66fcf1;
      font-size: 20px;
      &:active{
         background-color: #66fcf1;
         color: #fff;
      }
   }
}
</style>