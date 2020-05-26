<template>
    <div class="container-fluid">
        <div class="row">
            <div v-for="item in setProducts" :key="item.id" class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="card">
                    <img :src="item.img" class="card-img-top" alt="...">
                    <div class="card-body">
                        <span >{{item.category}}</span>
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">{{item.description}}</p>
                        <p class="card-text price">${{item.price}}</p>
                        <div class="d-flex justify-content-between w-100">
                            <router-link 
                            :to="`/products/${item.id}/info`" 
                            class="btn btn-outline-primary"
                            >
                            <i class="fas fa-search-dollar"></i>
                            觀看詳情
                            </router-link>
                            <button class="btn btn-danger" @click="addToCart(item)">
                                <i class="fas fa-cart-arrow-down"></i> 馬上下單</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import{ setProductCategories } from '../../category'
    export default {
        props:['category','products'],
        computed:{
            setProducts(){//用分類與原資料 來篩選出分類過的資料
                let category = this.category
                let products = this.products
                return setProductCategories(category,products)
            }
        },
        methods:{
            addToCart(item){
                this.$store.commit('AddToCart',item)
                this.$swal("以加入購物車",'幹的好','success')
            }
        }
    }
</script>

<style>
    .price{
        font-size: 20px;
        color: #eb4d4b;
        font-weight: bold;
    }
</style>