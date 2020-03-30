<template>
  <div class="Swiper" >
		<swipe class="my-swipe" >
			<swipe-item class="slide1" v-for="(item,index) in list" :key='index'>
				<img :src="item.banner?$baseUrl + item.banner:$baseUrl+ '/img/'+item" class="banner-img" @click="$emit('click')"  alt="">
			</swipe-item>
		</swipe>
  </div>
</template>

<script>
	// import Vue from 'vue'
	// import {Lazyload} from 'vant';
	// Vue.use(Lazyload)
	import '../../node_modules/vue-swipe/dist/vue-swipe.css'; //引入样式
	import { Swipe, SwipeItem } from 'vue-swipe';// 引入组件
  export default {
    name: 'Swiper',
		
    props: {
			list:{
				type:Array,
				default:null,
			},
			swiperHeight:'',
			
		},
    data() {
       return {
         
       }
},
    components: {
			'swipe': Swipe,
			'swipe-item': SwipeItem
		},
    mounted() {},
    updated() {},
    methods: {
			
		}
  }
</script>

<style>
  .Swiper{width: 100%;height:100%;}
	.my-swipe{width: 100%;height:100% ;}
	.banner-img{width: 100%;height: 100%;}
	.slide1{width: 4rem;}
</style>
