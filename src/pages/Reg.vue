<template>
  <div class="Reg">
		<h2>注册小米账号</h2>
		<van-field style='padding-left: 0;'  label="中国" right-icon='arrow' />
		<span class="reg-tishi">成功注册账号后，国家、地区将不能被修改</span>
		<div class="codeBox" style="">
			<span class="code" >+86
				<van-icon name="arrow" />
			</span>
			<van-form validate-first @failed="onFailed" class='phoneCode '>
			<van-field 
			style='font-size: 0.45rem;'  
			v-model="tel" 
			type="tel" 
			placeholder="请输入手机号码"  
			name="pattern"
			:rules="[{pattern,message:'请输入正确的手机格式'}]"
			clearable />
			</van-form>
		</div>	
		<van-field style='padding-left: 0;font-size: 0.45rem;margin-bottom: 0.825rem;' v-model="password" type="password" label="密码" placeholder="请输入密码" label-width	='20%'/>
		<!-- <van-field style='padding-left: 0;margin-bottom: 0.825rem; font-size: 0.45rem;' v-model="username" type="text" label="用户名" placeholder="请输入用户名" label-width	='20%'/> -->
		
		<Button style='border: none;' text="立即注册" bgColor="#ff6700" ztColor='#ffffff' @click='reg'/>
		<Button style='border: none;' text="已有账号" @click='login'/>

		
		<p class="reg-msg">已阅读并同意： 小米 <a href="https://static.account.xiaomi.com/html/agreement/user/zh_CN.html">用户协议</a>和<a href="https://privacy.mi.com/miaccount/zh_CN/">隐私政策</a></p>
    <Language style='border: none;'/>
		
  </div>
</template>

<script>
	import Language from '../components/Language.vue'
	import Button from '../components/Button.vue'
	import { Toast } from 'vant';
  export default {
    name: 'Reg',
    props: {},
    data() {
       return {
         tel:null,
				 password:'',
				 pattern:/1\d{10}/,
				 username:""
       }
},
    components: {
			Language,Button
		},
    mounted() {},
    updated() {},
    methods: {
			onFailed(errorInfo) {
			},
			login(){
				this.$router.push("/login")
			},
			reg(){
				let formData = new FormData()
				formData.append('tel',this.tel)
				formData.append('password',this.password)
				this.$axios({
					url:'/api/reg',
					method:'post',
					data:formData
				}).then(
				res => {
					if(res.data.err!=0){
					}else{
						this.$router.push("/login")
						this.username=""
						this.password=""
					}
				}
					
				)
			}
		}
  }
</script>

<style>
  .Reg {padding: 0 0.625rem}
	.Reg h2{font-size: 0.6rem;font-weight: normal;text-align: center;line-height: 3.125rem;}
	.reg-tishi{display: block; color: #9b9b9b;margin-bottom: 0.625rem;border: none;}
	.Reg>div{font-size: 0.5rem; color: #555;border-bottom: 1px solid #d3d3d3;margin-bottom: 3px;}
	.codeBox{width: 100%;}
	.phoneCode{display: inline-block;}
	.codeBox .code {color: #555;font-size: 0.45rem; line-height: 1.3rem;height: 1.3rem;}
	.reg-msg{color: #9b9b9b;font-size: 0.3rem;}
	.reg-msg>a{color: #9b9b9b;font-size: 0.3rem;border-bottom: 1px solid #9b9b9b;}
</style>
