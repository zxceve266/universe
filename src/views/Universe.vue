<template>
    <div class="universe ">
        <Navbar />
        <transition name="fade">
            <router-view class="pt-4 mt-4" />
        </transition>
        <Footer />
        <CartIcon />
    </div>
</template>

<script>
    import Navbar from '../views/Navbar'
    import Footer from '../views/Footer'
    import CartIcon from '../components/Universe/CartIcon'
    export default {
        components: {
            Navbar,
            Footer,
            CartIcon
        },
    }
</script>


<style lang="scss">
    .universe {
        position: relative;
    }

    div.floating-cart {
        position: fixed;
        top: 0;
        left: 0;
        width: 300px;
        background: #fff;
        border-radius: 25px;
        z-index: 999;
        overflow: hidden;
    }

    div.floating-cart>.card {
        white-space: nowrap;
        &:hover {
            transform: scale(1);
        }
    }

    .universe.startMove div.floating-cart {
        top: -10% !important;
        left: 82% !important;
        transform: scale(0.2);
        transition: all 600ms ease-out;
    }

    .universe.toCart div.floating-cart {
        top: -28% !important;
        left: 82% !important;
        transform: scale(0);
        transition: all 200ms ease-out;
    }
    .universe.toCart{
        .cartIcon{   
        transform: scale(1.2);  
        background-color: red;
        }
    }
    .universe.toCart {
        nav .cart-list {
            transform:scale(1.3);
            a,i{
                color:#fff;
            }
        }
    }


    @media (max-width: 992px) {
        .universe.startMove div.floating-cart {
            top: 40% !important;
            left: 75% !important;
        }

        .universe.toCart div.floating-cart {
            top: 60% !important;
            left: 75% !important;
        }
    }

    @media (max-width: 768px) {
        .universe.startMove div.floating-cart {
            left: 70% !important;
        }

        .universe.toCart div.floating-cart {
            left: 70% !important;
        }
    }

    @media (max-width: 470px) {
        .universe.startMove div.floating-cart {
            left: 50% !important;
        }


        .universe.toCart div.floating-cart {
            left: 50% !important;
        }
    }

    
</style>