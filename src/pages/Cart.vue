<template>
  <div class="Cart" v-if="areaList" >
		<Back title="购物车"/>
		<div v-if='cartGoodsList.length!=0'>
			<div  class="Cart_card" v-for='(item,index) of cartGoodsList' :key='item._id' >
				<div><van-checkbox v-model="item.checked" @change='(checked)=>checkedChange(checked,index)'></van-checkbox></div>
				<div>
					<CartGoods 
						:goods=item
						:result=addGoods
						@change='numChange(item.num,index)'
						@delGoods='delGoods(item._id,index)'
						@click='toggle(index)'>
					</CartGoods>
				</div>
			</div>
			
			<van-submit-bar
				:price="total*100"
				button-text="结算"
				@submit="onSubmit"
			>
				<van-checkbox v-model="$store.state.cart.allChecked" @change='checkAll'>全选</van-checkbox>
				<span slot="tip">
					请确认您的收货地址哦，<span @click="$store.state.cart.showAdd=!$store.state.cart.showAdd">编辑收获地址</span>
				</span>
			</van-submit-bar>
			
			<van-action-sheet v-model="$store.state.cart.showAdd" title="收货地址">
				<div class="content">
					<van-address-edit
						class='address'
						:area-list="areaList"
						show-postal
						show-delete
						show-set-default
						:area-columns-placeholder="['请选择', '请选择', '请选择']"
						@save="onSave"
						@delete="onDelete"
					
					/>
				</div>
			</van-action-sheet>
		</div>
		
		<div v-if="cartGoodsList.length==0" class="cart_null">
				<p>您的购物车为空</p>
		</div>
		
		<!-- 地址 -->
		
  </div>
</template>

<script>
	import Back from '../components/Back/Back.vue'
	import CartGoods from '../components/CartGoods.vue'
	import areaList from '../plugins/city.js'
	import {province_list,city_list,county_list} from '../plugins/city.js'
	import { Dialog } from 'vant';
	import { Toast } from 'vant';
	import {mapState,mapActions,mapMutations} from 'vuex'
  export default {
    name: 'Cart',
    props: {},
    data() {
       return {
       }
		},
    components: {
			CartGoods,[Dialog.Component.name]: Dialog.Component,Back
		},
		computed:{
			...mapState("cart",["cartGoodsList","areaList","addGoods","total"])
		},
    mounted() {
			// this.$store.dispatch(`cart/${this.$types.CART}`)
		},
		activated(){
				this.$store.dispatch(`cart/${this.$types.CART}`)
		},
  //   updated() {
		// 	this.$store.dispatch(`cart/${this.$types.CART}`)
		// },
    methods: {
			//删除
			...mapMutations("cart",['NUM_CHANGE',"CHECKED_GOODS","CHECKALL","SUM"]),
			...mapActions("cart",['delGoods']),
			//是否选中
			checkedChange(checked,index){
				this.CHECKED_GOODS({checked,index})
				this.SUM()
			},
				//全选
			checkAll(allChecked){
				this.CHECKALL(allChecked)
			},
			//商品数量改变
			numChange(num,index){
				this.NUM_CHANGE({num,index})
				this.SUM()
			},
			//结算
			onSubmit(){
				this.SUM()
			},
			changeAdd(){},
			onSave() {
				Toast('save');
				this.$store.state.cart.showAdd=false;
			},
			onDelete() {
				Toast('delete');
			},
			//选择商品
			 toggle(index) {
					this.$refs.checkboxes[index].toggle();
				},
				
			}
		
  }
</script>

<style lang="scss">
  .Cart {margin-top: 1.25rem;margin-bottom: 1.5625rem}
	// .address{position: fixed;bottom: 50px;z-index: 10;width: 100%;text-align: center;padding: 0;}
.Cart_card{display: flex;align-items: center;}
.Cart_card>div{margin: 0 5px;}
.cart_null{width:60%;height:3rem;margin: auto;border:1px solid gainsboro;}
.cart_null>p{line-height: 3rem;font-size: 20px;text-align: center}
</style>
