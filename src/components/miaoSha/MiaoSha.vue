<template>
  <div class="MiaoSha">
    <div class="MiaoSha___time"><span>00:00</span>场</div>
		<div class="MiaoSha__img"><img src="./img/AQYAFYR6skFSqBUAAAAASUVORK5CYII_.jpg" alt="小米闪购"></div>
		<p>距离结束还有</p>
		<van-count-down :time="time" class='MiaoSha__DJS'>
			<template v-slot="timeData">
				<span class="item">{{ timeData.hours | fillZero}} </span>:
				<span class="item">{{ timeData.minutes |fillZero}} </span>:
				<span class="item">{{ timeData.seconds |fillZero}} </span>
			</template>
		</van-count-down>
  </div>
</template>

<script>
  export default {
    name: 'MiaoSha',
    props: {},
    data() {
       return {
         time:122222222
       }
		},
		filters:{
			fillZero(data){
				return data = data<10 ?'0'+data :data
			}
		},
    components: {},
    mounted() {},
    updated() {},
    methods: {}
  }
</script>

<style>
  .MiaoSha {
		width:3rem;
		height: 4rem;
		border-top-color: #e53935;
		background: #f1eded;
	}
	.MiaoSha___time{font-size: 16px;color: #ef3a3b;text-align: center;padding-top: 0.4rem;}
	.MiaoSha__img{text-align: center;margin: 0.2rem auto;width:0.6rem;height: 1rem;}
	.MiaoSha__img>img{width: 100%;height: 100%;}
	.MiaoSha>p{text-align: center;color: rgba(0,0,0,.54);font-size: 14px;}
	.MiaoSha__DJS{text-align: center;margin-top: 5px;}
	.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #605751;
}
</style>
