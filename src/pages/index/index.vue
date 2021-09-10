<template>
  <view class="index">
    <view>
      <img src alt />
    </view>
    <span>请输入车牌号</span>
    <input-car :text-list="car.number" @click="handleClick('text', state.msg2, true)" />
    <div class="details">
      <span v-for="(value,index) in car.details" :key="index">
        {{ value }}
      </span>
    </div>
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
import { reactive, computed } from 'vue';
import { getFirstName } from '../../car/first';
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
  // state.msg = msg;
  // state.show = true;
  //切换键盘
};
const del = () => {
  if (state.carNumber.length > 0) {
    state.carNumber = state.carNumber.slice(0, state.carNumber.length - 1);
  }
};
const car = computed(() => {
  const list = state.carNumber?.split('');
  //大于7位,截取前七位
  if (list.length > 7) {
    return {
      number: list.slice(0, 7),
      details: getFirstName(list.slice(0, 7)),
    };
  }
  //小于7位,补充到7位
  if (list.length < 7) {
    const len = 7 - list.length;
    for (let i = 0; i < len; i++) {
      list.push('');
    }
  }
  return { number: list, details: getFirstName(list) };
});

</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.details {
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  span {
    font-size: 20px;
    color: #666;
  }
}
</style>
