<template>
    <div>
        <section class="container mt-5">
            <div class="procedure row justify-content-between  align-items-center">
                <div class="procedure-icon active">
                    <p class="pro-num">1</p>
                    <img src="../../assets/planet-w.png" alt="">
                    <p>確認訂單</p>
                </div>
                <div class="procedure-icon ">
                    <p  class="pro-num">2</p>
                    <img src="../../assets/startup-w.png" alt="">
                    <p>填寫收件資料</p>
                </div>
                <div class="procedure-icon">
                    <p class="pro-num">3</p>
                    <img src="../../assets/rocket-w.png" alt="">
                    <p>完成訂單</p>
                </div>
            </div>
        </section>
        <div class="check-content container text-center my-4">
            <h2>你的商品總價為<br><span class="text-danger">NT{{cartTotal}}</span></h2>
            <p>所有商品即享有7天不滿意即退費</p>
            <router-link class="sp-btn btn-pulse-2 w-50" tag="button" :to="{name:'Fill'}">
                <i class="fas fa-dollar-sign"></i> 立即結帳
            </router-link>
        </div>
        <section class="check-detail">
            <div class="row align-items-center px-md-5 border-top text-center" 
            v-for="(item, index) in cartItem" :key="index">
                <div class="col-12 col-md-3">
                    <img :src="item.newProduct.img" class="confirm-img img-fluid py-2" alt="">
                </div>
                <div class="col-12 col-md-3">
                    <h4>{{item.newProduct.name}}</h4>
                </div>
                <div class="col-4 col-md-2 align-items-center text-left">
                    <p>數量:{{item.newProduct.quantity}}<br>單價:{{item.price}}</p>
                </div>
                <div class="col-4 col-md-2">總計:{{item.newProduct.quantity * item.newProduct.price}}</div>
                <div class="col-4 col-md-1 text-center">
                    <button class="btn btn-danger" @click="removeItem(index)">
                        <i class="fas fa-trash-alt text-light"></i>
                    </button>
                </div>
            </div>
        </section>
        <section class="check-total container text-right p-4">
            <div class="row  ml-auto border-top border-bottom p-4">
                <div class="col-6">
                    <h4>運費</h4>
                    <h4>總數量</h4>
                    <h4>總計</h4>
                </div>
                <div class="col-6">
                    <h4>60</h4>
                    <h4>{{cartItemNumber}}</h4>
                    <h4 class="text-danger">NT{{cartTotal}}</h4>
                </div>
            </div>
            <router-link class="sp-btn btn-pulse mt-4 mr-4" tag="button" :to="{name:'Products'}">
                <i class="fas fa-shopping-cart"></i> 繼續購物
            </router-link>
            <router-link class="sp-btn btn-pulse-2 w-50 mt-4" tag="button" :to="{name:'Fill'}">
                <i class="fas fa-pen-alt"></i> 填寫資料
            </router-link>
        </section>
    </div>
</template>

<script>
import{ mapGetters } from 'vuex'
    export default {
        computed:{
            ...mapGetters([
                'cartItemNumber',
                'cartItem',
                'cartTotal'
            ])
        },
        methods:{
            removeItem(index){
                console.log(index)
                this.$store.commit('RemoveFromCart',index)
            }
        }
    }
</script>

<style lang="scss">
.check-detail{
    i{
        font-size:25px;
    }
    .confirm-img{
        width: 25vh;
        height: 25vh;
        object-fit: cover;
    }
}
</style>