<template>
  <div>
    <div>老衲自创布局中的顶部</div>
    <div>
      <nuxt-link to="/">主页</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/analyse/productLine">产品线</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/user/2">用户2</nuxt-link>
    </div>
    <nuxt />
    <div>老衲自创布局中的底部</div>
  </div>
</template>
<script>
export default {
  name:'wLayout',
  
}
</script>
<style lang="scss" scoped>

</style>