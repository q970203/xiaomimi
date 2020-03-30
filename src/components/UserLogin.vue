<template>
  <div class="UserLogin">
    <div class="Login__inp">
    	<van-cell-group class='Login__inp--van'>
    		<van-field class='Login__inp--user'  v-model="tel"   placeholder="邮箱/手机号码/小米ID" />
    		<van-field class='Login__inp--user' v-model="password"  @input="$emit('input',{tel,password})" right-icon='eye' type="password" placeholder="密码" />
    	</van-cell-group>
    	
    </div>
  </div>
</template>

<script>
		import Button from './Button.vue'
  export default {
    name: 'UserLogin',
    props: {
			// username:{
			// 	type:String,
			// 	default:''
			// },
			// password:{
			// 	type:String,
			// 	default:''
			// }
			// ['username','password']
		},
    data() {
       return {
         tel:'',
				 password:''
       }
},
    components: {
			Button
		},
    mounted() {},
    updated() {},
    methods: {}
  }
</script>

<style>
 .Login__inp{font-size: 0.213333rem;}
 .Login__inp input{height: 0.73rem;line-height:  0.73rem;font-size: 0.48rem;color: #4a4a4a;}
 .Login__inp--van{border-width: 0 0;}
 .Login__inp--user{border-bottom: 1.5px solid #d3d3d3;}

</style>
