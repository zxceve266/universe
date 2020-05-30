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
                if(this.cartItemNumber !== 0){
                    this.$router.push({name:'Confirm'})
                }else{
                    return
                }
            }
        }
    }
</script>

<style lang="scss">
    .cartIcon{
        position: fixed;
        bottom: 3%;
        right: 4%;
        width: 10vh;
        height: 10vh;
        background-color: #1f2833;
        border-radius: 50%;
        box-shadow: 0 0 20px 5px #66fcf1;
        transition: box-shadow 0.5s ;
        z-index: 99;
        &:hover{
            box-shadow: 0 0 25px 6px #ff7979;
            transform: scale(0.9);
        }
        i{
            font-size: 5vh;
            color: #fff;
        }
        span {
            position: absolute;
            top: 0;
            right: -2vh;
            width: 4vh;
            height: 4vh;
            border-radius: 50%;
            background-color: red;
            font-size: 18px;
            text-align: center;
            line-height: 4vh;
            color: #fff;
            font-style: normal;
        }
    }
</style>