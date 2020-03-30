<template>
  <div class="CartGoods">
			<div class='CartGoods' ref='close'>
				<van-icon class='goodsClose' name="cross" size="20" @click.stop='$emit("delGoods")'/>
				<van-card
					:price="goods.price"
					:desc="goods.desc"
					:title="goods.title"
					:thumb="$baseUrl+goods.img"
				>
					<div slot="tags">
						<van-tag plain type="danger">{{goods.opt1}}</van-tag>
						<van-tag plain type="danger">{{goods.opt2}}</van-tag>
					</div>
					<div slot="footer">
						<van-stepper v-model="goods.num" @change='$emit("change",goods.num)' />
					</div>
				</van-card>
			</div>
  </div>
</template>

<script>
	import { Toast } from 'vant';
	
  export default {
    name: 'CartGoods',
    props:{ 
			goods:{
				type:Object,
				default:null
			},
			// result:{
			// 	type:Array,
			// 	default:null
			// }
			},
    data() {
       return {
         result:[],
       }
		},
    components: {
		},
    mounted() {},
    updated() {},
    methods: {
			
			}
  }
</script>

<style>
	.CartGoods{width: 9rem;position: relative;}
  .goodsClose{z-index: 10; position: absolute;top:0;right: 20px;}
  .van-card__price,.van-card__title{color:$baseColor;}
	.van-stepper{padding-right: 10px;}
</style>
