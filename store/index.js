/*
 * @Author: w
 * @Date: 2020-05-16 14:00:15
 * @LastEditors: w
 * @LastEditTime: 2020-05-16 17:42:38
 */ 

import Vuex from 'vuex'
import state from './state.js'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'


new Vuex.Store({
  actions:actions,
  state:state,
  mutations:mutations,
  modules: {
    
  }
})