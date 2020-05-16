/*
 * @Author: w
 * @Date: 2020-05-06 11:01:57
 * @LastEditors: w
 * @LastEditTime: 2020-05-16 14:59:05
 */
var express = require('express');

var app = express();

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "content-type,Access-Token,token");
  res.header("Access-Control-Allow-Credentials", '*');
  res.header('Access-Control-Expose-Headers', '*');
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Content-Type", "application/json;charset=UTF-8");
  next();
})

app.get('/getData',function(req, res){
  res.send({
    status:200,
    data:{
      userName:'w',
      token:'gjfiogjfo'
    },
    msg:'读取成功!'
  })
  console.log('正在读取')
})

app.listen(5000);