<template>
  <div class="products container-fluid">
    <router-view></router-view>
    <div class="row mt-4" v-if="!isInfo">
      <div class="col-12 col-md-3">
        <SideList :category="productCategory" @chooseCategory="OnSetCategory"/>
      </div>
      <div class="col-12 col-md-9">
        <ProductItem :category="currentCategory" :products="products"/>
      </div>
    </div>
    
    <loading :active.sync="isLoading"></loading>
  </div>
</template>

<script>
import SideList from '../components/products/SideList'
import ProductItem from '../components/products/product-item'
import * as category from '../category'
import { mapGetters } from 'vuex'
export default {
  data(){
    return{
      currentCategory: '全部',
    }
  },
  components:{
    SideList,
    ProductItem,
  },
  computed:{
    ...mapGetters([
      'isLoading',
      'isInfo',
      'products',
    ]),
    productCategory(){//找出所有的分類
      return category.parseProductCategories(this.products)
    }
  },
  methods:{
    OnSetCategory(item){//設定目前選中的 分類
      this.currentCategory = item
    }
  },
  created(){
    
  }
}
</script>

<style lang="scss">
  .products{
    min-height: 100vh;
    position: relative;
  }
</style>