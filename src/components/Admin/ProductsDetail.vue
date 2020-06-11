<template>
  <div class="products-detail p-2 p-lg-4">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 text-center align-self-center">
          <img :src="img"  alt="">
          <div class="form-group">
            <label for="detail-img">產品圖片</label>
            <input type="text" class="form-control" id="product-img" placeholder="產品圖片"
                v-model="img">
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="form-group">
            <label for="detail-name">產品名稱</label>
            <input type="text" class="form-control" id="detail-name" placeholder="產品名稱"
                v-model="name">
          </div>

          <div class="form-group">
            <label for="detailprice">產品價格</label>
            <input type="text" class="form-control" id="detail-price" placeholder="產品價格"
                v-model="price">
          </div>

          <div class="form-group">
            <label for="detail-description">產品介紹</label>
            <input type="text" class="form-control" id="detail-description" placeholder="產品介紹"
                v-model="description">
          </div>

          <div class="form-group">
            <label for="detail-detail">產品細節</label>
            <textarea class="form-control" v-model="detail" type="text" id="detail-detail"></textarea>
          </div>
          <div class="mt-3 text-center">
            <button class="sp-btn btn-pulse mr-2 mr-md-5" @click="close">離開</button>
            <button class="sp-btn btn-pulse-2">修改</button>
          </div>
        </div>
      </div>
    </div>
    <i class="fas fa-times" @click="close"></i>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:this.detailData.name,
      description:this.detailData.description,
      detail:this.detailData.detail,
      price:this.detailData.price,
      img:this.detailData.img,
    }
  },
  props:['detailData'],
  methods:{
    close(){
            this.$emit('close')
        }
  }
}
</script>

<style lang="scss" scoped>
.products-detail{
    width: 80%;
    background-color: #fff;
    color: #000;
    border-radius: 20px;
    position: relative;

    img{
      width:40%;
      // height:20vh;
      object-fit: cover;
    }

    label{  
      margin: 0;
    }
    .form-group{
      margin: 0;
      margin: 5px;
    }

  .btn-pulse,
  .btn-pulse-2{
    padding: 10px 30px;

  }

  i{
        position: absolute;
        top: 15px;
        left: 15px;
        font-size: 25px;
        transition: all 0.1s;
        &:hover{
            color: red;
        }
    }
}
</style>