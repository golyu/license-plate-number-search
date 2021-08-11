<template>
  <view :class="`keyboard${props.show ? ' show' : ''}`">
    <div>????</div>
    <text key="{index}">沃日</text>
  </view>
</template>

<script lang="ts">
//车牌号键盘
export default {
  name: 'keyboard-car',
}
</script>
<script lang="ts" setup>
const props = defineProps<{ show: boolean }>();
</script>


<style lang="scss">
.keyboard {
  background-color: #ddd;
  position: fixed;
  z-index: 10000;
  bottom: 0;
  display: none;
  width: 100%;
  justify-content: center;

  &.show {
    display: flex;
  }

  .keyboard-ul {
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 1%;
    position: relative;

    .li {
      display: block;
      width: 10%;
      height: 80px;
      font-size: 28px;
      justify-content: center;
      line-height: 80px;
      float: left;

      .div:active {
        opacity: 0.6;
      }

      .div {
        display: inline-block;
        width: 85%;
        border-radius: 6px;
        background-color: #fff;
        height: 60px;
        line-height: 60px;
        text-align: center;
      }

      .disableClass {
        background-color: #e5e5e5;
      }
    }

    .buttons {
      position: absolute;
      bottom: 0;

      text-align: center;
      right: 1%;

      .buttons-div {
        // min-width: 260px;
        text-align: center;
        float: right;
        margin-top: 10px;
        display: flex;
      }

      .first-button {
        width: 90%;
        // background-color: #adb3bc;
        position: relative;
      }

      .second-button {
        width: 132px;
        height: 60px;
        margin-left: 16px;
        position: relative;
      }
    }
  }

  .icon-delete-character {
    font-size: 32px;
  }
}
</style>
