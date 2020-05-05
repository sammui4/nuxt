<template>
  <div>
    <div>404</div>
    <div><span v-text="countdown"></span><span>后返回</span><nuxt-link to="/">首页</nuxt-link></div>
  </div>
  
</template>
<script>
export default {
  name:'nofind',
  layout:'blank',
  data(){
    return{
      countdown:5,
      timeOut:null,
    }
  },
  created(){
    this.countDownEvent()
  },
  methods:{
    countDownEvent(){
      this.timeOut = setInterval(()=>{
        this.countdown--;
        if(this.countdown==0){
          this.$router.push('/');
          this.timeOut = null;
        }
      },500)
    }
  },
  destroyed(){
    this.timeOut = null;
  }
}
</script>
<style lang="scss" scoped>

</style>