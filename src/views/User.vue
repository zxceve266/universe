<template>
<div class="user overflow-hidden">
    <div class="container h-100 d-flex align-items-center justify-content-center justify-content-md-start">
        <form class=" my-auto" v-if="!currentUser">
            <h3>管理員登入</h3>
            <div class="form-group">
                <label for="exampleInputEmail1">電子郵件</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    v-model="email">
                <small id="emailHelp" class="form-text text-muted">請輸入電子信箱</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">密碼</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">記住我</label>
            </div>
            <button  class="sp-btn btn-pulse-2" @click.prevent="signIn">登入</button>
        </form>
        <div class="container text-center" v-else>
            <h2>歡迎 {{currentUser}}</h2>
            <p>可以繼續 <router-link :to="{name:'Products'}">逛商城</router-link>，或是去 <router-link :to="{name:'Admin'}">管理員介面</router-link></p>
            <button  class="sp-btn btn-pulse" @click.prevent="signOut">登出</button>
        </div>
        <loading :active.sync="isLoading"></loading>
    </div>
</div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        data() {
            return {
                email: '',
                password: '',
            }
        },
        computed: {
            ...mapGetters([
                'currentUser',
                'isLoading'
            ])
        },
        methods: {
            signIn() {
                const user = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('signIn', user).then(() => {
                    this.currentUser === null ? alert('登入失敗') : this.$swal("以登入", '', 'success')
                })
            },
            signOut() {
                let that = this
                that.$swal({
                    title: '確定登出嗎?',
                    text: '',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '確定登出！',
                }).then(function (e) {
                    if(e.isConfirmed){
                        that.$store.dispatch('signOut')
                        that.$swal(
                            '登出！',
                            '你的帳號已經被登出了',
                            'success'
                        );
                    }else{
                        that.$swal(
                            '已取消！',
                            '',
                            'error'
                        );
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
.user{
    background: url('../assets/login.webp') no-repeat;
    background-position:bottom;
    background-size: cover;
    height:100vh;
    h3,h2,p{
        color:#fff
    }

    label{
        color:#fff
    }
}
</style>