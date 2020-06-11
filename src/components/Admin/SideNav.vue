<template>
    <div class="admin-sideNav min-vh-100"
    ref="sideNav"
    @click="toggle($event)"
    >
        <div class="side-content h-100">
            <h3 class="text-center pt-5">後臺<br>管理系統</h3>
            <ul class="h-50 p-0 text-center">
                <li>
                    <router-link :to="{name:'AddNew'}">
                        <i class="fas fa-plus-square"></i> 新增商品
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'ProductMgt'}">
                        <i class="far fa-object-group"></i>
                        管理商品
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'Orders'}">
                        <i class="far fa-folder-open"></i>
                        訂單管理
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'Home'}">
                        <i class="fas fa-rocket"></i>
                        返回商城
                    </router-link>
                </li>
            </ul>
        </div>
       
    </div>
</template>

<script>
    export default {
        
       methods:{
        toggle(e){
            if (e.target.href === 'http://localhost:8080/#/home') return
            this.$refs.sideNav.classList.toggle('active')
        }
    }
    }
</script>

<style lang="scss">
    .admin-sideNav {
        width: 15vw;
        background-color: #1f2833;
        color: #fff;
        transition: all 0.8s;
        // white-space: nowrap;
        position: relative;

        ul {
            list-style: none;
            // color: #fff;
            li {
                margin-top: 20px;
                font-size: 20px;
            }
        }

        

    }

    @media (max-width: 992px){
        .admin-sideNav{
            width: 50vw;
            transform: translateX(-50vw);
            position: fixed;
            z-index: 99;

            &.active{
                width:50vw;
                transform: translateX(0);
            }

            &::before{
                content: '';
                position: absolute;
                width: 50px;
                height: 50px;
                background-color: #000;
                top: 50%;
                right: -50px;
                z-index: 9999;
                user-select: all;
            }
        }
    }

   
</style>