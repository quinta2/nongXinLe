var express = require('express')
var router = express.Router()

module.exports = (db)=>{
    router.get('/',(req,res)=>{
        db.query(
            `SELECT * FROM shopcar`,
            (err,result)=>{
                if(err) res.send('shopcar error database')
                else{
                    if(result.length>0) {
                        req.session['shopcar'] = result
                        res.send(result)
                    }
                    else res.send({error:1,des:'该商品已下架'})
                }
            }
        )
    })
    return router
}