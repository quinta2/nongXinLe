var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var consolidate = require('consolidate')
var mysql = require('mysql')

var logger = require('morgan');
var cors = require('cors');

// var Vue = require('vue')
// var VueCookie = require('vue-cookie')
// Vue.use(VueCookie)

var app = express();

app.set('view.engine','html')
app.set('views',__dirname + '/views');
app.set('view enigne', 'jade')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  keys:['aa','bb'],
  name:'abc_id',
}));
//静态页面托管
app.use(express.static(path.join(__dirname, 'public')));

//配置cors中间件
app.use(cors({
  "origin": ["http://localhost:8001","http://localhost:5000","http://localhost:8080"],  //允许所有前端域名
  "credentials":true,//允许携带凭证
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));

//配置数据库
let db = mysql.createPool({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'root',
  database : 'stores'
}); 

var index = require('./routes/index')
var users = require('./routes/users')
var login = require('./routes/login');
var register = require('./routes/register')
var detail = require('./routes/detail')
var getcookie = require('./routes/getcookie')
var shopcar = require('./routes/shopcar')
app.use('/',index(db));
app.use('/index',index(db));
app.use('/users',users(db))//req发送db
app.use('/login',login(db))
app.use('/register',register(db))
app.use('/detail',detail(db))
app.use('/getcookie',getcookie)
app.use('/shopcar',shopcar(db))

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
