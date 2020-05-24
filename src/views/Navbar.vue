<template>
    <div>
        <b-navbar toggleable="lg" type="dark" >
            <b-navbar-brand :to="{name:'Home'}">宇宙探險</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="{name:'Home'}">首頁</b-nav-item>
                    <b-nav-item :to="{name:'Products'}">產品</b-nav-item>
                    <b-nav-item :to="{name:'Serve'}">服務</b-nav-item>
                    <b-nav-item :to="{name:'Travel'}">旅遊</b-nav-item>
                    <b-nav-item :to="{name:'About'}">關於</b-nav-item>
                    <b-nav-item :to="{name:'Admin'}">後台</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>登入</em>
                        </template>
                        <b-dropdown-item href="#">個人資料</b-dropdown-item>
                        <b-dropdown-item href="#">Log In</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>

</template>

<script>
    export default {

    }
</script>

<style lang="scss">
.navbar{
    width: 100%;
    background-color: #000;
    // position: fixed !important;
    // z-index: 99;
    left: 0;
    top: 0;
}
.nav-item {
    font-size: 20px;
    margin: 0 10px;
}

.navbar-dark .navbar-nav .nav-link{
    color: #66fcf1;
}

.navbar-dark .navbar-toggler{
    border-color: #66fcf1;
}

.navbar-toggler-icon{
    color: #66fcf1;
}

</style>