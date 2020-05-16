/*
 * @Author: w
 * @Date: 2020-05-16 14:02:35
 * @LastEditors: w
 * @LastEditTime: 2020-05-16 16:49:58
 */ 
export default {
  increase(state){
    state.conter++
  },
  set_user_info(state,obj){
    state.userInfo = obj;
  }
}