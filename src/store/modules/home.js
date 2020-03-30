// import {get} from '../service.js'
import axios from '../../plugins/axios.js';
import * as types from '../types'//整体输入，存为types对象

const state={
	currentIndex: 0,
	nextIndex: 1,
	timer: null,
	active: 0,
  miaoshaList:null,
	phoneList:null,
	jiadianList:null,
	items: [{
			text: '手机 电话卡',
			id: "01"
		}, {
			text: '电视 盒子',
			id: "02"
		}, {
			text: '笔记本 平板',
			id: "03"
		},
		{
			text: '家电 插线板',
			id: "04"
		}, {
			text: '出行 穿戴',
			id: "05"
		}, {
			text: '智能 路由器',
			id: "06"
		},
		{
			text: '电源 配件',
			id: "07"
		}
	],
}

let actions = {
	//请求数据
	[types.HOME]({commit,state},payload){
		axios.all([
		axios({url:'/api/goods/goodsList',method:"get", params:{_limit:4,_type:"miaosha"}}), 
		axios({url:'/api/goods/goodsList',method:"get",params:{_limit:4,_type:"phone"}}),
		axios({url:'/api/goods/goodsList',method:"get",params:{_limit:3,_type:"jiadian"}})
	]).then(axios.spread((miaosha, phone,jiadian)=>{
		commit('HOME',{miaosha,phone,jiadian})
		commit('RUN_INV')
	}))
}
}

let mutations = {
  [types.HOME]:(state,payload)=>{
		state.miaoshaList=payload.miaosha;
		state.phoneList=payload.phone;
		state.jiadianList=payload.jiadian;
	},
	RUN_INV:(state)=>{
		state.timer = setInterval(() => {
			if(state.nextIndex+1 < state.miaoshaList.data.data.length) {
				state.currentIndex =  state.nextIndex;
				state.nextIndex +=1;
			}else if(state.nextIndex = state.miaoshaList.data.data.length) {
				state.currentIndex = state.nextIndex-1;
				state.nextIndex=0;
			}
		}, 5000)
	},
	GOTO_PAGE:(state,index)=>{
		if (index+1 < state.miaoshaList.data.data.length) {
			state.currentIndex = index;
			state.nextIndex = index+1;
		} else if (index+1 == state.miaoshaList.data.data.length) {
			state.currentIndex = 0;
			state.nextIndex = 1;
		}
		if (index < 0) {
			state.currentIndex = state.miaoshaList.data.data.length - 1;
		}
	}
}

export default{
  namespaced:true,//命名空间的模块。模块内部直接调用，外部需要命名空间(见组件)
  state,actions,mutations
}