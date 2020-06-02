<template>
    <div class="product-item container">
        <h2 class="mb-4 text-center text-dark">{{currentCategory}}</h2>
        <label for="category">設定每頁顯示商品數量</label>
        <select class="form-control w-25" id="category" @change="chengePerItem($event)">
            <option>6</option>
            <option>3</option>
            <option>9</option>
        </select>
        <h3 class="text-right">共{{setProdcutsNum}}筆商品</h3>
        <div class="row">
            <div v-for="item in setProductPagination[currentPage]" :key="item.id" class="col-12 col-md-6 col-lg-4 mb-4  ">
                <div class="card">
                    <div class="cart-img">
                        <img :src="item.newProduct.img" class="img-item" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title d-flex justify-content-between">
                            {{item.newProduct.name}}
                            <span class="badge badge-pill badge-info">{{item.newProduct.category}}</span>
                        </h5>
                        <p class="card-text description">{{item.newProduct.description}}</p>
                        <p class="card-text price">${{item.newProduct.price}}</p>
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
            :pagination="setProductPagination"
            :currentPage="currentPage"
            @goSetCurrentPage="setCurrentPage"
            ></Pagination>
        </div>
    </div>
</template>

<script>
import Pagination from '../Pagination'
import{ mapGetters } from 'vuex'
    export default {
        components:{
            Pagination
        },
        computed:{
            ...mapGetters([
                'currentCategory',
                'setProductPagination',
                'itemPerPage',
                'currentPage',
                'setProdcutsNum'
            ]),
        },
        methods:{
            addToCart(item){
                this.$store.commit('AddToCart',item)
                this.$swal("以加入購物車",'','success')
            },
            setCurrentPage(page){
                this.$store.commit('setCurrentPage',page)
            },
            chengePerItem(event){
                let value = event.target.value
                console.log(value)
                this.$store.commit('setItemPerPage',value)
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
        height: 250px;
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
        .description{
            height: 50px;
        }
    }
</style>