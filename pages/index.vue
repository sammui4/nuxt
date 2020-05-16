<template>
  <div class="container">
    <div>
      <logo />
      <p>我的第一个尝试</p>
      <div v-text="numbers"></div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
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
