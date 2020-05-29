<template>
    <div class="d-flex">
        <SideNav/>
        <router-view class="vh-100"/>
        <!-- <loading :active.sync="isLoading"></loading> -->
    </div>
</template>

<script>
// import AddNew from '../components/Admin/AddNew'
import SideNav from '../components/Admin/SideNav'
    export default {
        components:{
            SideNav
        }
    }
</script>

<style>

</style>