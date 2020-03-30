<!-- <template>
  <div class="oneGoods" @click="getDetail">
    	<img :src="goodsImg" />
    	<h2 class="li-title">{{goodsTitle}}</h2>
    	<p class="li-info">{{goodsInfo}}</p>
    	<p class="li-jg"><span class="newj">{{newJ}}</span><span class="oldj">{{oldJ}}</span></p>
  </div>
</template>
 -->
 <template>
   <div class="oneGoods" @click="getDetail">
     	<img :src="$baseUrl+ '/img/'+goods.imgage"/>
     	<h2 class="li-title">{{goods.title}}</h2>
     	<p class="li-info">{{goods.des}}</p>
     	<p class="li-jg"><span class="newj"> ¥{{goods.price.newj}}元</span><span class="oldj">¥{{goods.price.oldj}}元</span></p>
   </div>
 </template>
 
<script>
  export default {
    name: 'oneGoods',
    props: ['goods',"apiName"],
    data() {
       return {
         
       }
},
    components: {},
    mounted() {},
    updated() {},
    methods: {
			getDetail(){
				if(this.apiName){
			  console.log('跳转详情',this.apiName,"this.goods._id");
			  // '路由跳转':'/detail/23423423443?apiname=column'

			 this.$router.push(`/detail/${this.goods._id}?apiName=${this.apiName}`);//编程式跳转
			}
			}
		}
  }
</script>

<style>
  .oneGoods {}
	.oneGoods{
		width:3rem;
		height: 4rem;
		margin-bottom: 1%;
		text-align: center;
		position: relative;
		background-color: #fff;
	}
	.li-title{
		font-weight: normal;
		font-size: 12px;
		color: #312f34;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.li-info{
		font-size: 12px;
		color: #aeaabb;
		margin: 2px;
		/* margin: 17px 15px 14px 15px; */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.oneGoods img{
		width: 1.5rem;
		height: 1.6rem;
		margin-top:0.3rem
	}
	.newj{color: #ff6700;}
	.oldj{color: #b0b0b0;text-decoration: line-through;margin-left: 5px;}
</style>
