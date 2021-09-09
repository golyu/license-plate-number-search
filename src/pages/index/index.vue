<template>
  <view class="index">
    <view>
      <img src alt />
    </view>
    <span>请输入车牌号</span>
    <input-car :text="state.carNumber" @click="handleClick('text', state.msg2, true)" />
    <keyboard-car
        v-model:visible="state.keyboardVisible"
        :data-index="state.carNumber.length"
        @delete="del"
        @close="closeKeyboard"
        @input="input"
    />
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
  name: 'Index',
};
</script>

<script lang="ts" setup>
import { reactive } from 'vue';
import KeyboardCar from '../../component/keyboard-car.vue';
import InputCar from '../../component/input-car.vue';

const state = reactive({
  msg: '?',
  msg2: '你成功了～',
  type: 'text',
  show: false,
  cover: false,
  keyboardVisible: true,
  carNumber: '',
});

// const keyBoardCarRef = ref<NonNullable<KeyboardCarType>>();

const handleClick = (type: string, msg: string, cover: boolean = false) => {
  state.show = !state.show;
  state.msg2 = msg;
  state.type = type;
  state.cover = cover;
  state.keyboardVisible = !state.keyboardVisible;
};
//键盘关闭
const closeKeyboard = () => {
  state.keyboardVisible = false;
};
const input = (msg: string) => {
  if (state.carNumber.length < 7) {
    state.carNumber += msg;
  }
  state.msg = msg;
  state.show = true;
  //切换键盘
};
const del = () => {
  if (state.carNumber.length > 0) {
    state.carNumber = state.carNumber.slice(0, state.carNumber.length - 1);
  }
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
