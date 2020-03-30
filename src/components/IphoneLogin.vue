<template>
  <div class="IphoneLogin">
     <div class="IphoneLogin__inp">
    	<van-cell-group class='IphoneLogin__inp--van'>
				<div class="IphoneLogin__inp--user codeBox">
					<transition
						name="numIn"
					>
						<span v-show="bl">+86
							<van-icon name="arrow" />
						</span>
					</transition>
					<van-field  
					class='phoneCode' 
					v-model="tel" 
					type="tel" 
					placeholder="手机号码"  
					clearable
					 />
				</div>
				<van-field class='IphoneLogin__inp--user' v-model="yzCode" @input="$emit('input',{tel,yzCode})" type="number" placeholder="短信验证码">
				 <van-button style='color: #2ea5e5;background: #fff;border: none;font-size: 0.4rem;' slot="button" size="small" type="primary">发送验证码</van-button>
				</van-field>
    	</van-cell-group>
    </div>
  </div>
</template>

<script>
	import Button from './Button.vue'
  export default {
    name: 'IphoneLogin',
    props: {
			// tel:{
			// 	type:Number,
			// 	default:null,
			// },
			// yzCode:{
			// 	type:Number,
			// 	default:null,
			// }
		},
    data() {
      return {
         tel:null,
				 yzCode:null,
				 bl:false,
       }
		},
    components: {
			Button
		},
    mounted() {
			this.bl=true
		},
    updated() {
		},
		
  }
</script>

<style>
  .IphoneLogin {}
	.codeBox{width: 100%;position: relative; }
	.codeBox span{ transition: 1s ease-in-out all; display: inline-block;height: 1.4rem;color:#9b9b9b;font-size: 14px;line-height:1.4rem; position: absolute;top: 0;left: 5px;}
	.phoneCode{display: inline-block;width: 83% !important;margin-left: 17%;}
	.tel{color:#9b9b9b;font-size: 0.45rem;}
	.IphoneLogin__van--btn{color: #2ea5e5;background: #fff;border: none;font-size: 0.4rem;}
	.IphoneLogin__inp{font-size: 0.213333rem;}
	.IphoneLogin__inp input{height: 0.73rem;line-height:  0.73rem;font-size: 0.48rem;color: #4a4a4a;}
	.IphoneLogin__inp--van{border-width: 0 0;}
	.IphoneLogin__inp--user{border-bottom: 1.5px solid #d3d3d3;}
	.numIn-enter{left:-70px;opacity: 0;}
	.numIn-leave-active{left: -70px;opacity: 0;}
</style>
