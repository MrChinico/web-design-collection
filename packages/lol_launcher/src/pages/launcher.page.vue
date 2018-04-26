<template lang="pug">
  div#launcher
    navigator
    router-view.app
    sns
</template>

<style lang="stylus" scoped>
#launcher
  width 100%
  height 100%
  background #000
  display flex
  position relative
  #navigator
    z-index 2
  .app
    flex 1
</style>

<script>
import NavigatorComponent from '@/components/navigator.component'
import SnsComponent from '@/components/sns.component'
export default {
  components: {
    'navigator': NavigatorComponent,
    'sns': SnsComponent
  }
}
</script>