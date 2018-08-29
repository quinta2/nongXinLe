var express = require('express')
var router = express.Router()

module.exports = function(){
    router.get('/',function(req,res,next){
        console.log('获取cookies',req.session)
        res.send({error:0,msg:'成功',data:{a:'用户信息'}})
    })
    return router;
}