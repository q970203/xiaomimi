<template>
  <div class="LookMore" @click="$emit('click')">
    <h3>{{text}}</h3>
		<div>查看全部<span><van-icon name="arrow" /></span></div>
  </div>
</template>

<script>
  export default {
    name: 'LookMore',
    props: {
			text:'',
		},
    data() {
       return {
         
       }
},
    components: {},
    mounted() {},
    updated() {},
    methods: {
		}
  }
</script>

<style>
  .LookMore {height: 0.9rem;width: 100%;color: #333;position: relative;}
	.LookMore>h3{
		padding-left: 5px;
		line-height: 0.9rem;
		display: inline-block;
		font-size: 14px;
		font-weight: normal;
		}
	.LookMore>div{font-size: 12px;float: right;margin: 0.25rem;}
	.LookMore>div>span{display: inline-block;margin: 1px 4px;text-align: center; width: 12px;height: 12px;background: #b0b0b0;color: #fff;border-radius: 50%;}	
</style>
