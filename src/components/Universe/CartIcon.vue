<template>
    <div class="cartIcon d-flex justify-content-center align-items-center" @click="goToCheck">
        <i class="fas fa-rocket mt-2"></i>
        <span>{{cartItemNumber}}</span>
    </div>
</template>

<script>
 import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'cartItemNumber',
                'cartItem',
                'cartTotal'
            ])
        },methods:{
            goToCheck(){
               this.$router.push({name:'CheckOut'})
            }
        }
    }
</script>

<style lang="scss">
    .cartIcon{
        position: fixed;
        bottom: 2%;
        right: 2%;
        width: 15vh;
        height: 15vh;
        background-color: #1f2833;
        border-radius: 50%;
        box-shadow: 0 0 20px 5px #66fcf1;
        transition: box-shadow 0.5s ;
        z-index: 99;
        &:hover{
            box-shadow: 0 0 25px 6px #ff7979;
        }
        &:active{
            box-shadow: 0 0 25px 6px #ff7979;
            transform: scale(0.9);
        }
        i{
            font-size: 8vh;
            color: #fff;
        }
        span {
            position: absolute;
            top: 0;
            right: -1vh;
            width: 5vh;
            height: 5vh;
            border-radius: 50%;
            background-color: red;
            font-size: 18px;
            text-align: center;
            line-height: 5vh;
            color: #fff;
            font-style: normal;
        }
    }
</style>