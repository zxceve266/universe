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
                <tr class="text-center" v-for="item in setPaginationItem[currentPage]" :key="item.id">
                    <td class="font-weight-bold">{{item.order.orderTime}}</td>
                    <td>{{item.id}}</td>
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
        <Pagination
            :pagination="setPaginationItem"
            :currentPage="currentPage"
            @goSetCurrentPage="setCurrentPage"
        >
        </Pagination>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Pagination from '../Pagination'
    export default {
        data(){
            return{
                itemPerPage:7, //設定每一頁的訂單數量
                currentPage:0  //目前分頁
            }
        },
        components:{
            Pagination
        },
        computed:{
            ...mapGetters([
                'orders',
                'orderNumber'
            ]),
            setPaginationItem (){
                let perPage = this.itemPerPage
                const paginationData = []
                let orders = [...this.orders]
                orders.forEach(function(item,index){
                    if(index % perPage === 0 ){
                        paginationData.push([])
                    }
                    const page = parseInt(index / perPage , 10)
                    paginationData[page].push(item)
                })
                return paginationData
            }
        },
        methods:{
            setCurrentPage(page){
                this.currentPage = page
            }
        }
    }
</script>

<style>

</style>