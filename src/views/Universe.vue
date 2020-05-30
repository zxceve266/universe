<template>
    <div class="universe overflow-hidden">
        <Navbar />
        <router-view class="pt-4 mt-4"/>
        <Footer />
        <CartIcon/>
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


<style>
.universe{
    position: relative;
}
</style>