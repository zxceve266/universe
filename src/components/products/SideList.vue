<template>
    <div class="category-list container-fluid">
        <ul>
            <li @click="setCatgory('全部')"
            :class="{active:categoryClass === '全部'}"
            >
                <span>全部</span>
                <span class="count">{{category.length}}</span>
            </li>
            <li 
            v-for ="item in category"
            :key="item.id"
            :class="{active:categoryClass === item}"
            @click="setCatgory(item)"
            >
            {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                categoryClass:'全部'
            }
        },
        props:{
            category:Array
        },
        methods:{
            setCatgory(item){
                this.categoryClass = item
                this.$emit('chooseCategory',item)
            }
        }
    }
</script>

<style lang="scss" scoped>
.category-list{
    ul{
        list-style: none;
        padding: 10px;
    }
    li{
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        border-left: 1px solid  rgba(0, 0, 0, 0.15);
        border-right: 1px solid  rgba(0, 0, 0, 0.15);
        padding: 10px;
        text-align: center;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        &:first-child{
            border-top: 1px solid  rgba(0, 0, 0, 0.15);
            border-radius: 10px 10px 0 0;
        }
        &:last-child{
            border-radius: 0 0 10px 10px;
        }
        &:hover{
            background-color: #007bff;
            color: #fff;
        }
        
    }

    .active{
        background-color: #007bff;
        color: #fff;
    }
    .count{
        background-color: red;
        width: 30px;
        height: 30px;
        color: #fff;
        border-radius: 50%;
    }
}
</style>