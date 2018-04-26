<template lang="pug">
  div#navigator
    div.play
      div
        img(src="../assets/game.png")
    div.nav
      div
        div(v-for="item of items") {{item.name}}
      div
        div(v-for="item of itemss") {{item.name}}

</template>

<style lang="stylus" scoped>
#navigator
  z-index 1 
  position absolute
  background linear-gradient(top, #000F, #0000)
  width 100%
  height 64px
  box-sizing border-box
  border-top 2px solid #987a48
  border-bottom 1px solid #716c6c88
  display flex
  .play
    width 173px
    display flex
    justify-content center
    align-items center
    >div
      width 120px
      height 32px
      background url('../assets/play.png') 16px no-repeat
      transition .25s
      position relative
      border 1px solid #2f261d
      box-sizing border-box
      cursor pointer
      >img 
        width 36px
        height 36px
        position absolute
        left -12px
        bottom -2px
      &:hover
        background url('../assets/played.png') 16px no-repeat
  .nav
    padding-right 180px
    flex 1
    display flex
    justify-content space-between
    >div
      >div
        display inline-block
        width 58px
        height 100%
        font bolder 18px/64px "微软雅黑"
        color #cdbe90
        text-align center
        cursor pointer
        &:hover
          background radial-gradient(circle at 50% 100%, #968A75 10%, #968A7500 50%)
      .select
        background 0px -1px url('../assets/menu.png') no-repeat
      >div+div
        border-left 10px solid #cdbe90
        border-image: linear-gradient(to top, #cdbe9000 0%, #cdbe90ff 50%, #cdbe9000 100%)
</style>
<script>
export default {
  data() {
    return {
      items: [
        {
          name: '主页'
        },
        {
          name: '生涯'
        },
        {
          name: '藏品'
        }
      ],
      itemss: [
        {
          name: '战利品'
        },
        {
          name: '商城'
        }
      ]
    }
  }
}
</script>

