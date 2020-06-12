<template>
  <div class="about">
    <div class="about-banner">
    </div>
    <section class="about-content py-5">
      <div class="container py-4">
        <h2>關於我們</h2>
        <p class="mt-4">Space Empire是領先全球的太空商業公司， 也是全球最知名的太空商業品牌之一。 如果需要來一場浪漫的太空之旅、或是您所需的太空商品， 人們首先會想到的就是Space Empire –
          地球上最可靠的太空商業公司！
          Space Empire的產品結合了創新的設計，航太級強度的組件以及最先進的製造和測試功能。
          亦提供了範圍廣泛太空旅遊服務，從最遠端的冥王星、眾多的小行星帶、各式主要行星及其衛星，再到特殊的環繞太陽之旅，種類應有盡有。大膽創新，想去哪就去哪，就是Space Empire的真實寫照！</p>
        <h2 class="mt-5">提供服務</h2>
        <div class="row align-items-center justify-content-center mt-4">
          <div class="col-12 col-md-6">
            <img src="https://img.mp.itc.cn/upload/20170731/9ef8d760441c46c8a4c75a44c8e59934_th.jpg" class=" img-fluid" alt="">
          </div>
          <div class="col-12 col-md-6 mt-4">
            <h3>小行星採礦</h3>
            <p>小行星上擁有的豐富的水和碳、硫、氮、磷等資源。除此之外，我們還可探尋大量的稀缺資源，包括鉑族金屬（銥、鋨、鈀、鉑金、銠、釕）以及一些非金屬如砷、硒、鍺，珍貴資源近乎無限，利潤相當可觀。<br><br>開發小行星資源不但能有效解決礦產資源、能源儲備問題，而且環保清潔，不污染環境。在全球金屬消費量日漸攀升、地球能源緊缺的今天，開發利用小行星資源是人類外空探索能力不斷增強的必然結果，可以預見，大規模開發利用外空自然資源將成為21世紀人類拓展生存空間的有效手段。</p>
          </div>
        </div>

        <div class="row mt-5 align-items-center">
          <div class="col-12 col-md-6 order-1 order-md-3">
            <img src="https://images.unsplash.com/photo-1457365050282-c53d772ef8b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class=" img-fluid" alt="">
          </div>
            <div class="col-12 col-md-6 order-2 mt-4">
              <h3>太空旅行</h3>
              <p>Space Empire 宣布了與太空探險公司（Space Adventures）一項全新合作企畫，預計 2021 年底或 2022 年初，將利用龍飛船 2 號載著 4 名遊客奔上外太空，離地高度是國際太空站與地表距離的 2～3 倍，坐到真正的俯視地球，以及見證地球究竟有多渺小。在經濟能力前提下，如果你想思考人生、解鎖人生成就，那麼到外太空遊歷一趟保證你不虛此生。</p>
            </div>
        </div>

        <div class="row mt-5 align-items-center">
          <div class="col-12 col-md-6">
            <img src="https://wota.co/images/Space_Travel/space_travel_05.jpg" class=" img-fluid" alt="">
          </div>
            <div class="col-12 col-md-6 mt-4">
              <h3>太空旅館</h3>
              <p>我們即將在2022年開啟這項服務，讓我們的顧客可以欣賞絕佳美景入眠，我們的太空旅館一次可容納六人，包括四名旅客及兩名工作人員，每次旅程將以高速環繞地球12天，每人每次費用為950萬美元，可以先在官網預約，而且訂金可以全額退還。Space Empire的太空旅館將提供許多服務及活動，包括在旅館內無重力「飛行」、從太空俯瞰旅客的家鄉、參與太空科學研究，並且透過高速網路將旅客在太空中動態，直播給地球上的親友看。</p>
            </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .about{
    color: #fff;
  }

  .about-banner {
    height: 100vh;
    width: 100%;
    background: url('../assets/launch.webp') no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: top;

  }

  .about-content {
    background-color: #000;

    h2 {
      font-size: 6vh;
      letter-spacing: 5px;
      text-shadow: 3px 3px #000;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        bottom: -10px;
        width: 185px;
        height: 5px;
        background-color: #66fcf1;
      }
    }

    p {
      text-shadow: 1px 1px #000;
      line-height: 1.75;
      font-size: 20px;
    }
    h3{
      color:#66fcf1;
    }
  }
</style>