<template>
  <nut-popup
      v-model:visible="show"
      position="bottom"
      @click-overlay="closeBoard()"
      overlay-class="nut-numberkeyboard-overlay"
  >
    <view class="keyboards" v-if="props.dataIndex===0">
      <!--  列  -->
      <view class="rows" v-for="(rows,index) in arr" :key="index">
        <view v-for="(item,index2) in rows" :key="index2">
          <view :class="`btn ${item.type==='value'?'':' btn-reverse'}`"
                @touchstart="(event)=>onTouchStart(item,event)"
          >
            <template v-if="item.type==='value'">{{ item.key }}</template>
            <image v-else-if="item.type==='lock'" style='width: 30px;height: 35px' src="../imgs/keyboard.svg" />
          </view>
        </view>
      </view>
    </view>
    <view class="keyboards" v-else>
      <view class="rows" v-for="(rows,index) in arr" :key="index">
        <view v-for="(item,index2) in rows" :key="index2">
          <view :class="`btn2 ${item.type==='value'?'':' btn-reverse'}`"
                @touchstart="(event)=>onTouchStart(item,event)"
          >
            <template v-if="item.type==='value'">{{ item.key }}</template>
            <image v-else-if="item.type==='lock'" style='width: 30px;height: 35px' src="../imgs/keyboard.svg" />
            <image v-else-if="item.type==='delete'" style='width: 28px;height: 30px' src="../imgs/del.svg" />
          </view>
        </view>
      </view>
    </view>
  </nut-popup>
</template>

<script lang="ts" setup>
import { ref, defineEmits, watch } from 'vue';
import { keyData, abbreviation, Item } from './keyboard-car-data';

const props = withDefaults(defineProps<{
  disableData?: boolean,
  dataIndex?: number,
  visible?: boolean,
  value?: string,
  maxLen?: number,
}>(), {
  disableData: false,
  dataIndex: 0,
  visible: false,
  value: '',
  maxLen: 7,// 车牌号一般7位数
});
const show = ref(props.visible);
const emit = defineEmits(['input', 'close', 'delete', 'update:value']);
const arr = ref<Item[][]>(props.dataIndex === 0 ? abbreviation : keyData);

const closeBoard = () => {
  emit('close');
};

watch(() => props.visible, (value) => {
  show.value = value;
});
watch(() => props.dataIndex, (value) => {
  arr.value = value === 0 ? abbreviation : keyData;
});

const onTouchStart = (item: Item, event: any) => {
  event.stopPropagation();
  switch (item.type) {
    case 'lock':
      closeBoard();
      break;
    case 'delete':
      emit('delete');
      // emit('update:value', props.value.slice(0, props.value.length - 1));
      break;
    case 'value':
      console.log('x2', item);
      emit('input', item.key);
      if (props.value.length < props.maxLen) {
        emit('update:value', props.value + item.key);
      } else {
        //todo proxy.$toast.warn(`车牌长度限制：${ props.maxLen }`);
      }
      break;
  }
};
//按住移动
const onTouchMove = (event: any) => {
  event.stopPropagation();//阻止事件冒泡,用于按错后挪开手指
  console.log('触发了onTouchMove');
};

//切换显示
const switchShow = (setShow?: boolean) => {
  if (setShow === undefined) {
    show.value = !show.value;
  } else {
    show.value = setShow;
  }
};

</script>
<script lang="ts">

//车牌号键盘
export default {
  name: 'keyboard-car',
};
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
      width: 12%;
      height: 80px;
      font-size: 26px;
      justify-content: center;
      line-height: 80px;
      float: left;

      .div:active {
        opacity: 0.6;
      }

      .div {
        display: inline-block;
        border-radius: 6px;
        background-color: #fff;
        height: 60px;
        line-height: 60px;
        width: 60px;
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

.keyboards {
  border-radius: 8px 8px 0 0;
  padding-bottom: 22px;
  margin-bottom: -1px;
  background-color: #f2f3f5;
  height: 200px;
  display: flex;
  flex-direction: column; //主轴是列,从上下排列
  justify-content: space-around; // 沿主轴方向分散对齐，所有的元素都平分空间,最上面和最下面的留白为平分空间的 1/2.
}

.rows {
  display: flex;
  flex-direction: row; // 主轴是行,左右排列
  justify-content: space-evenly;
}

.btn {
  width: 42px;
  height: 42px;
  line-height: 42px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center; //交叉轴方向,居中对齐
  cursor: pointer;
}

.btn:active {
  opacity: 0.6;
}

.btn-reverse {
  background-color: #1989fa;
  color: #fff;
  font-size: 15px;
}

.btn2 {
  @extend .btn;
  width: 35px;
  height: 35px;
  line-height: 35px;
}

</style>
