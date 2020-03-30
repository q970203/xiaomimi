<template>
  <div class="Foot">
    <div class="bottom clear">
    	<div class="bottom-up">
    		<ul class="b-up-list">
    			<li class="b-1">
    				<a href="#">预约维修服务</a>
    			</li>
    			<li class="b-2">
    				<a href="#">7天无理由退货</a>
    			</li>
    			<li class="b-3">
    				<a href="#">15天免费换货</a>
    			</li>
    			<li class="b-4">
    				<a href="#">满150元包邮</a>
    			</li>
    		</ul>
    	</div>
    	<div class="bottom-down">
    		<div class="down-l">
    			<h2>帮助中心</h2>
    			<ul>
    				<li>
    					<a href="#">账户管理</a>
    				</li>
    				<li>
    					<a href="#">购物指南</a>
    				</li>
    				<li>
    					<a href="#">订单操作</a>
    				</li>
    			</ul>
    		</div>
    		<div class="down-l">
    			<h2>服务支持</h2>
    			<ul>
    				<li>
    					<a href="#">售后政策</a>
    				</li>
    				<li>
    					<a href="#">自助服务</a>
    				</li>
    				<li>
    					<a href="#">相关下载</a>
    				</li>
    			</ul>
    		</div>
    		<div class="down-l">
    			<h2>线下门店</h2>
    			<ul>
    				<li>
    					<a href="#">小米之家</a>
    				</li>
    				<li>
    					<a href="#">服务网点</a>
    				</li>
    				<li>
    					<a href="#">授权体验店</a>
    				</li>
    			</ul>
    		</div>
    		<div class="down-l">
    			<h2>关于小米</h2>
    			<ul>
    				<li>
    					<a href="#">了解小米</a>
    				</li>
    				<li>
    					<a href="#">加入小米</a>
    				</li>
    				<li>
    					<a href="#">投资者关系</a>
    				</li>
    			</ul>
    		</div>
    		
    		<div class="down-r">
    			<h2>400-100-5678</h2>
    			<p class="dr-1">周一至周日8：00-18：00</p>
    			<p class="dr-2">（仅收市话费）</p>
    			<input type="button" value="联系客服" />
    		</div>
    	</div>
    </div>
		<div class="footer">
			<div class="footer__left"><img src="../assets/img/milogo.png" alt=""></div>
			<div class="footer__right">
					<p class="copy">
					&copy;mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号
				</p>
				<p> 违法和不良信息举报电话：185-0130-1238， 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
				
			</div>
		</div>
  </div>
</template>

<script>
  export default {
    name: 'Foot',
    props: {},
    data() {
       return {
         
       }
},
    components: {},
    mounted() {},
    updated() {},
    methods: {}
  }
</script>

<style lang="scss">
  .Foot {margin-bottom: 1.5625rem}
	.footer{width: 100%;margin-top:15px;background: #f5f5f5;padding: 10px 5px}
	.footer>div{display: inline-block;vertical-align: middle}
	.footer__left{width: 10%;}
	.footer__left>img{width: 100%}
	.footer__right{width: 90%;padding: 10px 15px;box-sizing: border-box;}
	.footer__right>p{line-height:18px;text-align: center }
	.bottom{
		// height: 5rem;
		background-color: #fff;
	}
	.bottom-up{
		height: 1rem;
		width: 100%;
		margin: auto;
		padding-top: 10px;
		border-bottom: 1px solid #dfdfdf;
	}
	.b-up-list{
		// width: 100%;
		height: 1rem;
	}
	.b-up-list>li{
		width: 22%;
		line-height: 1rem;
		text-align: center;
		float: left;
		margin-left: 0.2rem;
	}
	.b-up-list a{
		background: #fb6600;
		line-height: 10px;
		font-size: 12px;
		color: #fff;
	}
	.bottom-down{
		height: 2.5rem;
		width: 100%;
		margin: auto;
		padding-top: 10px;
		/* padding-left: 0.5rem; */
		box-sizing: border-box;
	}
	.bottom-down>div{
		float: left;
	}
	.down-l{
		width: 2rem;
		height: 2.5rem;
		margin-left: 0.5rem;
	}
	.down-l h2{
		font-size: 12px;
		color: #3b3e4d;
		margin-bottom: 10px;
	}
	.down-l a{
		color: #74747e;
		font-size: 12px;
		margin-bottom: 16px;
	}
	.down-r{
		width:46%;
		height: 3.125rem;
		margin-left: 26%;
		text-align: center;
		// border: 1px solid $baseColor;
	}
	.down-r h2{
		font-size: 16px;
		color: #fb6600;
		margin-bottom: 10px;
	}
	.down-r p{
		font-size: 12px;
		color: #65685f;
	}
	.dr-2{
		margin-bottom: 18px;
	}
	.down-r input{
		width: 2.5rem;
		height: 0.875rem;
		padding-left: 14px;
		text-align: center;
		border:1px solid #fb6600;
		color: #fb6600;
		outline: none;
	}
</style>
