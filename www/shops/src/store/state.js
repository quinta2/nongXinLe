let state = {
  bLoading:true,
  bFoot:true,
  home:[],
  user:{
    auth:false,//验证用户是否存在，若为true,则继续;若为false则进入登录页面
    data:[]
  }
};  
export default state;