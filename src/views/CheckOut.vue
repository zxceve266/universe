<template>
    <div class="check-out container">
        <div class="check-content container text-center my-4">
            <h2>你的商品總價為<br><span class="text-danger">NT{{cartTotal}}</span></h2>
            <p>所有商品即享有7天不滿意即退費</p>
            <button class="btn btn-info w-50">立刻結帳</button>
        </div>
        <section class="check-detail">
            <div class="row align-items-center px-md-5 border-top"
                v-for="item in cartItem" 
                :key="item.index"
            >
                <div class="col-12 col-md-3">
                    <img :src="item.img" class=" img-fluid py-2" alt="">
                </div>
                <div class="col-12 col-md-3">
                    <h4>{{item.name}}</h4>
                </div>
                <div class="col-4 col-md-2 align-items-center">
                    <p>數量:{{item.quantity}}<br>單價:{{item.price}}</p>
                </div>
                <div class="col-4 col-md-2">總計:{{item.quantity * item.price}}</div>
                <div class="col-4 col-md-1 text-center">
                    <button class="btn btn-danger">
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
            <button class="btn btn-info  w-50 mt-4"><i class="fas fa-dollar-sign"></i> 結帳</button>
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
        }
    }
</script>

<style lang="scss" scoped>
.check-detail{
    i{
        font-size:25px;
    }
    .row{

    }
}
</style>