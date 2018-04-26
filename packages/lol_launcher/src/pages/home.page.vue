<template lang="pug">
  div#home
    router-view.page
    div.bg
      div
      img(src="../assets/homebg.png")
</template>

<style lang="stylus" scoped>
#home
  position relative
  .page
    position relative
    z-index 1
  .bg
    z-index 0
    top 0
    position absolute
    width 100%
    height 100%
    >div
      position absolute
      width 100%
      height 100%
      background radial-gradient(circle at 60% 40%, #0000 0%, #0000 25%, #000A 100%)
    >img
      object-fit contain
      object-position 0px 0px
      background linear-gradient(top, #000F, #0000)
      width 100%
      height 100%
</style>

