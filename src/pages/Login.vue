<template>
  <div class="Login">
    <div class="Login__header">
			<h1><img src="../assets/img/milogo.png" alt=""></h1>
			<p>小米账号登录</p>
		</div>
		<components :is='loginType' @input='getParams' ></components>
		<div class="Login__btn">
			<Button :text="btn1" bgColor="#ff6700" ztColor='#ffffff' @click='login'/>
			<Button :text="btn2" @click="changeType" />
		</div>
		<div class="Login__forget" v-html="forget"></div>
		<div class="Login__other">
			<LoginType/>
		</div>
		<Language/>
  </div>
</template>

<script>

	import LoginType from '../components/LoginType/LoginType.vue'
	import Language from '../components/Language.vue'
	import UserLogin from '../components/UserLogin.vue'
	import IphoneLogin from '../components/IphoneLogin.vue'
	import Button from '../components/Button.vue'

  export default {
    name: 'Login',
    props: {},
    data() {
       return {
				 password:null,
				 tel:null,
				 yzCode:null,
				 loginType:'UserLogin',
				 btn1:'登录',
				 btn2:'手机短信登录/注册',
				 forget:'<a href="">立即注册</a><span></span><a href="">忘记密码？</a>'
       }
},
    components: {
		LoginType,Language,UserLogin,IphoneLogin,Button
		},
    mounted() {},
    updated() {},
    methods: {
			getParams(data){
				console.log('父函数',data.tel,data.yzCode,data.password);
				this.tel = data.tel;
				this.password = data.password;
				this.yzCode = data.yzCode
				console.log(this.tel,this.password,this.yzCode);
			},
			changeType(){
				if(this.loginType=='IphoneLogin'){
					this.loginType ='UserLogin'
					this.btn1='登录'
					this.btn2='手机短信登录/注册'
					this.forget = '<a href="">立即注册</a><span></span><a href="">忘记密码？</a>'
				}else{
					this.loginType ='IphoneLogin'
					this.btn1 = '立即登录/注册'
					this.btn2 = '用户名密码登录'
					this.forget = '<a href="">收不到验证码？</a>'

				}
			},
			login(){
				this.$axios({
					url:'/api/login',
					method:'post',
					data:{tel:this.tel,password:this.password,yzCode:this.yzCode}
				}).then(
				res => {
					if(res.data.err==0){
						this.tel=this.password=""
						window.localStorage.setItem("user",JSON.stringify(res.data))
						 this.$store.commit('user/USER',res.data);//没有吧异步业务丢到actions里面，所以直接提交mutations

						 if(this.$route.query.p){
						  this.$router.replace(this.$route.query.p)
						}else{
						  this.$router.replace('/home')
						}
					}else{
						console.log('err',res.data)
					}
				}
				)
			}
		}
  }
</script>

<style>
	.Login{padding: 0 0.625rem}
  .Login__header{text-align: center;margin-top: 0.9375rem;}
	.Login__header p{margin: 0.1875rem auto;font-size: 16px;}
	.Login__btn{margin-top: 0.875rem;}
	.Login__forget{width: 100%; text-align: center;font-size: 15px; }
	.Login__forget a{color: #9b9b9b;}
	.Login__forget span{display: inline-block;margin: 0 0.15rem; height: 10px; border:1px solid #666 ;}
	
</style>
