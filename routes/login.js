var express = require('express')
var router = express.Router()

module.exports = (db)=>{ 
    //处理登陆
    router.get('/',(req,res)=>{//如果是sumit方式
        //兜库-> 拿着前端的数据进行对比 -> 种cookie
        //前端发送过来的请求
        let username = req.query.username;
        let password = req.query.password; 
        db.query(            
            `SELECT * FROM user WHERE username="${username}" AND password="${password}"`,
            (err,result) => {
                if(err) res.send('login error database')
                else{
                    if(result.length>0){
                        //种cookie
                        console.log('登录成功')
                        req.session['username']=req.query.username;
                        
                        // req.sessioin['password']=req.query.password;
                        res.send(result)
                    }else{
                        console.log(res)
                        res.send({error:1,des:'用户名或者密码有误'})                        
                    }
                }
            }
        )
    }) 
    return router;
}
