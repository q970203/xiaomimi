<template>
	<div class="Home" v-if="miaoshaList">
		<div style="height: 4rem;">
			<ul class="Home__Nav--Left clear">
				<li v-for="item in items" :key=item.id>
					<a href="">{{item.text}}
						<van-icon name="arrow" />
					</a>
				</li>
			</ul>
				<Swiper  
				class='Home__Swiper clear' 
				:list="$store.state.banner.banner"
				apiName='banner'
				:swiperHeight="'3.75rem'"
				@click="goList('phone')"
				/>
		</div>
		<div class="Home__subNav">
			<div class="subNav__left">
				<a href="">
					<van-icon name="underway-o" /><br>小米秒杀
				</a>
				<a href="">
					<van-icon name="vip-card-o" /><br>米粉卡
				</a>
				<a href="">
					<van-icon name="after-sale" /><br>以旧换新
				</a>
				<a href="">
					<van-icon name="bill-o" /><br>话费充值
				</a>
			</div>
			<div class="subNav__right">
				<img src="../../public/img/7bc54a61b927dd8c54ddd39a0acf0254.jpg" alt="">
				<img src="../../public/img/94c74e01afe50a86c3a87ff030b85781.jpg" alt="">
				<img src="../assets/img/816a66edef10673b4768128b41804cae.jpg" alt="">
			</div>
		</div>
		<div class="Home__container">
			<div class="miSG">
				<div class="miSG__title">
					<h2>小米闪购</h2>
					<div class="miSG__btn">
						<span>
							<van-icon name="arrow-left" @click='gotoPage(currentIndex-1)' />
						</span>
						<span>
							<van-icon name="arrow" @click='gotoPage(currentIndex+1)' />
						</span>
					</div>
				</div>
				<div class='Home__miaosha'>
					<MiaoSha />
					<div class='MiaoSha__goods'>
						<oneGoods :goods =miaoshaList.data.data[currentIndex]
						apiName='goodsList'
						 class='goods' />
						 <oneGoods :goods =miaoshaList.data.data[nextIndex]
						 apiName='goodsList'
						  class='goods' />
					</div>
				</div>
			</div>
			<Banner BannerImg="/img/406c0feca62732acbb2893344486895d.jpg"/>
			<LookMore :text="'手机'" @click="goList('phone')"/>
			<div class="phone">
				<div class="phone__left">
					<img src="../assets/img/574c6643ab91c6618bfb2d0e2c761d0b.jpg" alt="">
				</div>
				<div class="phone__right">
					 <oneGoods 
					 v-for='item in phoneList.data.data'
					 :goods = item
					apiName='goodsList'
				 />
				</div>
			</div>
			<Banner :BannerImg="'/img/41d16e66381cfeda7b6b39ab67678d5e.jpg'"/>
			<Hot text="家电" :items="['热门','电视音箱']"  />
			<div class="phone">
				<div>
					<goodsImg :img="'/img/b56fd90a60e3d9e5d87dae9fbd427ea8.jpg'"/>
					<goodsImg :img="'/img/b56fd90a60e3d9e5d87dae9fbd427ea8.jpg'"/>
				</div>
				<div class="phone__right">
					 <oneGoods 
						 v-for='item in jiadianList.data.data'
						 :goods = item
						apiName='goodsList'
					/>
					<More @click="goList('jiadian')"/>
				</div>
			</div>
		</div>
		<Foot/>
	</div>

	</div>
</template>

<script>
	import Button from '../components/Button.vue'
	import UserLogin from '../components/UserLogin.vue'
	import Header from '../components/Header.vue'
	import TopNav from '../components/TopNav.vue'
	import Swiper from '../components/Swiper.vue'
	import oneGoods from '../components/oneGoods.vue'
	import MiaoSha from '../components/miaoSha/MiaoSha.vue'
	import Banner from '../components/Banner.vue'
	import LookMore from '../components/LookMore.vue'
	import Hot from '../components/Hot.vue'
	import goodsImg from '../components/goodsImg.vue'
	import Foot from '../layouts/Foot.vue'
	import More from '../components/More/More.vue'
	import {mapState,mapActions,mapMutations} from 'vuex';

	export default {
		name: 'Home',
		components: {
			Button,
			Header,
			TopNav,
			Swiper,
			oneGoods,
			MiaoSha,
			Banner,LookMore,Hot,goodsImg,Foot,More
		},
		 activated(){
			this.$store.dispatch(`home/${this.$types.HOME}`);
			this.$store.dispatch(`banner/${this.$types.BANNER}`);
		},
		computed:{
			...mapState("home",["active","miaoshaList","phoneList","items","jiadianList","currentIndex","nextIndex","timer"])
		},
		methods: {
			...mapMutations("home",["GOTO_PAGE"]),
			gotoPage(index) {
				this.GOTO_PAGE(index)
			},
			goList(_type){
				this.$axios({
					url:"/api/goods/goodsList/?_type="+_type
				}).then(
				res=>{
					if(res.data.err==0){
						this.$router.push("/List/"+_type)
					}else{
						console.log("数据列表请求失败");
					}
					}
				)
			}
		}
	}
</script>

<style>
	.Home {
		position: relative;
	}
	.Actvie{
		color: $baseColor;border-bottom: 2px solid $baseColor
	}
	.Home__Nav--Left {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		background: rgba(105, 101, 101, 0.6);
		color: #fff;
		border: 0;
		padding: 0.3rem 0;
		width: 25%;
	}

	.Home__Nav--Left a {
		position: relative;
		display: block;
		padding-left: 0.2rem;
		height: 0.45rem;
		line-height: 0.45rem;
		font-size: 0.1rem;
		color: #fff;
	}

	.Home__Nav--Left i {
		position: absolute;
		top: 0.155rem;
		right: 0.2125rem;
		line-height: 0.2rem !important;
		color: #e0e0e0;
	}

	.Home__Swiper {
		height: 3.75rem;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.Home__subNav {
		width: 100%;
		height: 2rem;
	}

	.subNav__left {
		float: left;
		background: #5f5750;
		width: 25%;
		height: 100%;
	}

	.subNav__left>a {
		display: inline-block;
		width: 50%;
		height: 50%;
		text-align: center;
		font-size: 10px;
		color: #fff;
		padding: 6px 0;
		box-sizing: border-box;
	}

	.subNav__right {
		float: left;
		width: 75%;
	}

	.subNav__right>img {
		width: 30%;
		height: 2rem;
		margin-left: 2.5%;
	}

	.Home__container {
		background: #f5f5f5;
		margin-top: 15px;
	}

	.miSG {
		position: relative;
	}

	.miSG__title>h2 {
		padding-left: 5px;
		line-height: 0.9rem;
		color: #333;
		font-size: 14px;
		font-weight: normal;
	}

	.miSG__btn {
		position: absolute;
		right: 5px;
		top: 0;
		height: 0.9rem;
		padding: 0.2rem 0;
	}

	.miSG__btn>span {
		display: inline-block;
		border: 1px solid #e0e0e0;
		color: #b0b0b0;
	}

	.Home__miaosha>div {
		display: inline-block;
		vertical-align: middle;
	}

	.Home__miaosha {
		margin-top: 0;
		width: 100%;
		/* height: 5rem; */
	}

	.MiaoSha__goods {
		width: 7rem;
		height: 4rem;
		overflow: hidden;
		/* margin: 0 1rem; */
		background: rgba(0, 0, 0, .02);
	}
	.MiaoSha__goods>div{float: left;}
	.goods{margin-left: 0.4rem;}
	/* .goods>img{width: 3.25rem;height: 3rem;} */
	.phone>div{display: inline-block;}

	.phone__left{width: 3rem;height: 8.3rem;float: left;}

	.phone__left>img{width: 100%;height: 100%;}
	.phone__right{width: 7rem;}
	.phone__right>div{float: left;margin:0.06rem 0 0.06rem 0.4rem}
</style>
