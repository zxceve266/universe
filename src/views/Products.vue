<template>
  <div class="products container-fluid">
    <div class="row mt-4">
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
      'products',
    ]),
    productCategory(){
      return category.parseProductCategories(this.products)
    }
  },
  methods:{
    OnSetCategory(item){
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