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
            <router-link class="sp-btn btn-pulse-2 w-100" tag="button" :to="{name:'Fill'}">
                <i class="fas fa-dollar-sign"></i> 立即結帳
            </router-link>
        </div>
        <section class="check-detail container-fluid">
            <transition-group name="list-complete" tag="div">
                <div class="row align-items-center px-md-5 py-2 mb-3 border-top text-center " 
                v-for="(item, index) in cartItem" :key="item.uuid">
                    <div class="col-12 col-md-3">
                        <img :src="item.newProduct.img" class="confirm-img img-fluid py-2" alt="">
                    </div>
                    <div class="col-12 col-md-3">
                        <h4>{{item.newProduct.name}}</h4>
                    </div>
                    <div class="col-4 col-md-2 align-items-center">
                        <p>數量:{{item.newProduct.quantity}}</p>
                        <p>單價:{{item.newProduct.price}}</p>
                    </div>
                    <div class="col-4 col-md-2"><p>總計:{{item.newProduct.quantity * item.newProduct.price}}</p></div>
                    <div class="col-4 col-md-1 text-center">
                            <i class="fas fa-trash-alt btn btn-danger"
                            @click="removeItem(index)"
                            ></i>
                    </div>
                </div>
            </transition-group>
        </section>
        <section class="check-total container text-right p-2">
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
                <div class="col-12 mt-4">
                    <router-link class="sp-btn btn-pulse-2" tag="button" :to="{name:'Fill'}">
                        <i class="fas fa-pen-alt"></i> 填寫資料
                    </router-link>
                </div>
            </div>
        </section>
        <div class="my-3">
            <router-link class="sp-btn btn-pulse" tag="button" :to="{name:'Products'}">
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
                'cartItem',
                'cartTotal'
            ])
        },
        methods:{
            removeItem(index){
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
        border-radius: 50%;
    }
    p{
        margin: 0;
        font-size: 20px;
    }
    .row{
    border-radius: 25px;
    color:#fff;
    background: url('../../assets/jeremy-perkins-uhjiu8FjnsQ-unsplash.jpg');
    box-shadow:  6px 6px 17px #d1d1d1, 
             -6px -6px 17px #ffffff;
    transition: all 1s;
    }

    .row.remove{
        position: relative;
        transform: translateX(100%);
    }
}

.list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(100%) scale(0.1);
}
.list-complete-leave-active {
    position: absolute;
}
// .list-complete-move{
//     transition: transform 1s;
// }
</style>