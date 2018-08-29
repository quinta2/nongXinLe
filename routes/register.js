var express = require('express')
var router = express.Router()

module.exports = (db)=>{ 
    router.get('/',(req,res)=>{
        let username = req.query.username;
        let password = req.query.password; 
        db.query(
            `INSERT INTO user (username,password) VALUES ("${username}","${password}")`,
            (err,result)=>{
                if(err) res.send('user error database')
                else{
                    if(result.affectedRows>0){
                        //种cookie
                        res.send('注册成功')
                    }else{
                        res.send({error:1,des:'注册失败'})
                    }
                }
            }
        )
    })
    return router
}