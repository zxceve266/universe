<template>
    <div class="cartIcon d-flex justify-content-center align-items-center d-block d-lg-none" @click="openToggle">
        <i class="fas fa-rocket mt-2"></i>
        <span class="cart-number">{{cartItemNumber}}</span>


        <section class="cartIcon-detail" v-show="isShow" @click.stop>
            <div class="cartIcon-display">
                <div class="container-fluid" v-for="(item, index) in cartItem" :key="item.uuid">
                    <div class="row p-2 w-100 align-items-center mx-auto">
                        <div class="col-3 p-0">
                            <img :src="item.newProduct.img" class="img-fluid" alt="">
                        </div>
                        <div class="col-4">
                            <h6 class="text-center">{{item.newProduct.name}}</h6>
                            <!-- <i class="far fa-times-circle" @click="removeItem(index)"></i> -->
                        </div>
                        <div class="col-5">
                            <p>數量 : {{item.newProduct.quantity}}</p>
                            <p>單價 : {{item.newProduct.price}}</p>
                            <p>總價 : NT{{item.newProduct.price * item.newProduct.quantity}}</p>
                            <i class="far fa-times-circle" @click="removeItem(index)"></i>
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                </div>
            </div>
            <div class="px-3 pb-3" v-if="cartItemNumber !== 0">
                <div class="row mb-2">
                    <div class="col-7">
                        全部有: <span class=" text-success">{{cartItemNumber}}件商品</span>
                    </div>
                    <div class="col-5">總計: <span class="text-danger">NT {{cartTotal}}</span></div>
                </div>
               <router-link class="sp-btn btn-flip w-100 mt-3" tag="button" @click.native="openToggle" :to="{name:'Confirm'}">
                                <span class="btn-flip__visible">check out!</span>
                                <span class="btn-flip__invisible">check out!</span>
                            </router-link>
            </div>
            <div class="p-4 " v-else>
                <h4 class="m-0 text-center">購物車是<span style="color:#66fcf1">空的</span><br>趕快去買東西吧</h4>
            </div>
        </section>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        data() {
            return {
                isShow: false
            }
        },
        computed: {
            ...mapGetters([
                'cartItemNumber',
                'cartItem',
                'cartTotal'
            ])
        },
        methods: {
            openToggle() {
                this.isShow = !this.isShow
            },
            removeItem(index){
                this.$store.commit('RemoveFromCart',index)
            }
        },
        mounted() {
            document.addEventListener('click', (e) => {//當點擊其它區域收起
                if (!this.$el.contains(e.target)) this.isShow = false
            })
        }
    }
</script>
<style lang="scss" scoped>
     .cartIcon {
        position: fixed;
        bottom: 3%;
        right: 4%;
        width: 10vh;
        height: 10vh;
        background-color: #000;
        border-radius: 50%;
        box-shadow: 0 0 20px 5px #66fcf1;
        transition: all 0.5s;
        z-index: 99;

        &:hover {
            box-shadow: 0 0 25px 6px #ff7979;
            // transform: scale(0.9);
        }

        i {
            font-size: 5vh;
            color: #fff;
        }

        .cart-number {
            position: absolute;
            top: 0;
            right: -2vh;
            width: 4vh;
            height: 4vh;
            border-radius: 50%;
            background-color: red;
            font-size: 18px;
            text-align: center;
            line-height: 4vh;
            color: #fff;
            font-style: normal;
        }

        .cartIcon-detail {
            position: absolute;
            bottom: 130%;
            right: 0;
            background-color: #000;
            border-radius: 20px;
            color: #fff;

            &::before {
                content: '';
                position: absolute;
                display: block;
                bottom: -0.9em;
                right: 15px;
                width: 0;
                height: 0;
                z-index: 2;
                border-bottom: 0;
                border-left: 15px solid transparent;
                border-right: 15px solid transparent;
                border-top: 15px solid #000;

            }
            h4{
                line-height: 1.5;
            }
        }


        .cartIcon-display {
            width: 90vw;
            max-height: 55vh;
            overflow-x: hidden;

            img {
                height: 12vh;
                width: 12vh;
                object-fit: cover;
                border-radius: 50%;
            }

            p {
                margin: 0;
            }

            i {
                position: absolute;
                top: -15%;
                right: -5%;
                font-size: 30px;
                &:active{
                    color: red;
                }
            }
        }
    }
</style>