<template>
    <div class="order-detail p-2 p-lg-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-lg-6 order-info text-center mb-4">
                    <h3>訂單編號 <br>{{detailData.id}}</h3>
                    <p>姓名 : <b>{{info.name}}</b></p>
                    <p>信箱 : <b>{{info.email}}</b></p>
                    <p>電話 : <b>{{info.phone}}</b></p>
                    <p>地址 : <b>{{info.address}}</b></p>
                    <span>共{{items.length}}件商品</span>
                    <span class="ml-4">總價 {{total}}</span>
                </div>
                <div class="col-12 col-lg-6 order-item">
                    <div class="row align-items-center"
                    v-for="(item, index) in items"
                    :key="index"
                    >
                        <div class="col-6 text-center py-2">
                            <img :src="item.newProduct.img" class="img-fluid" alt="">
                            <p class=" m-0">{{item.newProduct.name}}</p>
                        </div>
                        <div class="col-6">
                            <p>編號:{{item.id}}</p>
                            <p>價格:{{item.newProduct.price}}</p>
                            <p>數量:{{item.newProduct.quantity}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <i class="fas fa-times" @click="close"></i>
    </div>
</template>

<script>
export default {
    props:['detailData'],
    computed:{
        info(){
            return this.detailData.order.orderInfo
        },
        items(){
            return this.detailData.order.orderItem
        },
        total(){
            let total = 0
            this.items.forEach(item => {
            total += item.newProduct.quantity * item.newProduct.price
            });
            return total
        }
    },
    methods:{
        close(){
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
.order-detail{
    width: 80%;
    background-color: #fff;
    color: #000;
    border-radius: 20px;
    position: relative;
    .order-info{
        h3{
            font-size: 18px;
        }
        span{
            display: inline-block;
            padding: 5px 7px;
            margin-top: 10px;
            background-color: #f9ca24;
            border-radius: 10px;
            color: #fff;
            &:last-child{
                background-color: #eb4d4b;
            }
        }
        
        p{
            margin: 0;
            padding: 5px;
        }
    }
    .order-item{
        max-height: 50vh;
        overflow: auto;
        img{
            width: 12vh;
            height: 12vh;
            object-fit: cover;
            border-radius: 50%;
        }
        .row{
            border-radius: 20px;
            background-color: #000;
            margin: 2px;
            color: #fff;
        }
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