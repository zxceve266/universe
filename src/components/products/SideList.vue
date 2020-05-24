<template>
    <div>
        <b-dropdown id="dropdown-1" :text="name" class="m-md-2">
            <b-dropdown-item @click.prevent="setCatgory('全部')">全部</b-dropdown-item>
            <b-dropdown-item 
            v-for="item in category" 
            :key="item.id"
            @click.prevent="setCatgory(item)"
            >{{item}}</b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:'全部'
            }
        },
        props:{
            category:Array
        },
        methods:{
            setCatgory(item){
                this.$emit('chooseCategory',item)
                this.name = item
            }
        }
    }
</script>

<style lang="scss">

</style>