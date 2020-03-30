import Vue from 'vue'
import App from './layouts/App.vue'
Vue.config.productionTip = false
//引入字体设置
import 'lib-flexible/flexible'
//引入基础样式
import './assets/css/base.css'
//引入服务端配置模块
import server from './config/server.js'
Vue.prototype.$baseUrl =server.baseUrl;


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//引入axios
import './plugins/axios.js'

//引入store实例,管理vue实例
import store from './plugins/vuex.js';

//引入提交类型模块，绑定到vue实例上
import * as types from './store/types.js';
Vue.prototype.$types=types;


//引入路由的配置
import router from './plugins/router.js'

// 获取本地，同步vuex
let local = window.localStorage.getItem('user');

if(local){
  store.commit('user/USER',JSON.parse(local))
}

new Vue({
  render: h => h(App),
	router,
	store
}).$mount('#app')
