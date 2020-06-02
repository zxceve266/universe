<template>
    <div class="category-list">
        <ul class=" d-flex justify-content-center flex-wrap">
            <li @click="setCatgory('全部')"
            :class="{active:currentCategory === '全部'}"
            >
                <span>全部</span>
            </li>
            <li 
            v-for ="item in categories"
            :key="item.id"
            :class="{active:currentCategory === item}"
            @click="setCatgory(item)"
            >
            {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
import{ mapGetters } from 'vuex'
    export default {
        computed:{
            ...mapGetters([
                'categories',
                'currentCategory',
                'setProdcutsNum'
            ]),

        },
        methods:{
            setCatgory(item){
                this.$store.commit('setCatgory',item)
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
        width: 70px;
        height: 70px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        padding: 10px;
        margin: 10px 10px;
        text-align: center;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 50%;
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