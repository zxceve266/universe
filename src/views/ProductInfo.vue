<template>
    <div class="info container">
        <div class="row h-75">
            <div class="col-12 col-md-7">
                <img src="https://picsum.photos/1024/480/?image=22" class="info-img" alt="Responsive image">
            </div>
            <div class="col-12 col-md-5">
                <h2>test</h2>
                <p>A delicious tomato based pizza topped with mozzarella</p>
                <div class="quantity">
                    <span class="green-btn">&#8722;</span>
                    <span class="number">5</span>
                    <span class="green-btn">&#43;</span>
                </div>
                <h3 class="info-price">$600</h3>
                <button>加入購物車</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.info{
    height: 100vh;
    display: flex;
    align-items: center;
    .info-img{
        width: 100%;
    }
}

.green-btn{
    width: 30px;
    height: 30px;
    background-color: #66fcf1;
    display: inline-block;
}
</style>