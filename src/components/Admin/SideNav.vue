<template>
    <div class="admin-sideNav d-none d-md-block">
        <h3 class="text-center mt-5">後臺<br>管理系統</h3>
        <ul class="h-50 p-0 text-center">
            <li>
                <router-link :to="{name:'AddNew'}">
                    新增商品
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'ProductMgt'}">
                    管理商品
                </router-link>
            </li>
            <li>訂單管理</li>
            <li>
                <router-link :to="{name:'Home'}">
                    返回商城
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .admin-sideNav {
        width: 15vw;
        background-color: #1f2833;
        color: #fff;
        ul{
            list-style: none;
            // color: #fff;
            li{
                margin-top: 20px;
                font-size: 20px;
            }
        }
    }
</style>