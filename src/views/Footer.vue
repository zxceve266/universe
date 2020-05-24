<template>
  <footer class="d-flex align-items-center">
    <div class="container">
        <div class="row d-flex justify-content-center mb-4">
                <router-link :to="{name:'Home'}">宇宙探險</router-link>
                <router-link :to="{name:'Products'}">產品列表</router-link>
                <router-link :to="{name:'Serve'}">服務</router-link>
        </div>
        <div class="row">
            <p class="w-100 text-center">此作品僅供展示用，並無其他商業用途</p>
        </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
footer{
    width: 100%;
    height: 30vh;
    background-color: #000;
    color: #fff;
    a{
        font-size: 20px;
        margin: 0 20px;
    }
}
</style>