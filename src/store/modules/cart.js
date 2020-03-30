import areaList from '../../plugins/city.js'
import searchIndex from '../../plugins/searchIndex.js'
import * as types from '../types'//整体输入，存为types对象
import {get} from '../service.js'
import axios from '../../plugins/axios.js';
import { Dialog } from 'vant';
const state={
  cartGoodsList:[],
	total:0,
	allChecked:true,
  showAdd:false,//编辑地址
  areaList,//省市区列表
  addGoods:[],//选择商品
	
}

const actions = {
	//请求数据
	[types.CART]({commit,state},payload){
	  get({apiname:'cart',params:{_limit:5,_sort:"date"}}).then(
	    result=>{
				
				commit('CART',result)
				if(result){
					commit("SUM")
				}
			}
	  )
	},
	//删除商品
 delGoods:({commit,state},payload)=>{
	 console.log("payload",payload)
 	 Dialog.confirm({
 	 	message: '确定删除该商品吗？'
 	 }).then(() => {
		 axios({
			 url:"/api/addcart/"+payload,
			 // params:payload,
			 method:"delete"
		 }).then(
			res=>{
				if(res.data.err==0){
					state.cartGoodsList.forEach((item,index)=>{
						if(item._id==payload){
							state.cartGoodsList.splice(index,1)
						}
					})
					commit('DEL_GOODS',state.cartGoodsList)
					commit("SUM")
				}else{
					console.log("删除失败");
				}
			}
		 )
 	 	
 	 })
 },
}


const mutations={
	[types.CART]:(state,payload)=>{
		if(payload){
			state.cartGoodsList=payload
		}else{
			state.cartGoodsList=[]
		}
	},
	 DEL_GOODS:(state,payload)=>{
		 state.cartGoodsList=payload
	 },
  //是否选中
 CHECKED_GOODS:(state,{checked,index})=>{
	state.cartGoodsList[index].checked = checked;
	let data = state.cartGoodsList;
	let hasChecked = data.filter(el=>el.checked);
	if(hasChecked.length<data.length){
		state.allChecked=false;//如果不是所有的商品都被选中，则全选为false
	}else{
		state.allChecked=true;
	}
 },
 //全选
 CHECKALL:(state,payload)=>{
	 let data = state.cartGoodsList;
	 let hasChecked = data.filter(el=>el.checked);
	 state.allCheaked = payload;
	 if(payload){
	 	data.forEach((item)=>{
	 		if(!item.checked){
	 			item.checked=true;
	 		}
	 	})
	 }else{
	 	data.forEach((item)=>{
	 		if(hasChecked.length<data.length){
	 		}else{
	 			item.checked=false;
	 		}
	 	})
	 	}
 },
 //总价
 SUM:(state)=>{
		let total =0;
		let data = state.cartGoodsList;
		let cheackedItems = data.filter((item)=>item.checked)
		cheackedItems.forEach(item=>{
			total = total +(item.num*parseFloat(item.price));
		})
		total = parseFloat(total.toFixed(2))
		state.total=total;
 },
	 //数量改变
	 NUM_CHANGE:(state,{num,index})=>{
		 state.cartGoodsList[index].num = num;
	 },
	 //加入购物车
	 ADD_CART:((state,item)=>{
		 let index = searchIndex(state.cartGoodsList,item,item.title)
		 if(index === -1){
			 state.cartGoodsList.unshift(item);
		 }else{
			 state.cartGoodsList[index].num++;

		 }
	 })
}


export default{
  namespaced:true,//命名空间的模块。模块内部直接调用，外部需要命名空间(见组件)
  state,actions,mutations
}