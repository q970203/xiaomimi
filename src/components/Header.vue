<template>
  <div class="Header">
		<ul class="Header__Right--nav">
			<router-link
				tag="li"
				to="/User"
				exact-active-class='Header_active'
				>
				<a href="" > 个人中心
				<van-icon name="arrow-down" />
			</a></router-link>
			<router-link
				tag="li"
				to="/home"
				exact-active-class='Header_active'
			>
			<a href="">小米商城</a></router-link>
			<!-- <router-link
				tag="li"
				to="/home"
				exact-active-class='Header_active'
			><a href="">我的订单</a></router-link> -->
			<router-link tag='li' to='Cart' exact-active-class='Header_active'>
			<a href="">
			<van-icon name="shopping-cart-o" />
			购物车（{{$store.state.cart.cartGoodsList.length}}）
			</a></router-link>
		</ul>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {},
    data() {
       return {
         showUser:false,
				 cart:false
       }
},
    components: {},
    mounted() {},
    updated() {},
    methods: {}
  }
</script>

<style >
  .Header {z-index: 9999;position: fixed;top: 0;left: 0; background: #333;width: 100%;}
	.Header a{display: block;width: 100%; color: #b0b0b0;font-size: 12px;text-align: center; line-height: 1.25rem;}
	.Header li{float: left;width: 33.3%;}
	.user-nav{display: none;}
	.Header_active{background: #fff;}
	.Header_active a{color:#ff6700;}
</style>
