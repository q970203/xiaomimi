<template>
  <div class="BigGoods" @click="getDetail">
    <div class="big-goods">
    	<div style="background: #E8E8E8;">
    		<img :src="$baseUrl+ '/img/'+ Big.imgage" alt="">
    	</div>
    	<div>
    		<h3>{{Big.title}}</h3>
    		<p>{{Big.desc}}</p>
    		<span class="newj"> ￥{{Big.price.newj}}起</span>
    		<span class="oldj"> ￥{{Big.price.oldj}}起</span>
    		<van-button type="primary" to="Detail" color='rgb(234, 98, 91)' size='small' >立即购买</van-button>
    	</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BigGoods',
    props: {
			Big:{
				type:Object,
				default:null
			}
		},
    components: {},
    mounted() {},
    updated() {},
    methods: {
			getDetail(){
				this.$router.push("/detail/"+this.Big._id+'?apiName=goodsList')//编程式跳转
		}
		}
  }
</script>

<style>
  .big-goods{width: 100%;height: 3rem;}
  .big-goods>div:nth-of-type(1){width: 60%;height: 100%;}
  .big-goods>div:nth-of-type(2){width: 40%;background: #fff;height: 100%;padding: 0.2rem 10px;box-sizing: border-box;}
  .big-goods>div:nth-of-type(2)>h3{font-size: 16px;font-weight: 400;color: #242424;}
  .big-goods>div:nth-of-type(2)>p{font-size: 12px;color: #666;line-height: 20px;margin-bottom: 10px;}
  
  .big-goods img{width: 60%;height: 100%;margin: auto;display: block;}
  .big-goods>div{display: inline-block;vertical-align: top;}
</style>
