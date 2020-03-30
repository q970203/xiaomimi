import Vue from 'vue'
import vm from '../main.js'
import axios from 'axios'
import router from './router.js'
import store from './vuex.js'
axios.interceptors.request.use(function (config) {
	console.log('拦截器')
	//请求发出之前设置统一的token
	let token = window.localStorage.getItem('user')
	token = token ? JSON.parse(window.localStorage.getItem('user')).token : '',
	
	//  let token = store.state.user.user.token;
	// token = token ? token : '';
	// 
	config.headers = {
	 	token:token
 }
 // 控制loading显示
  store.state.bLoading=true;
  return config;
}, function (error) {
  return Promise.reject(error);
});
//添加一个响应的拦截器
axios.interceptors.response.use(function(response){
	store.state.bLoading= false;
	let currentRoute = router.currentRoute.fullPath;
	console.log('currentRoute',currentRoute)
	console.log("ddfzfdz",response.data.err)
	if(response.data.err!=0 && !currentRoute.includes('/login') ){
		router.push({
			path:'/reg',
			query:{p:currentRoute}
		})
	}
	return response;
},function(error){
	return Promise.reject(error)
});

Vue.prototype.$axios = axios;
window.axios = axios
export default axios;
