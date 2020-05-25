<template>
    <div class="info container">
        <div class="row h-75">
            <div class="col-12 col-md-7">
                <img :src="getItem.img" class="info-img" alt="Responsive image">
            </div>
            <div class="col-12 col-md-5">
                <h2>{{getItem.name}}</h2>
                <p>{{getItem.description}}</p>
                <div class="quantity">
                    <span class="green-btn">&#8722;</span>
                    <span class="number">5</span>
                    <span class="green-btn">&#43;</span>
                </div>
                <h3 class="info-price">{{getItem.price}}</h3>
                <button>加入購物車</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['findItem']),
        getItem(){
            return this.findItem(this.$route.params.id)[0]
        }
    },
    beforeRouteEnter (to, from, next) {//進來前先改變info狀態 因為beforeEnter無法收到thiis 所以用Vm代替
        next(vm => {
            vm.$store.commit('ToggleInfo')
        })
    },
    beforeRouteLeave(to, from, next) {//進來後改變info狀態
        this.$store.commit('ToggleInfo')
        next()
    }
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