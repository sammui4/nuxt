<template>
  <div class="container">
    <div>
      <logo />
      <p>我的第一个尝试</p>
      <div v-text="numbers"></div>
      <div v-text="info.name"></div>
      <div v-text="info.age"></div>
      <div v-text="info.hobby"></div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import instance from '~/assets/js/fetch.js';
export default {
  components: {
    Logo
  },
  async asyncData(context){
    // 没有this对象，因为这是在服务端的东西
    let {data} = await instance({method:'get',url:'/asyncDataMethod'})
    if(data.status==200){
      console.log('data.data',data.data)
      return {info:data.data}
    }
    return {info:{}}
  },
  mounted(){
    // this.$http({
    //   method:'get',
    //   url:'/asyncDataMethod'
    // }).then(({data})=>{
    //   if(data.status==200){
    //     console.log(data.data);
    //   }
    // })
  },
  computed:{
    numbers(){
      return this.$store.state.conter
    }
  },
  methods:{
    
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
