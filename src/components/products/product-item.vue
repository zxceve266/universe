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
                        <a href="#" class="btn btn-primary" @click="goToInfo(item)">觀看詳情</a>
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
            goToInfo(item){
                console.log(item.id)
                this.$router.push('/info')
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