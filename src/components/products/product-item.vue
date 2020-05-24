<template>
    <div class="container-fluid">
        <div class="row">
            <div v-for="item in setProducts" :key="item.id" class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="card">
                    <img :src="item.img" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">{{item.description}}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
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
            setProducts(){
                let category = this.category
                let products = this.products
                return setProductCategories(category,products)
            }
        }
       
    }
</script>

<style>

</style>