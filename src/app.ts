import { createApp } from 'vue';
import { Button, Toast, Popup } from '@nutui/nutui-taro';
import '@nutui/nutui-taro/dist/style.css';

import './app.scss';

const App = createApp({
  onShow(_) {
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

// @ts-ignore
App.use(Button).use(Toast).use(Popup);

export default App;
