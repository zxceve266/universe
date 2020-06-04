<template>
    <div class="info container my-5 justify-content-center p-4">
        <div class="row w-100 text-center ">
            <div class="col-12 col-md-5 align-self-center">
                <img :src="getItem.newProduct.img" class="info-img" alt="Responsive image">
            </div>
            <div class="col-12 col-md-7 my-4 d-flex flex-column justify-content-between">
                <h2>{{getItem.newProduct.name}}</h2>
                <p>{{getItem.newProduct.description}}</p>
                <p>存貨狀況：<b>現貨充足</b></p>
                <p>寄送時間：2~3個工作天</p>
                <div class="quantity">
                    <span class="number mr-4">購買數量</span>
                    <span class="green-btn">&#8722;</span>
                    <span>5</span>
                    <span class="green-btn">&#43;</span>
                </div>
                <h2 class="text-danger mt-4">${{getItem.newProduct.price}}</h2>
                <button class="btn btn-danger" @click="addToCart(getItem)">
                    <i class="fas fa-cart-arrow-down"></i>
                    加入購物車
                </button>
                <router-link class="btn btn-success mt-4" :to="{name:'Products'}">
                    <i class="fas fa-shopping-cart"></i> 繼續購物
                </router-link>
            </div>
            <div class="line mt-5"></div>
            <div class="col-12 p-2">
                <h2 class="my-4"><i class="fas fa-info-circle"></i> 商品介紹</h2>
                <p class="text-left">{{getItem.newProduct.detail}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        computed: {
            ...mapGetters(['findItem']),
            getItem() {
                return this.findItem(this.$route.params.id)[0]
            }
        },
        beforeRouteEnter(to, from, next) { //進來前先改變info狀態 因為beforeEnter無法收到this 所以用Vm代替this 
            next(vm => {
                vm.$store.commit('ToggleInfo') //送回選中商品
            })
        },
        beforeRouteLeave(to, from, next) { //離開後改變info狀態
            this.$store.commit('ToggleInfo') //離開後將選中名字變為空字串
            next()
        },
        methods: {
            addToCart(item) {
                this.$store.commit('AddToCart', item)
                this.$swal("以加入購物車", '', 'success')
            }
        },
    }
</script>

<style lang="scss" scoped>
    .info {
        display: flex;
        align-items: center;
        background: url('../assets/jeremy-perkins-uhjiu8FjnsQ-unsplash.jpg');
        border-radius: 25px;
        color: #fff;

        .info-img {
            width: 40vh;
            height: 40vh;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 0 30px 1px #66fcf1;
        }
    }

    .quantity {
        span {
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            display: inline-block;
        }

        .number {
            width: auto;
        }
    }

    .green-btn {
        background-color: #66fcf1;
        cursor: pointer;
    }

    .line {
        width: 100%;
        height: 3px;
        background-color: #66fcf1;
    }
</style>