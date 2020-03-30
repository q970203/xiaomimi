<template>
  <div class="TopNav">
    <div>
			<div class="leftLogo"><img src="../assets/img/milogo.png" alt=""></div>
			<div class="midNav">
				<ul>
					<router-link 
						tag="li"
						to="/List/phone"
						exact-active-class="TopNav_active"
						@click="getGoods">小米手机</router-link>
					<router-link 
						tag="li"
						to="/List/phone"
						exact-active-class="TopNav_active"
						@click="getGoods">Redmi红米</router-link>
					<router-link 
						tag="li"
						to="/List/jiadian"
						exact-active-class="TopNav_active"
					 @click="getGoods">家电</router-link>
				</ul>
			</div>
			<div class="rightIpt">
				<input type="text">
				<span>
					<van-icon name="search" />
				</span>
			</div>
		</div>
  </div>
</template>

<script>
  export default {
    name: 'TopNav',
    props: {},
    data() {
       return {
         
       }
},
    components: {},
    mounted() {},
    updated() {},
    methods: {
			getGoods(){
				
			}
		}
  }
</script>

<style >
	/* .TopNav_active{color:#ff6700 !important;} */
  .TopNav { width: 100%;height: 1rem;margin: 1.5125rem 0 0.3125rem 0;}
	.leftLogo{width: 1rem;height: 1rem;float: left;}
	.leftLogo>img{width: 100%;height: 100%;}
	.midNav{float: left;width: 53%;padding-left: 0.1rem;}
	.midNav li{float: left;margin:0 0.2rem;line-height: 1rem; color: #333;}
	.rightIpt{width: 35%;line-height:0.8rem;float:right;border: 1px solid #e0e0e0;position: relative;}
	.rightIpt>span{display: inline-block;text-align: center; height: 100%;width: 0.7rem;position: absolute;right: 0;top: 0; border-left: 1px solid #e0e0e0;font-size: 14px;}
	.hotGoods{position: absolute;right: 0.8rem;top: 0; height: 100%;}
	.hotGoods>span{padding: 0 3px;line-height: 0.8rem;background: #eee;color: #757575;margin-right: 4px;}
</style>
