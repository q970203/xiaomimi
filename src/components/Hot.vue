<template>
  <div class="LookMore">
    <h3>{{text}}</h3>
		<ul>
			<li v-for="(item,index) of items" :key='index' @click="$emit('click')">{{item}}</li>
		</ul>
  </div>
</template>

<script>
  export default {
    name: 'Hot',
    props: {
			text:"",
			items:{
				type:Array,
				default:null
			},
		},
    data() {
       return {
         
       }
},
    components: {},
    mounted() {
			
		},
    updated() {},
    methods: {
			
		}
  }
</script>

<style lang="scss">
  .Hot {}
	.LookMore>ul{height: 100%;position: absolute;right: 0;top: 0;}
	.LookMore>ul>li{float: left;margin: 0.2rem 10px;}
	.LookMore>ul>li:first-of-type{color: $baseColor;border-bottom: 2px solid $baseColor}
</style>
