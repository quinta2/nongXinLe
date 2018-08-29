import axios from 'axios'
import {VIEW_LOADING,VIEW_FOOT,UPDATE_HOME,UPDATE_USER} from './type'
let actions = {
  [VIEW_LOADING]:({commit,state},payload)=>{
    //处理业务逻辑
    commit(VIEW_LOADING,payload)
  },
  [VIEW_FOOT]:({commit,state},payload)=>{
    //处理业务逻辑
    commit(VIEW_FOOT,payload)
  },
  /* [UPDATE_HOME]:({commit,state},payload)=>{
    //处理业务逻辑
    axios({
      url:`/static/data/user.json`
    }).then(
      res=>commit(UPDATE_HOME,res.data)
    )
  }, */
  [UPDATE_USER]:({commit,state},payload)=>{
    //处理业务逻辑
    commit(UPDATE_USER,payload)
  }
}
export default actions;