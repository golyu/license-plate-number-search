<template>
  <view class="root">
    <div v-for="(item,index) in props.textList" :key="index">
      <span>{{ item }}</span>
    </div>
  </view>
</template>
<script setup lang="ts">

const props = withDefaults(defineProps<{
  textList: string[];
}>(), {
  textList: '京A00001'.split(''),//新能源车牌号也只需要输入前7位
});
</script>
<script lang="ts">
//车牌号输入框
export default {
  name: 'keyboard-input',
};
</script>

<style lang="scss" scoped>
@import "../app";

.root {
  display: flex;
  flex-direction: row;
  justify-content: center;

  > div {
    border: 2px solid $primary-color;
    border-right: 0;
    width: 45px;
    height: 45px;
    line-height: 45px;
  }

  > div:first-child {
    border-left: 2px !important;
    background-color: $primary-color;
    border-radius: 25px 0 0 25px;

    span {
      color: white;
      display: flex;
      justify-content: center;
      justify-items: center;
    }
  }

  > div:nth-child(2) {
    //background-color: $primary-color;

    span {
      color: $primary-color;
    }
  }

  > div:last-child {
    transform: rotateZ(360deg);
    border-right: 2px !important;
    border-radius: 0 25px 25px 0;
  }
}
</style>
