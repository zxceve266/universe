<template>
    <div class="check-out container">
        <template v-if="cartItemNumber > 0">
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
                        <button class="btn btn-danger" @click="removeItem(item.index)">
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
                <router-link  
                class="btn btn-success mt-4 mr-4"
                :to="{name:'Products'}"
                >
                    <i class="fas fa-shopping-cart"></i> 繼續購物
                </router-link>
                <button class="btn btn-info w-50 mt-4"><i class="fas fa-dollar-sign"></i> 結帳</button>
            </section>
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

<style lang="scss" scoped>
.check-detail{
    i{
        font-size:25px;
    }
}
.empty{
    height: 55vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
</style>