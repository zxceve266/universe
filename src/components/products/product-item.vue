<template>
    <div class="product-item container-fluid">
        <h2 class="mb-4 text-center text-dark">{{category}}</h2>
        <div class="row">
            <div v-for="item in setProducts[currentPage]" :key="item.id" class="col-12 col-md-6 col-lg-4 mb-4  ">
                <div class="card">
                    <div class="cart-img">
                        <img :src="item.img" class="img-item" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title d-flex justify-content-between">
                            {{item.name}}
                            <span class="badge badge-pill badge-info">{{item.category}}</span>
                        </h5>
                        <p class="card-text">{{item.description}}</p>
                        <p class="card-text price">${{item.price}}</p>
                        <div class="d-flex flex-column flex-md-row justify-content-between w-100">
                            <router-link 
                            :to="`/products/${item.id}/info`" 
                            class="btn btn-outline-primary"
                            >
                            <i class="fas fa-search-dollar"></i>
                            觀看詳情
                            </router-link>
                            <button class="btn btn-danger mt-2 mt-md-0" @click="addToCart(item)">
                                <i class="fas fa-cart-arrow-down"></i> 馬上下單</button>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination
            :pagination="setProducts"
            :currentPage="currentPage"
            @goSetCurrentPage="setCurrentPage"
            ></Pagination>
        </div>
    </div>
</template>

<script>
import{ setProductPagination } from '../../category'
import Pagination from '../Pagination'

    export default {
        data(){
            return{
                itemPerPage:6, //設定每一頁的產品數量
                currentPage:0  //目前分頁
            }
        },
        components:{
            Pagination
        },
        props:['category','products'],
        computed:{
            setProducts(){//用分類與原資料 來篩選出分類過的資料
                return setProductPagination(this.category,this.products,this.itemPerPage)
            }
        },
        methods:{
            addToCart(item){
                this.$store.commit('AddToCart',item)
                this.$swal("以加入購物車",'','success')
            },
            setCurrentPage(page){
                console.log(page)
                this.currentPage = page
            }
        }
    }
</script>



<style lang="scss">
    .product-item{
        .card-body{
            // background-color: #1f2833;
        }
    }

    .price{
        font-size: 20px;
        color: #eb4d4b;
        font-weight: bold;
    }
    .category-tag{
        background-color: #66fcf1;
        color: #fff;
        padding: 2px 6px;
        border-radius: 20px;
        display: inline-block;
    }
    .cart-img{
        height: 200px;
        overflow: hidden;
        
        .img-item{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1);
            transition: 0.7s all ease-in-out;
            
        }
    }

    .card{
        &:hover .img-item{
            transform: scale(1.2);
        }
    }
</style>