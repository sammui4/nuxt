import axios from 'axios';

var instance = axios.create({
  baseURL:'http://localhost:5000'
})

export default function () {
  return instance({
    method:'get',
    url:'/getData'
  }).then(({data})=>{
    console.log(data);
  })
}