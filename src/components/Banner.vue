<template>
  <div class="Banner">
   <img :src="$baseUrl+BannerImg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    props: {
			BannerImg:''
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
  .Banner {width: 100%;height: 1.2rem;margin-top: 15px;}
	.Banner>img{width: 100%;height: 100%;}
</style>
