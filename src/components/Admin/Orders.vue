<template>
    <div class="container">
        <h2 class="text-center mt-4">管理訂單</h2>
        <table class="table">
            <thead class="thead-dark">
                <tr class="text-center">
                    <th scope="col">購買日期</th>
                    <th scope="col">訂單編號</th>
                    <th scope="col">是否付款</th>
                    <th scope="col">查看訂單</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-center" v-for="item in orders" :key="item.id">
                    <td class="font-weight-bold">{{item.order.orderTime}}</td>
                    <td class="font-weight-bold">{{item.id}}</td>
                    <td>已付款</td>
                    <td>
                        <button class="btn btn-success">
                            <i class="fas fa-search"></i>
                            查看
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        computed:{
            ...mapGetters([
                'orders',
                'orderNumber'
            ])
        }
    }
</script>

<style>

</style>