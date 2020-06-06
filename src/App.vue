<template>
  <div id="app">
    <router-view></router-view>
    <loading :active.sync="isLoading"></loading>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'isLoading'
      ])
    },
    created() {
      this.$store.commit('ToggleLoading')
      this.$store.dispatch('setOrderRef')
      this.$store.dispatch('setProdcutsRef').then(() => { //讓Products資料同步
        this.$store.dispatch('checkUser') //檢查是否有登入狀態
      })
    },
    mounted() {

    }
  }
</script>


<style lang="scss">
  $color-primary: #26E089;
  $color-primary-dark: #00B297;
  $color-secondary: #FF5F87;
  $color-secondary-dark: #FB0779;
  $color-tertiary: #1BDBD1;
  $color-tertiary-dark: #1fa2ff;
  $color-orange: #FFB300;
  $color-purple: #6F16FD;
  $color-blue:#66fcf1;
  $padding-btn: 10px 50px;

  #app {
    font-family: 'Noto Sans TC', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }

  .space {
    margin-top: 60px;
  }

  .sp-btn {
    //最基本Btn Style
    font-size: 18px;
    border: none;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border-radius: 12px;
    color: #fff;
    position: relative;
    cursor: pointer;
    box-shadow: 0 5px 8px rgba(0, 0, 0, .4);

    &:focus,
    &:focus::after {
      outline: none;
    }

    &:active {
      transform: translateY(2px);
    }
  }

  .btn-flip,.btn-flip-2 {
    //按鈕元素翻轉
    overflow: hidden;
    background-image: linear-gradient(to right, $color-primary, $color-primary-dark);

    // 選擇所有子元素
    &>* {
      height: 100%;
      width: 100%;
      display: inline-block;
      transition: all .4s;
    }

    &__visible {
      padding: $padding-btn;
    }

    &__invisible {
      position: absolute;
      padding: 15px 0;
      left: 0;
      top: -100%;
    }

    &:hover &__visible {
      transform: translateY(100%);
    }

    &:hover &__invisible {
      top: 0;
    }

  }
  .btn-flip-2{
     background-image: linear-gradient(to right, $color-secondary, $color-secondary-dark);
  }


  .btn-pulse,
  .btn-pulse-2,
  .btn-pulse-3{
    //按鈕脈衝樣式
    padding: $padding-btn;
    background-image: linear-gradient(to right, $color-secondary, $color-secondary-dark);
    z-index: 1;

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
      background: inherit;
      border-radius: inherit;
      transition: all .5s;
    }

    &:hover {
      &::after {
        transform: scaleX(1.1) scaleY(1.3);
        opacity: 0;
      }
    }
  }

  .btn-pulse-2 {
    background-image: linear-gradient(to right, $color-primary, $color-primary-dark);
  }
  .btn-pulse-3 {
    background-image: linear-gradient(to right, $color-tertiary, $color-tertiary-dark);
  }


  .btn-fill {//按鈕填滿
    padding: $padding-btn;
    background: transparent;
    color: $color-blue;
    border: 1px solid $color-blue;
    z-index: 1;
    overflow: hidden;

    &:hover {
      span {
        color: #263238;
        transition: all 0.2s;
      }
    }

    &::after {
      background: $color-blue;
      content: "";
      height: 100%;
      width: 100%;
      top: 0;
      left: -230px;
      position: absolute;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      z-index: -1; // position of the pseudo-element behind the text
    }

    &:hover::after {
      left: 0;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      color: #fff;
    }
  }


  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #fff;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
</style>