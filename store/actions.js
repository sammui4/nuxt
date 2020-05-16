/*
 * @Author: w
 * @Date: 2020-05-16 14:02:26
 * @LastEditors: w
 * @LastEditTime: 2020-05-16 17:38:36
 */ 
import instance from '~/assets/js/fetch.js';
import extend from 'extend';
let PROMIS_CACHE = {};

export default {
  getUserInfo(context){
    if(PROMIS_CACHE.USER){
      return PROMIS_CACHE.USER
    }
    PROMIS_CACHE.USER = instance({
      method:'get',
      url:'/getData'
    }).then(({data})=>{
      if(data.status==200){
        context.commit('set_user_info',data.data);
        return data.data
      }
    })
    return PROMIS_CACHE.USER
  }
}