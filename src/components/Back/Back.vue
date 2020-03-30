<template>
	<div class="back">
		<van-icon name="arrow-left" color="#1989fa" size="16" @click="goback"/>
		<p>{{title}}</p>
	</div>
  
</template>

<script>
  export default {
    name:'uc-nav',
    props:{
			title:""
		},
    components:{},
    mounted(){},
    updated(){},
    methods:{
      goback(){
				console.log("goback");
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
	.back{background:#e8e8e8; z-index: 9999;position: fixed;top: 0;left: 0;width: 100%; padding: 0.2rem;}
	.back>p{display: inline-block;width: 90%; text-align: center;line-height: 0.8rem;font-size: 16px;}
</style>
