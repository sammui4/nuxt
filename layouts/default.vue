<template>
  <div>
    <div>默认布局中的顶部</div>
    <div>
      <nuxt-link to="/">主页</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/analyse/productLine">产品线</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/user/2">用户2</nuxt-link>
    </div>
    <nuxt  />
    
    <div>默认布局中的底部</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding:0;
}

</style>
