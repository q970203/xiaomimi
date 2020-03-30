<template>
  <div id="app">
		<Loading v-if='$store.state.bLoading'/>
		<!-- <Back v-if='$store.state.bBack'/> -->
		<Header v-if='$store.state.bHeade'/>
		<TopNav v-if='$store.state.bNav'/>
		<keep-alive exclude="Detail,User">
			<router-view></router-view>
		</keep-alive>
		<Bottom v-if='$store.state.bBottom'/>
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import TopNav from '../components/TopNav.vue'
import Loading from '../components/Loading.vue'
import Bottom from './Bottom.vue'
import Back from '../components/Back/Back.vue'
export default {
  name: 'App',
  components: {
		Header,TopNav,Loading,Bottom,Back
  },
	watch:{
		$route:{//路由监听，属性检测
	    handler(nextValue,PrevValue){
	      console.log('路由变化了',nextValue);
	      
	      let path = nextValue.path;
	      
	      if(/home|List/ig.test(path)){//home follow column
	        this.$store.commit('UPDATE_HEADE',true)
					this.$store.commit('UPDATE_NAV',true)
					this.$store.commit('UPDATE_BACK',false)
					this.$store.commit('UPDATE_BOTTOM',true)
	      }
	      
	      if(/login|reg/ig.test(path)){//detial login reg
	        this.$store.commit('UPDATE_HEADE',false)
					this.$store.commit('UPDATE_NAV',false)
					this.$store.commit('UPDATE_BACK',true)
					this.$store.commit('UPDATE_BOTTOM',false)
					this.$store.commit('UPDATE_LOADING',false)

	      }
	      
	      if(/cart|detail/ig.test(path)){//user
					this.$store.commit('UPDATE_HEADE',false)
					this.$store.commit('UPDATE_NAV',false)
					this.$store.commit('UPDATE_BACK',true)
					this.$store.commit('UPDATE_BOTTOM',false)
	      }
				if(/user/ig.test(path)){
					 this.$store.commit('UPDATE_HEADE',true)
					this.$store.commit('UPDATE_NAV',false)
					this.$store.commit('UPDATE_BACK',false)
					this.$store.commit('UPDATE_BOTTOM',true)
					this.$store.commit('UPDATE_LOADING',false)

				}
	      
	    },
	    immediate:true
	  }
	}
// 
}
</script>

<style>
#app{width: 100%;}
</style>
