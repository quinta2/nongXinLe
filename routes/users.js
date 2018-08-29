var express = require('express')
var router = express.Router()

module.exports = (db)=>{
    console.log(db)
    router.get('/',function(req,res){
        //前端发送的id值
        let id = req.query.id
        db.query(
            `SELECT * FROM user WHERE ID ="${id}"`,
            (err,result) =>{
                if(err) res.send('user error database')
                else{
                    if(result.length >0) res.send(result)
                    else res.send({error:1,des:'该用户不存在'})
                }
            }
        )
    })
    return router;  
}
