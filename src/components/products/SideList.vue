<template>
    <div class="category-list">
        <ul class=" d-flex justify-content-center flex-wrap">
            <li @click="setCatgory('全部')" :class="{active:currentCategory === '全部'}">
                <span>全部</span>
            </li>
            <li v-for="item in categories" :key="item.id" :class="{active:currentCategory === item}"
                @click="setCatgory(item)">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'categories',
                'currentCategory',
                'setProdcutsNum'
            ]),

        },
        methods: {
            setCatgory(item) {
                this.$store.commit('setCatgory', item)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .category-list {
        position: sticky;
        top: 120px;

        ul {
            list-style: none;
            padding: 10px;
        }

        li {
            width: 70px;
            height: 70px;
            padding: 10px;
            margin: 10px 10px;
            text-align: center;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-radius: 50%;
            background: #ffffff;
           box-shadow:  6px 6px 15px #d1d1d1, 
             -6px -6px 15px #ffffff;
            // transition: all 0.5s;
            position: relative;

            &::after {
                content: "";
                display: inline-block;
                position: absolute;
                z-index: -1;
                width: 100%;
                height: 100%;
                border: inherit;
                top: 0;
                left: 0;
                background-color: inherit;
                border-radius: inherit;
                transition: all .3s;
            }

            &:hover {
                background-color: #007bff;
                color: #fff;
                transform: scale(1.1);
                &::after {
                    transform: scale(1.3);
                    opacity: 0;
                }
            }


            // &:hover {
            //     &::after {
            //         transform: scaleX(1.1) scaleY(1.3);
            //         opacity: 0;
            //     }
            // }

        }

        .active {
            background-color: #007bff;
            color: #fff;
        }

        .count {
            background-color: red;
            width: 30px;
            height: 30px;
            color: #fff;
            border-radius: 50%;
        }
    }
</style>