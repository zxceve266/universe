<template>
    <section class="section-content">
        <div class="container mt-5">
            <div class="row justify-content-between align-items-center">
                <div class="col-md-8 text-center text-md-left">
                    <h2>宇宙<br>人類的終極邊疆</h2>
                    <p class="lead mt-4">地球相對於宇宙來說就是個小點。在這個小點上，每一個你愛的人，每一個你認識的人，每一個你聽說過的人，每一個人，無論他是誰，都曾經生活過。<br>我們所有的快樂和掙扎，數以千萬自傲的宗教信仰、思想體系觀念意識，以及經濟學原理教義，每一個獵人或征服者，每一位勇士或是懦夫，每一個文明的締造者或摧毀者，每一位君王或農夫，每一對陷入愛河的年輕伴侶，每一位為人父母者，所有充滿希望的小孩，發明家或探險者，每一位靈魂導師，每一個腐敗的政客，每一個所謂的『超級巨星』，每一個所謂的『最偉大領袖』，每一位我們人類史上的聖人或是罪人……我們的一切一切，全部都存在於這樣一粒懸浮在一束陽光中的塵埃上。我們的腳步不可只停留在這小點上，人類的探險旅途才正要開始。</p>
                    <br>
                    <router-link tag="div" 
                    class="botton-nav w-75"
                    :to="{name:'Serve'}"
                    >
                        <span class="d-inline-block mr-2">learn more</span>
                        <button class="d-inline-block"><i class="fas fa-angle-right"></i></button>
                    </router-link>
                </div>
                <div class="col-md-4 d-none d-md-block">
                    <img src="../../assets/astronaut.png" class="img-fluid w-100 h-100" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .section-content {
        width: 100%;
        height: auto;
        background-color: #000;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items: center;

        &::before {
            content: "";
            width: 100%;
            height: 30vh;
            position: absolute;
            top: 0px;
            transform: skewY(-6deg) translateY(-50%);
            background-color: inherit;
        }

        &::after {
            content: "";
            width: 100%;
            height: 25vh;
            position: absolute;
            bottom: -10px;
            transform: skewY(6deg) translateY(50%);
            background-color: inherit;
        }

        h2 {
            color: #c5c6c7;
            font-size: 2.5rem;
            letter-spacing: 5px;
        }

        p {
            color: #c5c6c7;
            line-height: 1.75;
        }
       

        img {
            object-fit: contain;
            position: relative;
            transform: translateY(0);
            animation: float 3s infinite ease-in-out alternate;
            z-index: 1;
        }

        @keyframes float {
            0% {
                transform: translateY(50px);
            }

            ;

            100% {
                transform: translateX(0px);
            }
        }
    }

     .botton-nav{
            position: relative;
            z-index: 1;
            color: #fff;
            button {
                padding: 10px 20px;
                background-color: transparent;
                margin-top: 60px;
                color: #c5c6c7;
                outline: none;
                border: 2px solid #66fcf1;
                font-size: 20px;
                border-radius: 50%;
                transition: all 0.5s;
            }
            span{
                font-size: 20px;
                font-family: 'Oswald', sans-serif;
                text-transform: uppercase;
                transition: all 0.5s;
            }
            &:hover button{
                box-shadow: 0 0 30px 5px #66fcf1;
                transform: translateX(200%);
                background-color: #66fcf1;
                color: #fff;
            }
            &:hover span{
                transform: translateX(50%) scale(1.4);
                letter-spacing: 2px;
                color: #c5c6c7;
            }
        }
</style>