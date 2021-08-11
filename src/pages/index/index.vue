<template>
  <view class="index">
    <view>
      <img src alt />
    </view>
    {{ state.msg }}
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', state.msg2, true)">点我</nut-button>
    </view>
    <keyboard-car :show="state.show" />
    <nut-toast
      :msg="state.msg"
      v-model:visible="state.show"
      :type="state.type"
      :cover="state.cover"
    />
  </view>
</template>

<script lang="ts">
export default {
  name: 'Index'
}
</script>

<script lang="ts" setup>
import { reactive, } from 'vue';
import KeyboardCar from '../../component/keyboard-car.vue';

const state = reactive({
  msg: '欢迎使用 NutUI3.0 开发小程序',
  msg2: '你成功了～',
  type: 'text',
  show: false,
  cover: false,
});

const handleClick = (type: string, msg: string, cover: boolean = false) => {
  state.show = !state.show;
  state.msg2 = msg;
  state.type = type;
  state.cover = cover;
};
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
