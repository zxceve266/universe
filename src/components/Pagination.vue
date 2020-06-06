<template>
    <nav class="mt-2 w-100">
        <ul class="d-flex justify-content-center" v-if="pagination.length > 0">
            <li :class="{'disabled': currentPage <= 0}" 
            @click.prevent="setCurrentPage((currentPage - 1),$event)"
            >
                <i class="fas fa-angle-left"></i>
            </li>

            <li v-for="(item, index) in pagination" :key="item.id" :class="{'active':index === currentPage}"
                @click.prevent="setCurrentPage(index)">
                <a>{{index + 1}}</a>
            </li>

            <li :class="{'disabled': currentPage >= pagination.length - 1}"
                @click.prevent="setCurrentPage((currentPage + 1),$event)">
                <i class="fas fa-angle-right"></i>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            pagination: {
                type: Array,
                default: function () {
                    return []
                }
            },
            currentPage: Number
        },
        methods: {
            setCurrentPage(page,e) {
                console.log(this.currentPage+1,e)
                scrollTo(0, 0)
                this.$emit('goSetCurrentPage', page)
            }
        }

    }
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        padding: 0;

        li {
            margin-right:6px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            text-align: center;
            cursor: pointer;
            box-shadow: 5px 5px 8px #cfcfcf,
                -5px -5px 8px #ffffff;

            a,
            i {
                font-size: 20px;
                line-height: 40px;
            }

            &:hover {
                background-color: #007bff;

                a,
                i {
                    color: #fff;
                }
            }
        }

        li.active {
            background-color: #007bff;

            a {
                color: #fff;
            }
        }

        .disabled {
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;
            user-select: none;
            pointer-events: none;
            background: #dddddd;

        }
    }
</style>