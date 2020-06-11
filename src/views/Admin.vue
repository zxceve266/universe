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
    .mask{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.7);
    }

    

</style>