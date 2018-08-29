var express = require('express')
var router = express.Router()

module.exports = (db)=>{
    router.get('/',function(req,res,next){
        db.query(
            `SELECT * FROM product`,
            (err,result)=>{
                if(err) res.send('product error database')
                else{
                    if(result.length>0) res.send(result)
                    else res.send({error:1,des:'没有商品'})
                }
            }
        )
    })
    return router
}
