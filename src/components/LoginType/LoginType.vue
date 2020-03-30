<template>
  <div class="LoginType">
		<fieldset>
			<legend>其他方式登录</legend>
		</fieldset>
    <div>
    	<a href="">
				<van-icon class-prefix="my-icon" name="icon-weibo1" size="34" color="#ED9090"  />
    	</a>
    	<a href="">
				<van-icon class-prefix="my-icon" name="icon-zhifubao" size="34" color="#6BB6EA"  />
    	</a>
    	<a href="">
				<van-icon class-prefix="my-icon" name="icon-weixin" size="34" color="#00BE00"  />
    	</a>
    </div>
  </div>
</template>

<script>
	import './icon/iconfont.css'
  export default {
    name: 'LoginType',
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
  .LoginType {}
	.LoginType fieldset{color: #9b9b9b; font-size: 14px; margin-top: 0.875rem; border: none; border-top: 1px solid #d3d3d3;text-align: center;}
	.LoginType {text-align: center;}
	.LoginType a{display: inline-block;width: 0.9375rem;height: 0.9375rem; margin:5px;}

</style>
