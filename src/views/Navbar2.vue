<template>
    <nav class="fixed-top">
        <div class=" d-flex">
            <router-link class="logo" :to="{name:'Home'}">Space Empire</router-link>
            <ul class="ml-auto d-none d-lg-block">
                <li>
                    <router-link :to="{name:'Home'}">首頁</router-link>
                </li>
                <li>
                    <router-link :to="{name:'Products'}">產品</router-link>
                </li>
                <li>
                    <router-link :to="{name:'About'}">關於</router-link>
                </li>
                <li>
                    <router-link :to="{name:'User'}">{{isUser}}</router-link>
                </li>
                <li>
                    <a href="" @click.prevent="openToggle">
                        <i class="fas fa-shopping-cart"></i>
                        購物車
                        <span>{{cartItemNumber}}</span>
                    </a>
                    <section class="cartIcon-detail" v-show="isShow" @click.stop>
                        <div class="cartIcon-display">
                            <div class="container-fluid" v-for="(item, index) in cartItem" :key="index">
                                <div class="row p-3 w-100 align-items-center mx-auto">
                                    <div class="col-3 p-0">
                                        <img :src="item.newProduct.img" class="img-fluid" alt="">
                                    </div>
                                    <div class="col-4">
                                        <h6 class="text-center">{{item.newProduct.name}}</h6>
                                        <!-- <i class="far fa-times-circle" @click="removeItem(index)"></i> -->
                                    </div>
                                    <div class="col-5">
                                        <p>數量:{{item.newProduct.quantity}}</p>
                                        <p>價格:NT{{item.newProduct.price}}</p>
                                        <i class="far fa-times-circle" @click="removeItem(index)"></i>
                                    </div>
                                </div>
                                <div class="dropdown-divider"></div>
                            </div>
                        </div>
                        <div class="px-3 pb-3" v-if="cartItemNumber !== 0">
                            <div class="row my-3">
                                <div class="col-7">
                                    全部有: <span class=" text-success">{{cartItemNumber}}件商品</span>
                                </div>
                                <div class="col-5">總共: <span class="text-danger">NT {{cartTotal}}</span></div>
                            </div>
                            <router-link class="btn btn-info d-block" @click.native="openToggle" :to="{name:'Confirm'}">
                                結帳去
                            </router-link>
                        </div>
                        <div class="p-4 " v-else>
                            <h4 class="m-0 text-center">購物車是<span style="color:#66fcf1">空的</span><br>趕快去買東西吧</h4>
                        </div>
                    </section>
                </li>
            </ul>
        </div>
        <span class="menu-icon"></span>
    </nav>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        data() {
            return {
                isShow: true
            }
        },
        computed: {
            ...mapGetters([
                'cartItemNumber',
                'cartItem',
                'cartTotal',
                'currentUser'
            ]),
            isUser() {
                if (this.currentUser) {
                    return this.currentUser
                } else {
                    return '登入'
                }
            }
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
    nav {
        width: 100%;
        background-color: #000;
        height: 60px;
        color: #fff;
        text-decoration: none;
        box-sizing: border-box;

        .logo {
            display: block;
            font-family: 'Oswald', sans-serif;
            color: #fff;
            font-size: 25px;
            line-height: 60px;
            text-decoration: none;
            height: 100%;
            margin: 0 60px;
        }
    }

    ul {
        list-style: none;
        height: 100%;

        li {
            margin: 0 25px;
            display: inline-block;

            a {
                text-decoration: none;
                color: #c5c6c7;
                font-size: 20px;
                line-height: 60px;
            }
        }
    }

    .cartIcon-detail {
            position: absolute;
            bottom: -30%;
            transform: translateY(100%);
            right: 20px;
            background-color: #1f2833;
            border-radius: 20px;
            color: #fff;

            &::before {
                content: '';
                position: absolute;
                display: block;
                top: -0.9em;
                right: 30px;
                width: 0;
                height: 0;
                z-index: 2;
                border-bottom: 15px solid #1f2833;
                border-left: 15px solid transparent;
                border-right: 15px solid transparent;
                border-top: 0;

            }
            h4{
                line-height: 1.5;
            }
        }


        .cartIcon-display {
            width: 40vw;
            max-height: 40vh;
            overflow-x: hidden;

            img {
                height: 12vh;
                width: 12vh;
                object-fit: cover;
            }

            p {
                margin: 0;
            }

            i {
                position: absolute;
                top: -15%;
                right: -10%;
                font-size: 30px;
                &:active{
                    color: red;
                }
            }
        }

    @media (max-width:992px) {
        ul {
            list-style: none;
            height: 100%;

            li {
                margin: 0 25px;
                display: inline-block;

                a {
                    text-decoration: none;
                    color: #c5c6c7;
                    font-size: 20px;
                    line-height: 60px;
                }
            }
        }
    }
</style>