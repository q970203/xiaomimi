<template>
  <div class="More" @click="$emit('click')">
   <div class="last-bottom">
    	<img src="./img/imgg_34.png" />
    	<h2 >浏览更多</h2>
    	<p class="spe">热门</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'More',
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

<style>
	.More{width: 3rem;height: 2rem;position: relative;}
	.last-bottom{width: 100%;height: 100%;background: #fff;}
  .last-bottom>img{
  	width: 0.625rem;
  	height: 0.625rem;
  	position: absolute;
  	top: 0.7rem;
  	right: 10px;
  }
  .last-bottom>h2{
  	font-weight: normal;
  	font-size: 14px;
  	color: #282f28;
  	position: absolute;
  	top: 0.4rem;
  	left: 0.2rem;
  }
  .spe{
  	position: absolute;
  	top: 1.2rem;
  	left: 0.4rem;
  	color: #6c7270;
  	font-size: 12px;
  }
</style>
