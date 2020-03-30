<template>
  <div class="Bottom">
    <!-- <router-view /> -->
			<van-tabbar route active-color="#ff6700" >
				<van-tabbar-item  to="/home" icon="home-o">
					首页
				</van-tabbar-item>
				<van-tabbar-item  to="/user" icon="manager-o">
					我的
				</van-tabbar-item>
				<van-tabbar-item  to="/Cart" icon="cart-o">
					购物车
				</van-tabbar-item>
			</van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'Bottom',
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
  .Bottom {}
</style>
