<template>
  <div id="error">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['error'],
  layout:'blank',
}
</script>
<style lang="scss" scoped>
  #error{
    width:1200px;
    margin: 0 auto;
    text-align: center;
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
</style>