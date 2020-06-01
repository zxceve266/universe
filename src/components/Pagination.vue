<template>
    <nav aria-label="Page navigation" class="mt-2 w-100">
        <ul class="pagination  justify-content-center"
        v-if="pagination.length > 0"
        >
            <li class="page-item"
            :class="{'disabled': currentPage === 0}"
            >
                <a class="page-link" href="#" 
                aria-label="Previous"
                @click.prevent="setCurrentPage(currentPage - 1)"
                >
                    上一頁
                </a>
            </li>

            <li class="page-item"
            v-for="(item, index) in pagination"
            :key="item.id"
            :class="{'active':index === currentPage}"
            >
                <a class="page-link" href="#" @click.prevent="setCurrentPage(index)">{{index + 1}}</a>
            </li>

            <li class="page-item" 
            :class="{'disabled': currentPage === pagination.length - 1}"
            >
                <a class="page-link" 
                href="#" aria-label="Next" 
                @click.prevent="setCurrentPage(currentPage + 1)">
                    下一頁
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props:{
            pagination:{
                type:Array,
                default:function(){
                    return []
                }
            },
            currentPage:Number
        },
        methods:{
            setCurrentPage(page){
                scrollTo(0,0)
                this.$emit('goSetCurrentPage',page)
            }
        }

    }
</script>

<style>

</style>