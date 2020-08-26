/*
 * @Author: w
 * @Date: 2020-05-06 11:01:57
 * @LastEditors: w
 * @LastEditTime: 2020-08-26 10:21:39
 */
var express = require('express');

var app = express();

// 要不安装@nuxtjs/proxy，在nuxt.config.js设置相关。要不直接在后端设置相关
// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "content-type,Access-Token,token");
//   res.header("Access-Control-Allow-Credentials", '*');
//   res.header('Access-Control-Expose-Headers', '*');
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Content-Type", "application/json;charset=UTF-8");
//   next();
// })



app.get('/middlewareMethod',function(req, res){
  // setTimeout((function(){
    res.send({
      status:200,
      data:{
        userName:'w',
        token:'gjfiogjfo'
      },
      msg:'读取成功!'
    })
    console.log('正在读取middlewareMethod')
  // }),3000)
  
})

app.get('/asyncDataMethod',function(req, res){
  res.send({
    status:200,
    data:{
      name:'w',
      age:20,
      hobby:'games'
    },
    msg:'读取成功!'
  })
  console.log('正在读取asyncData')
})

app.get('/fetchMethod',function(req, res){
  res.send({
    status:200,
    data:{
      interestingStr:[
        {
          label:'启用',
          value:'1'
        },{
          label:'停用',
          value:'0'
        }
      ]
    },
    msg:'读取成功!'
  })
  console.log('正在读取asyncData')
})

app.listen(5000);