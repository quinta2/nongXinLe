var express = require('express')
var router = express.Router()

module.exports = (db)=>{
    router.get('/',(req,res)=>{
        let id = req.query.id
        db.query(
            `SELECT * FROM detail WHERE pro_id="${id}"`,
            (err,result)=>{
                if(err) res.send('detail error database')
                else{
                    if(result.length>0) res.send(result)
                    else res.send({error:1,des:'该商品已售完'})
                }
            }
        )
    })
    return router;
}