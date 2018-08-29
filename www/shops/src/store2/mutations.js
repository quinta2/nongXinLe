export default {
  increment:(state,payload)=>{
    // console.log(state);
    state.count+=payload;//数据突变
  },
  decrement:(state,payload)=>{
    state.count-=payload;//数据突变
  }
}