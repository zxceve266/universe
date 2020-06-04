<template>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <router-link class="navbar-brand" :to="{name:'Home'}">Space Empire</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav w-100 text-center">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'Home'}">首頁</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'Products'}">產品</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'Serve'}">服務</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'Travel'}">旅遊</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'About'}">關於</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'Admin'}">後台</router-link>
                    </li> -->
                    <li class="nav-item ml-lg-auto">
                        <router-link class="nav-link" :to="{name:'User'}">{{isUser}}</router-link>
                    </li>
                    <li class="nav-item dropdown  d-none d-lg-block">
                        <a class="nav-link dropdown-toggle cart" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-shopping-cart"></i>
                            購物車
                            <span>{{cartItemNumber}}</span>
                        </a>
                        
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown"
                        >
                            <div class="nav-cart-items"
                            @click.stop
                            >
                                <div class="container-fluid" 
                                v-for="(item, index) in cartItem" 
                                :key="index"
                                >
                                    <div class="row p-2">
                                        <div class="col-3">
                                            <img :src="item.newProduct.img" class="img-fluid" alt="">
                                        </div>
                                        <div class="col-9">
                                            <h6>{{item.newProduct.name}}</h6>
                                            <span>數量:{{item.newProduct.quantity}}</span>
                                            <span>價格:NT{{item.newProduct.price}}</span>
                                            <i class="far fa-times-circle"
                                            @click="removeItem(index)"
                                            ></i>
                                        </div>
                                        
                                    </div>
                                    <div class="dropdown-divider"></div>
                                </div>
                            </div>
                            <div class="px-2 pb-2" v-if="cartItemNumber !== 0">
                                <div class="dropdown-divider"></div>
                                <div class="row mb-2">
                                    <div class="col-7">
                                        全部有: <span class=" text-success">{{cartItemNumber}}件商品</span>
                                    </div>
                                    <div class="col-5">總共: <span class="text-danger">NT {{cartTotal}}</span></div>
                                </div>
                                    <router-link class="btn btn-info d-block"
                                    :to="{name:'Confirm'}">結帳去
                                    </router-link>
                            </div>
                            <div class="p-2 " v-else>
                                <h2 class="m-0">購物車是空的，趕快去買東西吧</h2>
                            </div>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </nav>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'cartItemNumber',
                'cartItem',
                'cartTotal',
                'currentUser'
            ]),
            isUser(){
                if(this.currentUser){
                    return this.currentUser
                }else{
                    return '登入'
                }
            }
        },
        methods:{
            removeItem(index){
                this.$store.commit('RemoveFromCart',index)
            }
        }
    }
</script>

<style lang="scss">
    .navbar{
        background-color: #000;
    }
    .navbar-nav a {
        font-size: 20px;
        margin: 0 10px;

    }

    .navbar-brand{
        font-family: 'Oswald', sans-serif;
    }


    .cart {
        position: relative;
        span {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: red;
            font-size: 16px;
            text-align: center;
            line-height: 30px;
            color: #fff;
            font-style: normal;
        }
    }

    .dropdown-menu {
        width: 30vw;
        position: relative;
        .nav-cart-items{
            max-height: 50vh;
            overflow-x: hidden;
            // overflow-y: auto;
            i{
                position: absolute;
                top: 0;
                right: 0;
                font-size: 20px;
            }
        }

        &::before {
            content: '';
            position: absolute;
            display: block;
            top: -0.8em;
            right: 20px;
            width: 0;
            height:0;
            z-index: 2;
            border-bottom: 20px solid #fff;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-top: 0;

        }
        h2{
            text-align: center;
            font-size: 18px;
        }
    }
</style>