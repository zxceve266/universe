<template>
    <div class="overflow-hidden d-flex">
        <SideNav/>
        <router-view class="min-vh-100"/>
        <!-- <loading :active.sync="isLoading"></loading> -->
        
    </div>
</template>

<script>
// import AddNew from '../components/Admin/AddNew'
import SideNav from '../components/Admin/SideNav'
    export default {
        components:{
            SideNav
        },
        
    }
</script>

<style lang="scss">
    .toggle-btn {
        position: fixed;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 5vh;
        height: 5vh;
        background-color: #1f2833;
        text-align: center;
        transition: all 0.8s;
        cursor: pointer;
        i {
            color: white;
            font-size: 3vh;
            line-height: 5vh;
        }
        &.active{
            left: 50vw;
        }
    }
    .mask{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.7);
    }

    

</style>