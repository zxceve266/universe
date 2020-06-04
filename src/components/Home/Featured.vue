<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide img-2"></div>
            <div class="swiper-slide img-5"></div>
            <div class="swiper-slide img-4"></div>
            <div class="swiper-slide img-3"></div>
            <div class="swiper-slide img-1"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
    export default {
        mounted () {
            new Swiper('.swiper-container',{
                autoplay:{
                    delay: 3000,
                },
                speed:2000,
                effect : 'fade',
            });
        },
    }
</script>

<style lang="scss" scoped>
    .swiper-feature-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .swiper-slide {
        width: 100vh;
        height: 100vh;
        display: block;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        transition: all .5s;
        overflow: hidden;
    }

    .img-1 {
        background-image: url('https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    }

    .img-2 {
        background-image: url('https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    }

    .img-3 {
        background-image: url('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia18182-uranus-voyager1.png');
    }

    .img-4 {
        background-image: url('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/26306658253_080bac1ba5_o.jpg');
    }
    .img-5 {
        background-image: url('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/crop_p_color2_enhanced_release_small.png');
    }
</style>