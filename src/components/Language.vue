<template>
    <div class="Language">
    	<ul>
    		<li><a href="javascript:;">简体</a>| </li>
    		<li><a href="javascript:;">繁体</a>|</li>
    		<li><a href="javascript:;">English</a>| </li>
    		<li><a href="javascript:;">常见问题</a>| </li>
    		<li><a href="javascript:;">隐私政策</a></li>
    	</ul>
    </div>
</template>

<script>
  export default {
    name: 'Language',
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
	.Language{width: 100%;position: fixed;bottom: 0.5rem;left: 0;}
	.Language ul{margin: auto;height: 0.375rem;width: 84%;}
	.Language li{color: #9b9b9b; float: left;margin: auto; line-height: 0.375rem;font-size: 14px;}
	.Language li a{padding: 0 0.22rem;color: #9b9b9b;}
</style>
