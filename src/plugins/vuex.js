import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import state from '../store/state.js'
import mutations from '../store/mutations.js'

import banner from '../store/modules/banner.js'
import detail from '../store/modules/detail.js'
import list from '../store/modules/list.js'
import home from '../store/modules/home.js'
import user from '../store/modules/user.js'
import cart from '../store/modules/cart.js'



export default new Vuex.Store({
  state,mutations,
  modules:{
    banner,detail,list,home,user,cart
  }
})