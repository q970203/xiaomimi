<template>
	<div class="Detail" v-if='goodsDetail'>
		<Back/>
		<div class="Detail_waiper">
			<Swiper 
			class="Detail__top" 
			:list="goodsDetail.img"
			apiName='banner'
			/>
		</div>
		<div >
			<h2 class="Detail__price"> <span class="newj">￥{{goodsDetail.price.newj}}元</span><span class="oldj">￥{{goodsDetail.price.oldj}}元</span> &nbsp;&nbsp;
				<van-tag plain type="warning">Hot</van-tag>
			</h2>
			<h2 class="Detail__title">{{goodsDetail.title}} 
			<van-rate
				style='float: right;'
				v-model="4.5"
				color="#ee0a24"
				allow-half
				void-icon="star"
				void-color="#eee"
			/>
			</h2>
			<p class="Detail__des"> {{goodsDetail.des}}</p>
		</div>
		<div style="height: 10px;background: #f7f7f7;margin-top: 20px;"></div>
		<div class="huabei" style="margin-top: 10px;border: none;">
			<span>活动</span>
			<p style="color: #ff6700;">[3月17日-3月22日品质家电特惠]</p>
		</div>
		<div class="huabei" >
			<span>分期</span>
			<p>花呗分期/白条分期</p>
			<van-icon style='float: right;margin-top:0.4rem;' name="arrow" />
		</div>
		<div class="Detail__params">
			<img :src="$baseUrl+ '/img/'+detailImg" alt="">
			<ul>
				<h2>{{detailInfo.title}}</h2>
				<li>{{detailInfo.info1}}</li>
				<li>{{detailInfo.info2}}</li>
				<li>{{detailInfo.info3}}</li>
				<li>{{detailInfo.info4}}</li>
				<li>{{detailInfo.info5}}</li>
				<li>{{detailInfo.info6}}</li>
			</ul>
		</div>
		<div style="height: 10px;background: #f7f7f7;margin-top: 20px;"></div>
		<Foot style="margin:0 -15px;"/>
 
		<van-goods-action style='border-top: 1px solid #B0B0B0;'>
			<van-goods-action-icon icon="shop-o" color="#ff6700" text="店铺" />
			<van-goods-action-icon icon="chat-o" :color="chatColor" @click="chatColor='#ff6700'" text="客服" />
			<van-goods-action-icon :icon="iconStart" :color="iconColor" text="收藏" @click='collection' />
			<van-goods-action-button type="warning" text="加入购物车" @click='showSku' />
			<van-goods-action-button type="danger" text="立即购买" @click='showSku'/>
		</van-goods-action>

		<van-sku 
			v-model="show" 
			:sku="sku" 
			:goods="goods" 
			:goods-id="goodsDetail._id" 
			:hide-stock="sku.hide_stock" 
			:properties='properties'
			:close-on-click-overlay='true' 
			:initial-sku='initialSku' 
			@buy-clicked="onBuyClicked" 
			@stepper-change="onNumChange"
			@sku-selected="onGuigeChange"
			@add-cart="onAddCartClicked(addCartGoods)"
			@sku-prop-selected="onShuxingChange"
			 />
			 
	</div>
</template>

<script>
	import Back from '../components/Back/Back.vue'
	import Swiper from '../components/Swiper.vue'
	import Foot from '../layouts/Foot.vue'
	import { Toast } from 'vant';
	import {mapMutations} from "vuex"
	export default {
		name: 'Detail',
		props: {},
		data() {
			return {
				iconColor:'#323233',
				chatColor:'#323233',
				iconStart:'star-o',
				goodsDetail:null,
				addCartGoods:{
						"price":"",
						"desc":"",
						"title":"",
						"img":"",
						"opt1":"",
						"opt2":"",
						"num":1,
						"checked":true
				},
				show: false,
				detailInfo:null,
				detailImg:"",
				goodsId: '33333',
				sku: {
					tree: [{
						k: '机身颜色', // skuKeyName：规格类目名称
						v: [],
						k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
					}],
					// 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
					list: [],
					price:"", // 默认价格（单位元）
					stock_num: 400, // 商品总库存
					collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
					none_sku: false, // 是否无规格商品
					hide_stock: false, // 是否隐藏剩余库存
				},
				properties: [ // 商品属性
					{
						k_id: 123, // 属性id
						k: '选择规则', // 属性名
						is_multiple: false, // 是否可多选
						v: []
						}
				],
				initialSku: {
					// 初始选中数量
					selectedNum: 1,
					selectedProp: {
						123: [1222]
					}
				},
				skuData: {
					goodsId: '946755',
					messages: {
						message_0: '12',
						message_1: ''
					},
					// 选择的商品数量
					selectedNum: 1,
					// 选择的 sku 组合
					
				},
				goods: {
					picture: ''
				}
			}
		},
		components: {Swiper,Back,Foot},
		mounted() {
			 let apiname=this.$route.query.apiName;
			 let _id = this.$route.params._id
			this.$axios({
				url:'/api/goods/'+ apiname + '/' + _id
			}).then(
				res=>{
					this.ImgList =res.data.data.img;
					this.goodsDetail=res.data.data;
					this.addCartGoods.title=res.data.data.title;
					this.addCartGoods.desc=res.data.data.desc;
					this.sku.price=this.addCartGoods.price=res.data.data.price.newj;
					this.goods.picture=this.addCartGoods.img=this.$baseUrl+'/img/'+res.data.data.imgage;
					this.detailImg =res.data.data.detailImg;
					this.detailInfo = res.data.data.detailInfo;
					for(let j=0;j<res.data.data.color.length;j++){
						this.sku.list.push({
							id: 2259, 
							price: res.data.data.price.newj*100, 
							s1: '000', 
							s2: '0', 
							s3: '0', 
							stock_num: 190 
					})
						this.sku.tree[0].v.push({id:"00"+j,name:res.data.data.color[j],imgUrl:this.$baseUrl+'/img/'+ res.data.data.img[j],previewImgUrl:this.$baseUrl+'/img/'+res.data.data.img[j]})
					};
					for(let k=0;k<res.data.data.opt.length;k++){
						this.properties[0].v.push({id:"00"+k,name: res.data.data.opt[k], price: 20000*(k)})
					}
				}
			)

		},
		updated() {},
		methods: {
			...mapMutations("cart",["ADD_CART"]),
			onNumChange(data){
				
				this.addCartGoods.num = data
			},
			onGuigeChange(data){
				this.addCartGoods.opt1=data.skuValue.name
			},
			onShuxingChange(data){
				this.addCartGoods.opt2=data.propValue.name
			},
			onBuyClicked() {},
			onAddCartClicked(item) {
				this.ADD_CART(item)
				let {price,desc,title,img,opt1,opt2,num,checked} = this.addCartGoods
				this.$axios({
					url:'/api/addcart',
					method:"post",
					data:{price,desc,title,img,opt1,opt2,num,checked},
				}).then(
					res=>	{
						if(res.data.err==0){
							Toast.success('加入成功');
							this.$router.push('/cart')
						}else{
							console.log("nb",res.data.msg);
							this.$router.push('/cart')
						}
					}
				).catch(
					err => {
						console.log("jj",err)
						
					}
				)
			},
			showSku() {
				this.show = true;
			},
			onEdit(){},
			//点击收藏收藏
			collection(){
				if(this.iconStart=='star-o'){
					this.iconStart='star';
					this.iconColor='#ff6700';
				}else{
					this.iconStart='star-o';
					this.iconColor='#323233';
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.Detail {padding: 0 10px 60px 10px;margin-top: 1rem;}
	.Detail_waiper{width: 100%;height:7rem;}
	.Detail__price{padding:0 16px; color:$baseColor;line-height: 26px;font-weight: 400;margin-bottom: 10px}
	.Detail__title{padding:0 18px; font-size: 16px;font-weight: 500;line-height: 30px}
	.Detail__des{padding-left: 18px; color:#b0b0b0}
	.Detail__params{width: 80%;margin: auto;margin-top: 20px}
	.Detail__params>img{width: 100%}
	.Detail__params{font-size: 14px;}
	.Detail__params h2{ font-size: 16px;margin-bottom: 10px}
	.Detail__params li{font-size: 12px;line-height: 24px;list-style: circle}
	.Detail__price .oldj{font-size: 14px;}
	.huabei{width: 100%;height: 1.2rem;border-top:1px solid #b0b0b0;border-bottom:1px solid #b0b0b0; }
	.huabei>p{display: inline-block;font-size: 14px;line-height: 1.2rem;}
	.huabei>span{display: inline-block;padding:0 20px;font-size: 14px;color: #4A4A4A;}
</style>
