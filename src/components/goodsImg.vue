<template>
  <div class="goodsImg">
   <img :src="$baseUrl+img" alt="">
  </div>
</template>

<script>
  export default {
    name: 'goodsImg',
    props: {
			img:''
		},
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
  .goodsImg {width: 3rem;height: 4rem;}
	.goodsImg>img{width: 100%;height: 100%;}
</style>
