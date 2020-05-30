<template>
    <div class="overflow-hidden d-flex">
        <SideNav ref="sideNav"/>
        <router-view class="min-vh-100"/>
        <!-- <loading :active.sync="isLoading"></loading> -->
        <div class="toggle-btn d-lg-none" ref="adminBtn" @click="toggle()">
            <i class="fas fa-angle-double-right"></i>
        </div>
    </div>
</template>

<script>
// import AddNew from '../components/Admin/AddNew'
import SideNav from '../components/Admin/SideNav'
    export default {
        components:{
            SideNav
        },
        methods: {
            toggle() {
                this.$refs.sideNav.$el.classList.toggle('active')
                this.$refs.adminBtn.classList.toggle('active')
            }
        }
        
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

    @media (max-width: 992px){
        .admin-sideNav{
            overflow: hidden;
            position: fixed;
            width: 0;
            &.active{
                width:50vw;
            }
        }
    }

</style>