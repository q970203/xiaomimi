<template>
  <div class="Loading">
    <van-loading style='width: 100%;height: 100%; margin: auto;vertical-align: middle;' size="24px" vertical>加载中...</van-loading>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
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
  .Loading {
		position: absolute;
		margin: auto;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.van-loading--vertical span{display: block;margin: auto;vertical-align: middle;}
</style>
