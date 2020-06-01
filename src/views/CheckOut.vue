<template>
    <div class="check-out container">
        <template v-if="cartItemNumber > 0">
            <section class="container mt-5">
                <div class="procedure row justify-content-between  align-items-center">
                    <div class="procedure-icon ">
                        <p class="pro-num">1</p>
                        <img src="../assets/planet-w.png" alt="">
                        <p>確認訂單</p>
                    </div>
                    <div class="procedure-icon ">
                        <p  class="pro-num">2</p>
                        <img src="../assets/startup-w.png" alt="">
                        <p>填寫收件資料</p>
                    </div>
                    <div class="procedure-icon">
                        <p class="pro-num">3</p>
                        <img src="../assets/rocket-w.png" alt="">
                        <p>完成訂單</p>
                    </div>
                </div>
            </section>
            <router-view></router-view>
            </template>
             <div class="empty container mt-5" v-else>
                    <h2>購物車是空的，趕快去買東西吧</h2>
                    <p>所有商品即享有7天不滿意即退費</p>
                    <router-link  
                    class="btn btn-success w-75 mx-auto"
                    :to="{name:'Products'}"
                    >
                    <i class="fas fa-shopping-cart"></i> 繼續購物
                    </router-link>
            </div>
    </div>
</template>

<script>
import{ mapGetters } from 'vuex'
    export default {
        computed:{
            ...mapGetters([
                'cartItemNumber',
            ])
        },
    }
</script>

<style lang="scss">

.empty{
    height: 56.5vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.procedure{
    .procedure-icon{
        position: relative;
        width: 20vh;
        height: 20vh;
        padding: 5px;
        background-color: #1f2833;
        text-align: center;
        border-radius: 50%;
        color: #fff;
        img{
            width: 9vh;
            height: 9vh;
            margin-top: -20px;
        }
        .pro-num{
            font-size: 20px;
        }
        &::before{
            content: '';
            position: absolute;
            top: 50%;
            left: 98%;
            height: 20px;
            transform: translateY(-50%);
            width: 29vw;
            background-color:inherit;
            display: block;
        }
        &:nth-child(1){
            background-color: #eb4d4b;
        }
        &:nth-child(3){
            &::before{
                display: none;
            }
        }
    }
}
@media(max-width: 768px){
    .procedure{
    .procedure-icon{
        width: 14vh;
        height: 14vh;
        padding: 2px;
        img{
            width: 5vh;
            height: 5vh;
        }
        p{
            font-size: 12px;
        }
        .pro-num{
            font-size: 12px;
        }
        &::before{
            height: 12px;
            width: 25vw;
        }
    }
}
}
</style>