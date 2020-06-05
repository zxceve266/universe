<template>
    <div class="universe overflow-hidden">
        <Navbar2 />
        <router-view class="pt-4 mt-4"/>
        <Footer />
        <CartIcon/>
    </div>
</template>

<script>
    import Navbar2 from '../views/Navbar2'
    import Footer from '../views/Footer'
    import CartIcon from '../components/Universe/CartIcon'
    export default {
        components: {
            Navbar2,
            Footer,
            CartIcon
        },
    }
</script>


<style>
.universe{
    position: relative;
}
</style>