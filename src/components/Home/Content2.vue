<template>
    <section>
        <div class="content2  container-fluid mt-5 pt-5">
            <div class="d-flex align-items-center pt-5 flex-column flex-md-row">
                <img src="../../assets/undraw_counting_stars.png" alt="">
                <div class="my-4 ">
                    <h2>好奇是人類的天性</h2>
                    <p class="lead mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui, vitae
                        accusamus necessitatibus porrosed numquam, distinctio dolorum sequi quam nisi corrupti facilis
                        itaque rem vel. Autem, nemo. perspiciatis temporibus sed numquam, distinctio dolorum sequi quam
                        nisi corrupti facilis itaque rem vel. Autem, nemo.</p>
                </div>
            </div>
        </div>
        <div class="bg-1 d-flex justify-content-center align-items-center">
            <h2>Who We Are</h2>
        </div>
        <div class="content2-1">
            <div class="row container-fluid mx-auto py-4 align-items-center justify-content-between">
                <div class="col-12 col-lg-6 my-5">
                    <h2 class="text-center text-lg-left"><span
                            style="color:#66fcf1 ; font-family: 'Oswald', sans-serif;">Space Empire</span><br>太空商業公司
                    </h2>
                    <h4 class="mt-4 text-center text-lg-left">任何時間!任何地點!<br>
                        地表最強太空公司將會是您<br>
                        強而有力且值得信賴的好伙伴！</h4>
                    <div class="line my-4"></div>
                    <b>Space Empire是領先全球的太空商業公司，
                        也是全球最知名的太空商業品牌之一。
                        如果需要來一場浪漫的太空之旅、或是您所需的太空商品，
                        人們首先會想到的就是Space Empire – 地球上最可靠的太空商業公司！</b>
                    <p class="mt-4">Space Empire的產品結合了創新的設計，航太級強度的組件以及最先進的製造和測試功能。
                        亦提供了範圍廣泛太空旅遊服務，從最遠端的冥王星、眾多的小行星帶、各式主要行星及其衛星，再到特殊的環繞太陽之旅，種類應有盡有。大膽創新，想去哪就去哪，就是Space Empire的真實寫照！
                    </p>
                    <router-link tag="div" 
                    class="botton-nav w-75"
                    :to="{name:'Serve'}"
                    >
                        <span class="d-inline-block mr-2">see more about</span>
                        <button class="d-inline-block"><i class="fas fa-angle-right"></i></button>
                    </router-link>
                </div>
                <div class="col-12 col-lg-6">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia18182-uranus-voyager1.png"
                                    class="d-block" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/26306658253_080bac1ba5_o.jpg"
                                    class="d-block" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/stsci-h-p1936a-m-1999x2000.png"
                                    class="d-block" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/crop_p_color2_enhanced_release_small.png"
                                    class="d-block" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22949-1400.jpg"
                                    class="d-block" alt="...">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div class="collaboration">
                    <h2 class="text-center mt-4">戰略合作夥伴</h2>
                    <div class="row align-items-center justify-content-center">
                        <div class="col-12 col-lg-4 text-center">
                            <img src="../../assets/elon-musk.png" class="img-fluid" alt="...">
                        </div>
                        <div class="avatar-content px-4 py-3 col-10 col-lg-7 mt-4 mt-md-0">
                            <h5 class="mt-0">伊龍·馬撕客</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                    </div>
                    <div class="row align-items-center justify-content-center">
                        <div class="avatar-content px-4 py-3 col-10 col-lg-7 mt-4 mt-md-0 order-2">
                            <h5 class="mt-0">鎂國太空總署</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                        <div class="col-12 col-lg-4 text-center order-1 order-lg-3">
                            <img src="../../assets/nasa.png" class="img-fluid" alt="...">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-2 d-flex justify-content-center align-items-center">
            <h2>what we do</h2>
        </div>
    </section>
</template>

<script>
    export default {

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

    .content2-1 {
        background-color: #000;
        position: relative;
        color: #fff;

        h2 {
            font-size: 6vh;
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

    .carousel-item {

        img {
            width: 100%;
            object-fit: cover;
        }
    }

    .collaboration{
        box-sizing: border-box;
        border: 3px solid #66fcf1;
        padding: 5px;
    }

    .avatar-content {
        background-color: #c5c6c7;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: -30px;
            width: 0;
            height: 0;
            transform: translateY(-50%);
            border-right: 40px solid #c5c6c7;
            border-top: 20px solid transparent;
            border-bottom: 20px solid transparent;
            border-left: 0;
        }
        &:nth-child(1){
            background-color: red;
            &::before {
                left: 100%;
                border-right:0;
                border-left: 40px solid #c5c6c7;
            }
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