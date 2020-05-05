<template>
  <div>
    <p v-text="ids"></p>
  </div>
</template>
<script>
export default {
  name:'user_id',
  transition: {
    name: 'test',
    mode: 'out-in'
  },
  // 验证，params中的id必须是数字
  validate({ params }){
    return /^\d+$/.test(params.id)
  },
  data(){
    return{
      ids:null
    }
  },
  created(){
    this.ids = this.$route.params.id
  },
  mounted(){

  }
}
</script>