import axios from 'axios';
export default {
  jia:({commit,state},payload)=>{
    //处理业务逻辑
    payload=payload||1;
    commit('increment',payload)
  },
  jian:({commit,state},payload)=>{
    //处理业务逻辑
    payload=payload||1;
    commit('decrement',payload)
  },
  odd:({commit,state},payload)=>{
    //处理业务逻辑
    payload=payload||1;
    if(state.count%2==0){
      commit('increment',payload)
    }
  },
  async:({commit,state},payload)=>{
    console.log(payload);
    //处理异步
    setTimeout(()=>{
      axios({
        url:'/static/'+payload+'.json'
      }).then(
        res=>commit('increment',res.data.num)
      )
    },1000)
    
   
  }
}