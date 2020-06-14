<template>
    <section>
        <div class="content2  container-fluid mt-5 pt-5">
            <div class="d-flex align-items-center pt-5 flex-column flex-md-row">
                <img src="../../assets/undraw_counting_stars.png" class="wow fadeIn" data-wow-delay="1s" alt="">
                <div class="my-4 wow fadeInRight"  data-wow-duration="2s">
                    <h2>好奇是人類的天性</h2>
                    <p class="lead mt-4">仰望星空，漫天的星斗，它們盡著自己的力量，把點點滴滴的光芒融彙在一起，雖然比不上太陽的輝煌，也比不上月亮的清澈，但他們夢幻般的光，灑到了人間，照亮了人們的心頭，把大地變得奇異，給人們帶來美好的夢想。
                        一個種族有一群仰望星空的人，他們才有希望
                    </p>
                </div>
            </div>
        </div>
        <div class="bg-1 d-flex justify-content-center align-items-center">
            <h2 class="wow fadeInDown" data-wow-duration="2s" data-wow-delay="1s">Who We Are</h2>
        </div>
        <div class="content2-1">
            <div class="row container-fluid mx-auto py-4 align-items-center justify-content-between">
                <div class="col-12 col-lg-6 mt-5">
                    <h2 class="text-center text-lg-left wow fadeInUp"  data-wow-delay="1s"><span
                            style="color:#66fcf1 ; font-family: 'Oswald', sans-serif;">Space Empire</span><br>太空商業公司
                    </h2>
                    <h4 class="mt-4 text-center text-lg-left wow fadeInUp"  data-wow-delay="1s">任何時間!任何地點!<br>
                        Space Empire太空公司將會是您<br>
                        強而有力且值得信賴的好伙伴！</h4>
                    <div class="line my-4"></div>
                    <div class="wow fadeInLeft" data-wow-delay="1s">
                        <b>Space Empire是領先全球的太空商業公司，
                            也是全球最知名的太空商業品牌之一。
                            如果需要來一場浪漫的太空之旅、或是您所需的太空商品，
                            人們首先會想到的就是Space Empire – 地球上最可靠的太空商業公司！</b>
                        <p class="mt-4">Space Empire的產品結合了創新的設計，航太級強度的組件以及最先進的製造和測試功能。
                            亦提供了範圍廣泛太空旅遊服務，從最遠端的冥王星、眾多的小行星帶、各式主要行星及其衛星，再到特殊的環繞太陽之旅，種類應有盡有。大膽創新，想去哪就去哪，就是Space Empire的真實寫照！
                        </p>
                    </div>
                    <router-link tag="div" class="botton-nav w-75" :to="{name:'About'}">
                        <span class="d-inline-block mr-2">see more about</span>
                        <button class="d-inline-block"><i class="fas fa-angle-right"></i></button>
                    </router-link>
                </div>
                <div class="col-12 col-lg-6">
                    <Featured />
                </div>
                <div class="collaboration">
                    <h2 class="text-center mt-4">戰略合作夥伴</h2>
                    <div class="row align-items-center justify-content-center mt-5">
                        <div class="col-12 col-lg-4 text-center">
                            <img src="../../assets/elon-musk.png" class="img-fluid" alt="...">
                        </div>
                        <div class="avatar-content px-3 py-2 col-10 col-lg-7 mt-4 mt-md-0">
                            <h3 class="my-2">伊龍·馬撕客</h3>
                            <p>
                            Elon Musk，是一名出生於南非的企業家，他同時具有南非、美國以及加拿大國籍，並以 SpaceX 創辦者及特斯拉汽車與PayPal（原X.com）的聯合創辦人而聞名。目前，馬斯克擔任SpaceX的執行長兼首席設計師、特斯拉汽車執行長兼產品架構師以及SolarCity的董事長；與此同時，他還是現代第一輛可行電動車Tesla Roadster的聯合設計者之一。在2019年富比士美國400富豪榜，他以199億美元的資產，排名第23名
                            </p>
                        </div>
                    </div>
                    <div class="row align-items-center justify-content-center">
                        <div class="avatar-content px-3 py-2 col-10 col-lg-7 mt-4 mt-md-0 order-2">
                            <h3 class="my-2">鎂國太空總署</h3>
                            <p>
                            美國航空暨太空總署被廣泛認為是世界範圍內太空機構中執牛耳者。美國國家航空暨太空總署透過地球觀測系統提升對地球的了解，透過太陽科學研究計畫精進太陽科學。美國國家航空暨太空總署注重於利用先進的機器人太空載具任務探索太陽系中的的所有天體，並利用天文觀測台及相關計畫研究天體物理學中的主題，例如大爆炸理論。美國國家航空暨太空總署與許多美國國內及國際的組織分享其研究數據。是世界上最大的政府性質航太機構。  
                            </p>
                        </div>
                        <div class="col-12 col-lg-4 text-center order-1 order-lg-3">
                            <img src="../../assets/nasa.png" class="img-fluid" alt="...">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-2 d-flex justify-content-center align-items-center">
            <h2 class="wow fadeInDown" data-wow-duration="2s">what we do</h2>
        </div>
        <div class="content2-2">
            <div class="row container-fluid mx-auto align-items-center justify-content-between pt-5 text-center">
                <div class="col-12 col-lg-6 wow fadeInUp" data-wow-duration="2s">
                    <h2>專業、精確、效率</h2>
                    <p class="text-left">專業、精確、效率，更努力於不斷地自我提升 Space Empire 秉持多年火箭發射專業經驗，
                        相關太空任務、旅遊的評估、引進、技術指導至售後服務，全程皆由公司所屬的專業團隊貫徹完成，
                        並利用大數據管理平台，提供完整技術支援和太空諮詢讓客戶無後顧之憂，
                        並得以發揮機具管理的最大效能。未來將持續專注在太空資源的開發、小行星採礦、太陽系內天體開發、
                        以及成立深空探索艦隊。
                    </p>
                    <router-link tag="div" class="botton-nav w-75" :to="{name:'Products'}">
                        <span class="d-inline-block mr-2">see more products</span>
                        <button class="d-inline-block"><i class="fas fa-angle-right"></i></button>
                    </router-link>
                </div>
                <div class="col-12 col-lg-6 mt-5 text-right text-lg-center wow pulse"
                data-wow-duration="5s" 
                data-wow-iteration="infinite"
                >
                    <img src="../../assets/satellite.png" alt="" class="space-ship">
                </div>
                <div class="text-center">
                    <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        class="earth" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Featured from './Featured'
    export default {
        components: {
            Featured,
        },
    }
</script>

<style lang="scss" scoped>
    .content2 {
        background-color: #fff;
        display: block;

        // position: relative;
        img {
            width: 70vh;
        }

        h2 {
            font-size: 5vh;
        }

    }

    .line {
        width: 100%;
        height: 3px;
        background-color: #66fcf1;
    }

    .content2-1,
    .content2-2 {
        background-color: #000;
        position: relative;
        color: #fff;

        h2 {
            font-size: 7vh;
            line-height: 1.5;
        }

        h4 {
            line-height: 1.75;
        }

        p,
        b {
            line-height: 2;
            font-size: 18px;
        }
    }
    .collaboration{
        h2{
            font-size: 6vh;
            position: relative;
            &::before {
                content: '';
                position: absolute;
                bottom: -5px;
                width: 36vh;
                height: 5px;
                background-color: #66fcf1;
            }
        }
        .avatar-content {
            border: 2px solid #66fcf1;
            border-radius: 30px;
        }
    }



    .bg-1,
    .bg-2 {
        height: 40vh;
        background: url('../../assets/bg-home-1.jpg') no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;

        h2 {
            font-size: 9vh;
            font-family: 'Oswald', sans-serif;
            text-transform: uppercase;
            color: #fff;
            letter-spacing: 2px;
            position: relative;
            text-shadow: 3px 3px #000;


            &::before {
                content: '';
                position: absolute;
                bottom: -10px;
                width: 100%;
                height: 5px;
                background-color: #66fcf1;
            }
        }
    }

    .bg-2 {
        background: url('../../assets/bg-home-2.jpg') no-repeat;
        background-attachment: fixed;
    }

    .content2-2 {
        .space-ship{
            width: 50%;
        }
        .earth {
            width: 100vw;
            height: 60vh;
            object-fit: cover;
            object-position: top;
            margin-top: -50px;
        }
    }

    @media (max-width: 992px) {
        .content2-1 {
            .avatar-content {
                &::before {
                    display: none;
                }
            }
        }
    }
</style>