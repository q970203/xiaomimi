<template>
  <div class="List" v-if="HotBig[0]">
    <Swiper :list="$store.state.banner.banner" class='List_swiper clear'/>
		<div class="List__banner">
			<img src="../assets/img/6f528be5a1a16c4bf325fc508c2074d3.jpg" alt="">
		</div>
		<BigGoods :Big='HotBig[0]'/>
		<div class="List__samll">
			<SmallGoods v-for='(item,index) in small1' :key='index' :Small='item'/>
		</div>
		<div class="List__banner">
			<img src="../assets/img/62abc208cd58cf766bb78c2f8e13e768.jpg" alt="">
		</div>
		<BigGoods :Big='HotBig[1]'/>
		<div class="List__samll">
			<SmallGoods v-for='(item,index) in small2' :key='index' :Small='item'/>
		</div>
  </div>
</template>

<script>
	import Swiper from '../components/Swiper.vue'
	import BigGoods from '../components/BigGoods.vue'
	import SmallGoods from '../components/SmallGoods.vue'
	import {mapActions,mapState} from 'vuex'

  export default {
    name: 'List',
    props: {},
		computed:{
			...mapState("list",["list","HotBig","small1","small2"])
		},
		activated(){},
    components: {Swiper,BigGoods,SmallGoods},
    activated() {
			let {_type} = this.$route.params
			this.$store.dispatch(`banner/${this.$types.BANNER}`);
			this.LIST(_type)
		},
    updated() {
			
		},
    methods: {
			...mapActions("list",["LIST"])
		}
  }
</script>

<style>
	.List__samll{margin-top: 10px;vertical-align: top;}
  .List {background: rgb(202,54,33);margin-bottom: 50px;}
	.List__banner{height: 0.8rem;width: 100%;}
	.List__banner>img{width: 100%;height: 100%;}
	.List__samll>div{display: inline-block;vertical-align: top;}
	.List_swiper{height: 3.75rem;}
</style>
