import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';

let store = new Vuex.Store({
  actions:actions,
  mutations:mutations,
  getters:getters,
  state:state
});
export default store;