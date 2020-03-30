<template>
  <div class="Button">
    <input type="button"
		:value="text"
		class="Button__inp"
		:style="{background:bgColor,color:ztColor}"
		@click="$emit('click')"
		>
  </div>
</template>

<script>
  export default {
    name: 'Button',
    props: {
			text:{
			  type:String,
			  default:'按 钮'
			},
			bgColor:{
			  type:String,
			  default:'#fff'
			},
			ztColor:{
				type:String,
				default:'#333'
			}
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
  .Button__inp{outline: none; width:100%;background:#4c4f50;border: 1px solid #d3d3d3;margin-bottom: 0.675rem;  text-align:center; line-height:1rem; border-radius:6px; display:block; padding: 0.1rem 0; font-size:0.50rem;}

</style>
