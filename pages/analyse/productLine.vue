<template>
  <div>
    <h1 class="red">Hello {{ name }}!</h1>
  </div>
</template>
<script>
export default {
  name:'productLine',
  layout:'wLayout',
  transition: 'test',
  asyncData(context) {
    return {name:'monk'}
  },
}
</script>
<style lang="scss" scoped>
  .red{
    color:red;
  }
</style>