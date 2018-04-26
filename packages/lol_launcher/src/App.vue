<template lang="pug">
  //- 全局入口
  div#app
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import "./global";
#app
  width 1024px
  height 576px
  mix-width 1024px
  mix-height 576px
</style>
