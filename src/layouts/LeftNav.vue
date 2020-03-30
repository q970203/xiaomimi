<template>
  <div class="LeftNav">
    <div>
			<h3>订单中心</h3>
			<ul>
				<li>我的订单</li>
				<li>团购订单</li>
				<li>订单晒单</li>
				<li>话费充值订单</li>
				<li>以旧换新订单</li>
			</ul>
		</div>
		<div>
			<h3>个人中心</h3>
			<ul>
				<li>消息通知</li>
				<li>购买资格</li>
				<li>现金账户</li>
				<li>小米礼品卡</li>
				<li>现金券</li>
				<li>收货地址</li>
				<li>优惠券</li>
			</ul>
		</div>
		<div>
			<h3>售后服务</h3>
			<ul>
				<li>服务记录</li>
				<li>申请服务</li>
			</ul>
		</div>
		<div>
			<h3>账户管理</h3>
			<ul>
				<li>个人信息</li>
				<li>修改密码</li>
			</ul>
		</div>
  </div>
</template>

<script>
  export default {
    name: 'LeftNav',
    props: {},
    data() {
       return {
         
       }
},
    components: {},
    mounted() {},
    updated() {},
    methods: {}
  }
</script>

<style>
  .LeftNav {background: #fff;}
	.LeftNav>div{width: 2.25rem;padding-left: 10px;}
	.LeftNav h3{font-size: 14px;line-height: 28px; color: #333;font-weight: normal;margin-top: 10px;}
	.LeftNav li{font-size: 12px; color: #757575;line-height: 20px;}
</style>
