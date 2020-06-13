<template>
    <div class="product-item container">
        <h1 class=" text-center"><span class="text-primary">{{currentCategory}}</span>系列</h1>
        <label class="d-block" for="category">每頁顯示商品數量</label>
        <div class="d-flex justify-content-between">
            <select class="form-control w-25 d-inline-block" id="category" @change="chengePerItem($event)">
                <option>4</option>
                <option>8</option>
                <option>12</option>
            </select>
            <h3 class="text-right d-inline-block ml-5">
                共<span class="text-primary">{{setProdcutsNum}}筆</span>商品
            </h3>
        </div>
        <div class="row mt-3">
            <div v-for="item in setProductPagination[currentPage]" :key="item.id"
                class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4 ">
                <div class="card" ref="card">
                    <div class="cart-img mx-auto p-2">
                        <img :src="item.newProduct.img" class="img-item" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title d-flex justify-content-between">
                            {{item.newProduct.name}}
                            <span class="badge badge-pill badge-info">{{item.newProduct.category}}</span>
                        </h5>
                        <p class="card-text description">{{item.newProduct.description}}</p>
                        <p class="card-text price">${{item.newProduct.price}}</p>
                        <div class="d-flex justify-content-between w-100">
                            <router-link tag="button" :to="`/products/${item.id}/info`" class="sp-btn btn-pulse-2">
                                <i class="fas fa-search-dollar"></i>
                            </router-link>
                            <i class="fas fa-cart-arrow-down sp-btn btn-pulse"
                            @click="addToCart(item,$event)"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination class="my-4" :pagination="setProductPagination" :currentPage="currentPage"
                @goSetCurrentPage="setCurrentPage"></Pagination>
        </div>
    </div>
</template>

<script>
    import Pagination from '../Pagination'
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return{
                isClick:true//防止多點
            }
        },
        components: {
            Pagination
        },
        computed: {
            ...mapGetters([
                'currentCategory',
                'setProductPagination',
                'itemPerPage',
                'currentPage',
                'setProdcutsNum'
            ]),
        },
        methods: {
            addToCart(item,e) {
                if(this.isClick){
                    this.isClick = false
                    const that = this
                    const productCard = e.target.parentNode.parentNode.parentNode
                    const rect = productCard.getBoundingClientRect()
                    const position = {//找出offset
                            top : rect.top ,
                            left : rect.left 
                        }
                    const html = `<div class="floating-cart"></div>`,//創造浮動div
                        body = document.querySelector('.universe')
                    body.insertAdjacentHTML('beforeend', html);//插入Body
                    let floatCart = document.querySelector('.floating-cart')//抓到剛剛創造的浮動div
                    let cloneCart = productCard.cloneNode(true)//複製productCard
                    floatCart.appendChild(cloneCart)//插入到浮動div
        
                    floatCart.style.top = position.top+'px'
                    floatCart.style.left = position.left+'px'
                
                    setTimeout(function(){
                        body.classList.add("startMove")
                    }, 0);
                    setTimeout(function(){
                        body.classList.add("toCart")
                        body.classList.remove("startMove")
                    }, 600);
                    setTimeout(function(){
                        floatCart.remove()
                        body.classList.remove("toCart")
                        that.$store.commit('AddToCart', item)
                        that.isClick = true
                    }, 800);
                }
                
                // this.$swal("以加入購物車", '', 'success')
            },
            setCurrentPage(page) {
                this.$store.commit('setCurrentPage', page)
            },
            chengePerItem(event) {
                let value = event.target.value
                console.log(value)
                this.$store.commit('setItemPerPage', value)
            },
        }
    }
</script>

<style lang="scss" scoped>
    h1{
        letter-spacing: 5px;
        font-weight: 700;
    }
    .card {
        color: #fff;
        background: #000;
        background: url('../../assets/jeremy-perkins-uhjiu8FjnsQ-unsplash.jpg');
        border-radius: 25px;
        transition: all 0.3s;

        .description {
            height: 50px;
        }

        &:hover {
            transform: scale(1.07);
        }
        i{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .price {
        font-size: 20px;
        color: #eb4d4b;
        font-weight: bold;
    }

    .category-tag {
        background-color: #66fcf1;
        color: #fff;
        padding: 2px 6px;
        border-radius: 20px;
    }

    .cart-img {
        height: 230px;
        width: 230px;

        .img-item {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    @media (max-width: 992px) {
        .card {
            &:hover {
                transform: scale(1);
            }
        }
    }

    .sp-btn {
        border-radius: 50%;
        width: 60px;
        height: 60px;
    }

    .btn-pulse,
    .btn-pulse-2 {
        padding: 5px 10px;
        i{
            font-size: 25px;
        }
        &:hover {
        &::after {
        transform: scaleX(1.3) scaleY(1.3);
        opacity: 0;
      }
    }
    }
</style>