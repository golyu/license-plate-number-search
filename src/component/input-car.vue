<template>
  <view class="root">
    <div v-for="(item,index) in textList" :key="index">
      <span>{{ item }}</span>
    </div>
  </view>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  text: string;
}>(), {
  text: '京A00001',//新能源车牌号也只需要输入前7位
});
const textList = computed(() => {
  const list = props.text?.split('');
  //大于7位,截取前七位
  if (list.length > 7) {
    return list.slice(0, 7);
  }
  //小于7位,补充到7位
  if (list.length < 7) {
    const len = 7 - list.length;
    for (let i = 0; i < len; i++) {
      list.push('');
    }
  }
  return list;
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
    border-right: 2px !important;
    border-radius: 0 25px 25px 0;
  }
}
</style>
