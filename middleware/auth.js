/*
 * @Author: w
 * @Date: 2020-05-06 10:40:24
 * @LastEditors: w
 * @LastEditTime: 2020-05-16 15:00:06
 */ 

import instance from '~/assets/js/fetch.js'

export default function () {
  return instance({
    method:'get',
    url:'/getData'
  }).then(({data})=>{
    console.log(data);
  })
}