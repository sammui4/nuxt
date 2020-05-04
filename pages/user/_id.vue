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