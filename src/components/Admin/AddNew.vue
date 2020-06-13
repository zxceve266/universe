<template>
    <form class="my-4 container">
        <h2 class="text-center">新增商品</h2>
        <div class="form-group">
            <label for="product-name">產品名稱</label>
            <input type="text" class="form-control" id="product-name" aria-describedby="product-name" placeholder="產品名稱"
                v-model="newProduct.name">
            <small id="product-name" class="form-text text-muted">請輸入新產品名稱</small>
        </div>
        <div class="form-group">
            <label for="description">介紹</label>
            <textarea class="form-control" v-model="newProduct.description" type="text" id="description"></textarea>
        </div>
        <div class="form-group">
            <label for="detail">詳細內容</label>
            <textarea class="form-control" v-model="newProduct.detail" type="text" id="detail"></textarea>
        </div>
        <div class="form-group">
            <label for="category">設定分類</label>
            <select class="form-control" id="category" v-model="newProduct.category">
                <option>太空</option>
                <option>地球</option>
                <option>火星</option>
                <option>火箭</option>
                <option>月球</option>
            </select>
        </div>
        <div class="form-group">
            <label for="product-img">產品圖片</label>
            <input type="text" class="form-control" id="product-name" aria-describedby="product-img" placeholder="產品圖片"
                v-model="newProduct.img">
            <small id="product-img" class="form-text text-muted">請輸入新產品圖片</small>
        </div>
        <div class="form-group">
            <label for="product-price">產品價格</label>
            <input type="text" class="form-control" id="product-price" aria-describedby="product-price"
                placeholder="產品價格" v-model="newProduct.price">
            <small id="product-price" class="form-text text-muted">請輸入新產品價格</small>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="AddNewProduct">新增</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                newProduct: {
                    name: '測試',
                    description: 'A delicious tomato based pizza topped with mozzarella',
                    detail: 'A delicious tomato based pizza topped with mozzarella',
                    category: '地球',
                    img: 'https://picsum.photos/1024/480/?image=42',
                    price: 500
                }
            }
        },
        computed: {},
        methods: {
            AddNewProduct() {
                const newProduct={
                    newProduct:this.newProduct,
                    createdAt:new Date()
                }
                this.$store.dispatch('addNewProduct', newProduct)
            }
        }
    }
</script>

<style>

</style>