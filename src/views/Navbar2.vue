<template>
    <nav class="fixed-top">
        <div class=" d-flex">
            <router-link class="logo" :to="{name:'Home'}">Space Empire</router-link>
            <ul class="ml-auto mr-4" ref="toggleNav" @click="linkActive">
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
                <li class="d-none d-lg-inline-block">
                    <a href="" class="cart" @click.prevent="openToggle">
                        <i class="fas fa-shopping-cart"></i>
                        購物車
                        <span>{{cartItemNumber}}</span>
                    </a>
                    <section class="cartIcon-detail" v-show="isShow" @click.stop>
                        <div class="cartIcon-display">
                            <div class="container-fluid" v-for="(item, index) in cartItem" :key="index">
                                <div class="row p-2 w-100 align-items-center mx-auto">
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
                        <div class="px-3 pb-3 mt-3" v-if="cartItemNumber !== 0">
                            <div class="row ">
                                <div class="col-7">
                                    全部有: <span class=" text-success">{{cartItemNumber}}件商品</span>
                                </div>
                                <div class="col-5">總共: <span class="text-danger">NT {{cartTotal}}</span></div>
                            </div>
                            <router-link class="sp-btn btn-flip w-100 mt-3" tag="button" @click.native="openToggle" :to="{name:'Confirm'}">
                                <span class="btn-flip__visible">全部有{{cartItemNumber}}件商品</span>
                                <span class="btn-flip__invisible">結帳</span>
                            </router-link>
                        </div>
                        <div class="p-4 " v-else>
                            <h4 class="m-0 text-center">購物車是<span style="color:#66fcf1">空的</span><br>趕快去買東西吧</h4>
                        </div>
                    </section>
                </li>
            </ul>
        </div>
        <span class="menu-icon d-block d-lg-none" ref="globe" @click="toggle">
            <i class="fas fa-globe-americas"></i>
        </span>
    </nav>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        data() {
            return {
                isShow: true,
                toggleNav: false
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
            removeItem(index) {
                this.$store.commit('RemoveFromCart', index)
            },
            toggle() {
                this.$refs.toggleNav.classList.toggle('active')
                this.$refs.globe.classList.toggle('active')
            },
            linkActive(e){
                let tagName = e.target.nodeName
                if(tagName === 'A' || tagName === "LI"){
                    this.$refs.toggleNav.classList.remove('active')
                    this.$refs.globe.classList.remove('active')
                }
            }
        },
        mounted() {
            document.addEventListener('click', (e) => { //當點擊其它區域收起
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
            margin: 0 30px;
            display: inline-block;

            a {
                text-decoration: none;
                color: #c5c6c7;
                font-size: 20px;
                line-height: 60px;

                &:hover {
                    color: #fff;
                }

                &:active {
                    color: #fff;
                }
            }
        }
    }

    .cartIcon-detail {
        position: absolute;
        bottom: -30%;
        transform: translateY(100%);
        right: 20px;
        background-color: #111;
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
            border-bottom: 15px solid #111;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-top: 0;

        }

        h4 {
            line-height: 1.5;
        }
    }


    .cartIcon-display {
        width: 40vw;
        max-height: 35vh;
        overflow-x: hidden;

        img {
            height: 13vh;
            width: 13vh;
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

            &:active {
                color: red;
            }
        }
    }

    .cart {
        position: relative;

        span {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -40%;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background-color: red;
            font-size: 15px;
            text-align: center;
            line-height: 28px;
            color: #fff;
            font-style: normal;
        }
    }

    @media (max-width:992px) {
        nav {
            .logo {
                margin: 0 auto;
            }
        }

        ul {
            display: none;
            transition: all 1s;
        }

        ul.active {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0;
            height: 100vh;
            width: 100vw;
            background-color: #000;

            li {
                a {
                    font-size: 30px;
                }
            }
        }

        .menu-icon {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);

            i {
                font-size: 30px;
                box-shadow: 0 0 25px 3px #66fcf1;
                border-radius: 50%;
                transition: 0.5s all;
            }

            &.active {
                i {
                    box-shadow: 0 0 40px 5px #fff;
                    color: #66fcf1;
                    transform: scale(1.2);
                }
            }
        }
    }
</style>