<template>
    <div class="fill my-5">
        <section class="container mt-5">
            <div class="procedure row justify-content-between  align-items-center">
                <div class="procedure-icon active">
                    <p class="pro-num">1</p>
                    <img src="../../assets/planet-w.png" alt="">
                    <p>確認訂單</p>
                </div>
                <div class="procedure-icon active">
                    <p class="pro-num">2</p>
                    <img src="../../assets/startup-w.png" alt="">
                    <p>填寫收件資料</p>
                </div>
                <div class="procedure-icon">
                    <p class="pro-num">3</p>
                    <img src="../../assets/rocket-w.png" alt="">
                    <p>完成訂單</p>
                </div>
            </div>
        </section>
        <div class="row justify-content-around mt-4">
            <section class="col-12 col-lg-6 mb-4 mt-2">
                <div class="accordion " id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-dark btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    此次購物明細
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                            data-parent="#accordionExample">
                            <div class="row align-items-center px-2 text-center" v-for="item in cartItem"
                                :key="item.index">
                                <div class="col-3">
                                    <img :src="item.newProduct.img" class="py-1 fill-img" alt="">
                                </div>
                                <div class="col-3">
                                    <h6>{{item.newProduct.name}}</h6>
                                </div>
                                <div class="col-3 ">
                                    <p>數量:{{item.newProduct.quantity}}</p>
                                </div>
                                <div class="col-3 ">
                                    總計:
                                    <p>{{item.newProduct.quantity * item.newProduct.price}}</p>
                                </div>
                            </div>
                            <div class="mt-2 p-2 text-right border-top">
                                <span class="badge badge-warning" style="font-size:18px">總數量 : {{cartItemNumber}}</span>
                                <span class="ml-4 badge badge-info" style="font-size:18px">總額 : {{cartTotal}}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section class="col-12 col-lg-6">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="userEmail">Email</label>
                            <input type="email" class="form-control" name="email" id="userEmail" placeholder="請輸入電子郵件"
                                v-model="orderInfo.email" :class="{'is-invalid':errors.has('email')}"
                                v-validate="'required|email'">
                            <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="userName">收件人姓名</label>
                            <input type="text" class="form-control" name="name" id="userName" placeholder="請輸入姓名"
                                v-model="orderInfo.name" :class="{'is-invalid':errors.has('name')}"
                                v-validate="'required'">
                            <span class="text-danger" v-if="errors.has('name')">請填寫你的大名</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="userPhone">收件人手機</label>
                        <input type="text" class="form-control" name="phone" id="userPhone" placeholder="請輸入手機"
                            v-model="orderInfo.phone" :class="{'is-invalid':errors.has('phone')}"
                            v-validate="'required'">
                        <span class="text-danger" v-if="errors.has('phone')">電話必須填寫</span>
                    </div>
                    <div class="form-group">
                        <label for="userAddress">收件人地址</label>
                        <input type="text" class="form-control" name="address" id="userAddress" placeholder="請輸入地址"
                            v-model="orderInfo.address" :class="{'is-invalid':errors.has('address')}"
                            v-validate="'required'">
                        <span class="text-danger" v-if="errors.has('address')">地址必須填寫</span>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-3 pt-0">付款方式</legend>
                            <div class="col-sm-9">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                                        value="option1" checked>
                                    <label class="form-check-label" for="gridRadios1">
                                        貨到付款
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                        value="option2">
                                    <label class="form-check-label" for="gridRadios2">
                                        信用卡支付
                                    </label>
                                </div>
                                <div class="form-check disabled">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3"
                                        value="option3" disabled>
                                    <label class="form-check-label" for="gridRadios3">
                                        分期付款
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div>
                        <button class="sp-btn btn-pulse-3 text-right" @click.prevent="addNewOrders" tag="buttom">送出訂單
                        </button>
                    </div>
                </form>
            </section>
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
                orderInfo: {
                    email: '',
                    name: '',
                    phone: '',
                    address: '',
                }
            }
        },
        computed: {
            ...mapGetters([
                'cartItemNumber',
                'cartItem',
                'cartTotal'
            ])
        },
        methods: {
            addNewOrders() {
                this.$validator.validate().then((valid) => {
                if (valid) {
                    // 當驗證成功時執行 AJAX 的行為
                    let date = new Date();
                    let year = date.getFullYear();
                    let month = date.getMonth() + 1;
                    let day = date.getUTCDate();
                    let hour = date.getHours();
                    let min = date.getMinutes();
                    let second = date.getSeconds();
                    let timeNow = `${year} 年 ${month} 月 ${day} 日 ${hour} 時  ${min} 分 ${second} 秒 `;

                    const orders = {
                        order: {
                            orderItem: [...this.cartItem],
                            orderInfo: {
                                ...this.orderInfo
                            },
                            orderTime: timeNow
                        },
                        createdAt: new Date()
                    }
                    this.$store.dispatch('addNewOrder', orders).then(() => {
                        this.$swal("以發送訂單", '', 'success')
                    })
                } else {
                    // 驗證失敗產生的行為
                    this.$swal(
                        {icon: 'error',
                        title: '送出失敗',
                        text: '所有欄位必須正確填寫',
                        })
            }
        })

        }
    }
    }
</script>

<style lang="scss">
    .card-header {
        background-color: #1f2833;
    }

    .fill {
        .fill-img {
            width: 10vh;
            height: 10vh;
            object-fit: cover;
        }
    }
</style>