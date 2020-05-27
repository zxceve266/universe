<template>
    <section class="section-title">
        <div class="container mt-5">
            <div class="row justify-content-between align-items-center">
                <div class="col-md-8 text-center text-md-left">
                    <h2>宇宙：人類最後的邊疆</h2>
                    <p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit </p>
                    <p class="lead">consequuntur praesentium laudantium. Veritatis nisi voluptate suscipit assumenda!
                        Corporis et modi
                        consequuntur nemo alias nam adipisci impedit culpa ea recusandae!</p>
                    <p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum et, suscipit
                        consectetur asperiores officiis dolor accusamus optio molestias accusantium quasi corrupti ipsum
                        quis ut saepe est. Doloremque asperiores eaque quia, libero, expedita iusto natus similique
                        debitis
                        quae itaque enim ullam?</p>
                    <br>
                    <button type="button" class="btn btn-primary btn-lg">Learn More</button>
                </div>
                <div class="col-md-4 d-none d-md-block">
                    <img src="../../assets/astronaut.png" class="img-fluid w-100 h-100" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .section-title {
        width: 100%;
        height: auto;
        background-color: #1f2833;
        position: relative;
        display: flex;
        justify-content: center;
        // align-items: center;

        &::before {
            content: "";
            width: 100%;
            height: 30vh;
            position: absolute;
            top: 0px;
            transform: skewY(-6deg) translateY(-50%);
            background-color: inherit;
        }

        &::after {
            content: "";
            width: 100%;
            height: 30vh;
            position: absolute;
            bottom: -30px;
            transform: skewY(6deg) translateY(50%);
            background-color: inherit;
        }

        h2 {
            color: #c5c6c7;
            font-size: 3rem;
            letter-spacing: 5px;
        }

        p {
            color: #c5c6c7;
            line-height: 1.5;
        }

        button{
            position: relative;
            z-index: 1;
        }

        img {
            object-fit: contain;
            position: relative;
            transform: translateY(0);
            animation: float 3s infinite ease-in-out alternate;
            z-index: 1;
        }

        @keyframes float {
            0% {
                transform: translateY(50px);
            }

            ;

            100% {
                transform: translateX(0px);
            }
        }
    }
</style>