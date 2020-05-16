/*
 * @Author: w
 * @Date: 2020-05-16 14:38:35
 * @LastEditors: w
 * @LastEditTime: 2020-05-16 14:56:22
 */ 
import axios from "axios";
// import { getToken } from '@/utils/token';

let baseurl = "";

switch (process.env.NODE_ENV) {
    case "production":
        baseurl = "http://localhost:5000/";
        break;
    case "development":
        baseurl = "http://localhost:5000/";
    break;
}

const instance = axios.create({
    headers: {

    },
    timeout: 60000,
    baseURL: baseurl
});

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
instance.interceptors.request.use((config) => {  //配置发送请求的信息

    config.headers = config.headers || {};

    // config.headers.token = getToken();

    return config;
});

// 添加响应拦截器
instance.interceptors.response.use(response => {
    let responseData = response.data;

    // 如果token失效 跳到登录页
    if (!responseData.istrue && responseData.status === 801) {
      
    }

    return response;
}, e => {
    return Promise.reject(e);
});

export default instance

export { baseurl }