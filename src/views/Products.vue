<template>
  <div class="products container-fluid">
    <!-- <nav aria-label="breadcrumb" class="mt-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{name:'Home'}">首頁</router-link></li>
        <li class="breadcrumb-item"><router-link :to="{name:'Products'}">產品</router-link></li>
        <template v-if="isInfo">
        <li class="breadcrumb-item active" aria-current="page" v-if="!isInfo">{{currentCategory}}</li>
        </template>
      </ol>
    </nav> -->
    <router-view></router-view>
    <div class="row mt-4" v-if="!isInfo">
      <div class="col-12">
        <SideList/>
      </div>
      <div class="col-12">
        <ProductItem/>
      </div>
    </div>
  </div>
</template>

<script>
  import SideList from '../components/products/SideList'
  import ProductItem from '../components/products/product-item'
  import {
    mapGetters
  } from 'vuex'
  export default {
    components: {
      SideList,
      ProductItem,
    },
    computed: {
      ...mapGetters([
        'isInfo',//選中商品的名子
      ]),
    }
  }
</script>

<style lang="scss">
  .products {
    min-height: 100vh;
    position: relative;
    
    // background-color: #000;    
    // background: url('../assets/jeremy-perkins-uhjiu8FjnsQ-unsplash.jpg');
    // background-attachment: fixed;
    
  }
</style>