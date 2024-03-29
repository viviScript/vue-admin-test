import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'; // lang i18n
import '@/styles/index.scss'; // 全局样式
import setTheme from './theme'; // global theme css
import App from './App';
import store from './store'; // vuex
import router from './router'; // 路由
import '@/icons'; // icon
import '@/config/permission'; // 权限控制
import * as filters from './filters'; // 全局过滤器
/**
 * 如果不想使用mock-server
 * 您希望将MockJs用于模拟api
 * 您可以执行: mockXHR()
 */
import { mockXHR } from '../mock';
// 开发环境开启mock
if (process.env.NODE_ENV === 'development') {
  mockXHR();
}
let aaNum = 1;
setInterval(function() {
  aaNum++;
  if (aaNum % 2 === 0) {
    setTheme('chalk');
  } else {
    setTheme('light');
  }
}, 5000);
console.log({
  '接口路径': process.env.VUE_APP_BASE_API,
  '打包模式': process.env.NODE_ENV,
  '环境变量': process.env.VUE_APP_ENV
});

// 全局定义过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

// set ElementUI lang to EN
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
