<template>
    <div class="fill my-5">
        <div class="row justify-content-around">
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
                                    <img :src="item.img" class="py-1 fill-img" alt="">
                                </div>
                                <div class="col-3">
                                    <h6>{{item.name}}</h6>
                                </div>
                                <div class="col-3 ">
                                    <p>數量:{{item.quantity}}</p>
                                </div>
                                <div class="col-3 ">
                                    總計:
                                    <p>{{item.quantity * item.price}}</p>
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
                            <input type="email" class="form-control" id="userEmail" placeholder="請輸入電子郵件">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="userName">收件人姓名</label>
                            <input type="text" class="form-control" id="userName" placeholder="請輸入姓名">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="userPhone">收件人手機</label>
                        <input type="text" class="form-control" id="userPhone" placeholder="請輸入手機">
                    </div>
                    <div class="form-group">
                        <label for="userPhone2">收件人電話</label>
                        <input type="text" class="form-control" id="userPhone2" placeholder="請輸入電話">
                    </div>
                    <div class="form-group">
                        <label for="userAddress">收件人地址</label>
                        <input type="text" class="form-control" id="userAddress" placeholder="請輸入地址">
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
                        <button type="submit" class="btn btn-primary text-right">送出訂單</button>
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
        computed: {
            ...mapGetters([
                'cartItemNumber',
                'cartItem',
                'cartTotal'
            ])
        },
    }
</script>

<style lang="scss">
    .card-header{
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