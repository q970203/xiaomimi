<template>
  <!-- <div class="SmallGoods"> -->
    <div class="small-goods" @click="getDetail">
    	<div  style="background: #fff;">
    		<img :src="$baseUrl+ '/img/'+ Small.imgage" alt="">
    	</div>
    	<div style="background: #E8E8E8;">
    			<h3>{{Small.title}}</h3>
    			<p>{{Small.desc}}</p>
    			<span class="newj"> ￥{{Small.price.newj}}起</span>
    			<span class="oldj"> ￥{{Small.price.oldj}}起</span>
    			<van-button type="primary" to="Detail" color='rgb(234, 98, 91)' size='small' >立即购买</van-button>
    	</div>
    </div>
  <!-- </div> -->
</template>

<script>
  export default {
    name: 'SmallGoods',
    props: {
			Small:{
				type:Object,
				default:null
			}
		},
    data() {
       return {
         
       }
},
    components: {},
    mounted() {},
    updated() {},
    methods: {
			getDetail(){
				this.$router.push(`/detail/${this.Small._id}?apiName=goodsList`);//编程式跳转
			}
		}
  }
</script>

<style>
  .small-goods{width: 48%;height: 6rem;margin: 1%;text-align: center;box-sizing: border-box;}
  .small-goods>div:nth-of-type(1){width: 100%;height: 50%;}
  .small-goods>div:nth-of-type(2){/* width: 40%; */background: #fff;height: 50%;padding: 0.2rem 10px;box-sizing: border-box;}
  .small-goods>div:nth-of-type(2) h3{font-size: 16px;font-weight: 400;color: #242424;  }
  .small-goods>div:nth-of-type(2) p{font-size: 12px;color: #666;line-height: 20px;margin-bottom: 8px;}
  .small-goods button{display: block;margin: auto;}
  .small-goods img{width: 3rem;height: 100%;}
</style>
