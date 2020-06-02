<template>
    <div class="container">
        <h2 class="text-center mt-4">管理商品</h2>
        <table class="table">
            <thead class="thead-dark">
                <tr class="text-center">
                    <th scope="col">商品名稱</th>
                    <th scope="col">商品類別</th>
                    <th scope="col">商品價格</th>
                    <th scope="col">編輯商品</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-center"
                v-for="item in setPaginationItem[currentPage]"
                :key="item.id"
                >
                    <td class="font-weight-bold">{{item.name}}</td>
                    <td>{{item.category}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <button class="btn btn-danger" @click="removeProduct(item.id)">
                            <i class="fas fa-trash-alt"></i>
                            刪除
                        </button>
                        <button class="btn btn-success" @click="editProduct">
                            <i class="far fa-edit"></i>
                            編輯
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
                'products'
            ]),
            setPaginationItem (){
                let perPage = this.itemPerPage
                const paginationData = []
                let products = [...this.products]
                products.forEach(function(item,index){
                    if(index % perPage === 0 ){
                        paginationData.push([])
                    }
                    const page = parseInt(index / perPage , 10)
                    paginationData[page].push(item.newProduct)
                })
                return paginationData
            }
        },
        methods:{
            editProduct(){
                
            },
            removeProduct(id){
                let that = this
                that.$swal({
                    title: '確定刪除嗎?',
                    text: '一但刪除，資料就無法復原了',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '確定刪除！',
                }).then(function (e) {
                    if(e.isConfirmed){
                        that.$store.dispatch('removeProduct',id)
                        that.$swal(
                            '刪除！',
                            '你的資料已經被刪除了',
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

                
            },
            setCurrentPage(page){
                this.currentPage = page
            }
        }
    }
</script>

<style lang="scss" scoped>
    tr{
        td{
            vertical-align: middle;
        }
    }
</style>