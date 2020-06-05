<template>
  <div class="about">
    <div class="about-banner d-flex justify-content-center align-items-center flex-column">

          <h2>關於我們</h2>
          <p>Space Empire是領先全球的太空商業公司， 也是全球最知名的太空商業品牌之一。 如果需要來一場浪漫的太空之旅、或是您所需的太空商品， 人們首先會想到的就是Space Empire – 地球上最可靠的太空商業公司！
Space Empire的產品結合了創新的設計，航太級強度的組件以及最先進的製造和測試功能。 亦提供了範圍廣泛太空旅遊服務，從最遠端的冥王星、眾多的小行星帶、各式主要行星及其衛星，再到特殊的環繞太陽之旅，種類應有盡有。大膽創新，想去哪就去哪，就是Space Empire的真實寫照！</p>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about-banner{
    height: 100vh;
    width: 100%;
    background-color: #000;    
    background: url('../assets/spacex-OHOU-5UVIYQ-unsplash.jpg') no-repeat;
    background-attachment: fixed;
    background-size:cover;
    background-position:conter;
    h2{
      color: #fff;
      font-size: 7vh;
      letter-spacing: 10px;
      text-shadow: 3px 3px #000;
    }
    p{
      color: #fff;
      width: 60%;
      text-shadow: 1px 1px #000;
      line-height: 1.75;
      font-size: 25px;
    }
}
</style>