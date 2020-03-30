<template>
	<div class="User" v-if="user!=null">
		<!-- <LeftNav/> -->
		<div class="User__right">
			<div class="user-r-top">
				<div class="icon"><img src="../assets/img/f790b51a76afd7b41522048fa779d69d.jpg" alt=""></div>
				<div class="user-r-info">
					<h3>{{user.data.tel}}</h3>
					<p>欢迎光顾小米商城</p>
					<a href="#" @click="UsesrInfo=true">修改个人信息 > </a>
				</div>
			</div>
				<van-popup v-model="UsesrInfo" round :style="{width:'80%',height:'6rem'}">
					<h3 style="text-align: center;line-height: 1rem;font-weight: 400;">修改信息</h3>
					<van-field v-model="username" label="用户名" placeholder="请输入用户名" />
					<van-field v-model="user.data.tel" type="tel" label="手机号"  placeholder="请输入手机号"/>
					<van-field v-model="password" type="password" label="密码"  placeholder="请输入密码"/>
					<van-button type="warning" block  @click="changeUserInfo">确认修改</van-button>
				</van-popup>
			
			<van-grid>
				<van-grid-item icon="paid" text="我的收藏" />
				<van-grid-item icon="discount" text="我的积分" />
				<van-grid-item icon="location-o" text="收货地址" />
				<van-grid-item icon="todo-list-o" text="我的订单" />
			</van-grid>
			<van-grid>
				<van-grid-item icon="paid" text="待支付" />
				<van-grid-item icon="point-gift-o" text="待发货" />
				<van-grid-item icon="logistics" text="待收货" />
				<van-grid-item icon="clock-o" text="待评价" />
			</van-grid>

			<van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
			<!-- 优惠券列表 -->
			<van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
				<van-coupon-list :coupons="coupons" :chosen-coupon="chosenCoupon" :disabled-coupons="disabledCoupons" @change="onChange"
				 @exchange="onExchange" />
			</van-popup>

			<van-cell title="会员福利社" icon="diamond-o" is-link />
			<van-cell title="我的权益" icon="award-o" is-link />
			<van-cell title="帮助中心" icon="question-o" is-link />
			<van-cell title="设置" icon="setting-o" is-link />
			<van-cell title="关于我们" icon="smile-o" is-link />
			<div style="width: 2rem;margin: auto;margin-top: 20px;">
				<van-button round type="warning" size="small" @click="logout">退出登录</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	import LeftNav from '../layouts/LeftNav.vue'
	import Foot from '../layouts/Foot.vue'
	import {mapState,mapActions} from "vuex"
	const coupon = {
		
		available: 1,
		condition: '无使用门槛\n最多优惠12元',
		reason: '',
		value: 150,
		name: '优惠券名称',
		startAt: 1489104000,
		endAt: 1514592000,
		valueDesc: '1.5',
		unitDesc: '元'
	};
	export default {
		beforeRouteEnter(to,from,next){
		  axios({
		    url:'/api/user',
		  }).then(
		    res=>{
		      if(res.data.err==0){
		        next()
		      }else{
						console.log("reserr",res);
		        next('/login')
		      }
		    }
		  )
		},
		name: 'User',
		props: {},
		data() {
			return {
				username:"",
				password:"",
				UsesrInfo:false,
				chosenCoupon: -1,
				coupons: [coupon],
				disabledCoupons: [coupon],
				showList: false,
				email: '未绑定',
				zhifu: 0,
				shouhuo: 0,
				comments: 0,
				like: 0,
				// user: null
			}
		},
		components: {
			LeftNav,
			Foot
		},
		activated() {},
		mounted() {
			console.log("ddd", JSON.parse(localStorage.getItem('user')).data);
			// this.$store.commit('user/USER',JSON.parse(local))
      // this.$store.dispatch(`user/${this.$types.USER}`)
			// this.user = JSON.parse(localStorage.getItem('user')).data;
		},
		updated() {},
		computed:{...mapState("user",["user"])},
		methods: {
			changeUserInfo(){
				this.UsesrInfo=false;
				let {_id} = this.user.data;
				let {token} = this.user;
				
				this.$axios({
					url:"/api/user",
					method:"post",
					data:{_id,tel:this.user.data.tel,username:this.username,password:this.password}
				}).then(
					res=>
					this.$store.commit('user/USER',
					{err:0,data:{_id,tel:this.user.data.tel,username:this.username,password:this.password},token},
					)
				)
			},
			onChange(index) {
				this.showList = false;
				this.chosenCoupon = index;
			},
			onExchange(code) {
				this.coupons.push(coupon);
			},
			logout() {
				//删除 本地 token vuex
				window.localStorage.removeItem('user')
				this.$store.commit('user/USER', {
					err: 1
				})
				//发送注销请求
				this.$router.push('/login')
			}
		}
	}
</script>

<style lang="scss">
	.User {
		background: #f5f5f5;
		margin: 1.35rem 0;
	}

	.User>div {
		display: inline-block;
		vertical-align: top;
	}

	/* .user-r-top>div{} */
	.User__right {
		margin-top: 5px;
		width: 100%;
		margin-left: 10px;
		background: #fff;
		padding: 0 20px;
		box-sizing: border-box
	}

	.user-r-top {
		margin-bottom: 13px;
		width: 100%;
		height: 2rem;
		padding: 20px 0;
		border-bottom: 1px solid #b0b0b0;
	}

	.user-r-top>div {
		float: left;
	}

	.icon {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		overflow: hidden;
	}

	.icon>img {
		width: 100%;
		height: 100%;
	}

	.user-r-info {
		margin-left: 10px
	}

	.user-r-info>h3 {
		font-size: 16px;
		font-weight: 400;
		color: #757575;
	}

	.user-r-info>p {
		font-size: 12px;
		color: #b0b0b0;
		line-height: 20px;
	}

	.user-r-info>a {
		font-size: 10px;
		color: $baseColor;
		line-height: 20px
	}

	// .user-r-zh>p{font-size: 12px;color:#b0b0b0;line-height: 18px }

	.user-r-bottom>div {
		padding: 20px 0
	}

	.user-r-bottom .icon {
		width: 44px;
		height: 44px;
		display: inline-block;
		vertical-align: middle
	}

	.user-r-bottom .icon>img {
		width: 100%;
		height: 100%
	}

	.user-r-bottom .user-r-info {
		display: inline-block;
		vertical-align: middle
	}

	.user-r-bottom h3 {
		font-size: 14px;
		font-weight: 400;
		color: #757575
	}

	.user-r-bottom span {
		color: $baseColor
	}

	.user-r-bottom a {
		font-size: 12px;
		color: #757575;
	}

	.van-grid-item__content--center {
		color: #ff6700;
	}

	.van-button {
		margin: auto;
	}
</style>
