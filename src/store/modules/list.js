import {get} from '../service.js'

import * as types from '../types'//整体输入，存为types对象

const state={
	HotBig:[],
	small1:[],
	small2:[]
  					
  				
  }

let actions = {
	
	[types.LIST]({commit,state},payload){
		  get({apiname:"goodsList",params:{_limit:10,_type:payload}}).then(
		    result=>{
					console.log("result",result);
					commit('LIST',result)}
		  )
		},
}

let mutations = {
  [types.LIST]:(state,payload)=>{
		state.HotBig=[];
		state.small1=[];
		state.small2=[];
		for(let i=0;i<payload.length;i++){
			if(i<2){
				console.log(i);
				state.HotBig.push(payload[i])
			}else if(i<6 && i>1){
				state.small1.push(payload[i])
			}else if(i<10 && i>5){
				state.small2.push(payload[i])

			}
		}

	}
}

export default{
  namespaced:true,//命名空间的模块。模块内部直接调用，外部需要命名空间(见组件)
  state,actions,mutations
}