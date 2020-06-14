<template>
  <div class="products">
    <div class="products-banner d-flex justify-content-center align-items-center flex-column">
      <h2 class="wow fadeInUp" data-wow-duration="1s">產品列表</h2>
    </div>
    <div class="container-fluid">
      <nav class="mt-4">
        <ol class="sp-breadcrumb container d-flex">
          <li class="breadcrumb-item">
            <router-link :to="{name:'Home'}">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{name:'Products'}">產品</router-link>
          </li>
          <template v-if="isInfo">
            <li class="breadcrumb-item active" aria-current="page">
              <router-link :to="{name:'Products'}" @click.native="setCatgory(pickItem.newProduct.category)">
                {{pickItem.newProduct.category}}
              </router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{pickItem.newProduct.name}}</li>
          </template>
        </ol>
      </nav>
      <router-view></router-view>
      <div class="row mt-4" v-if="!isInfo">
        <div class="col-12 col-md-2">
          <SideList />
        </div>
        <div class="col-12 col-md-10">
          <ProductItem />
        </div>
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
        'isInfo', //選中商品的名子
        'pickItem'
      ]),
    },
    methods: {
      setCatgory(item) {
        this.$store.commit('setCatgory', item)
        scrollTo({
          top: 440,
          behavior: 'smooth'
        })
      }
    }
  }
</script>

<style lang="scss">
  .products {
    min-height: 100vh;
    position: relative;
    
  }

  .products-banner {
    height: 50vh;
    width: 100%;
    background-color: #000;
    background: url('../assets/nasa-Q1p7bh3SHj8-unsplash.jpg') no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;

    h2 {
      color: #fff;
      font-size: 9vh;
      letter-spacing: 15px;
      text-shadow: 3px 3px #000;
    }
  }

 
  .sp-breadcrumb {
    padding: 15px 20px;
    background-color: #000;
    border-radius: 20px;
  }
</style>