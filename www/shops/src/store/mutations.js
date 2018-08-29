import * as types from './type'
let mutations = {
  [types.VIEW_LOADING]:(state,payload)=>{
    // console.log(state);
    state.bLoading = payload;//数据突变
  },
  [types.VIEW_FOOT]:(state,payload)=>{
    state.bFoot = payload;//数据突变
  },
  [types.UPDATE_HOME]:(state,payload)=>{
    state.home = payload;//数据突变
  },
  [types.UPDATE_USER]:(state,payload)=>{
    state.user = payload;//数据突变
  }
};
export default mutations;