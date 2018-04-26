<template lang="pug">
div#login
  div
    div.logo
      div
        img(src="../assets/logo_guide.png")
    div.discription
      img(src="../assets/foot-light.png")
      img(src="../assets/logo-riot.png")
      div
        span 本网络游戏适合年满18周岁（含）以上的用户使用；为了您的健康，请合理控制游戏时间。
        span Copyright 1998-2018 Tencent Inc. All Rights Reserved 著作权人：Riot Games 新出审字 [2011] 310号
        span 抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活
    img(src="../assets/bg.jpg")
  main
    header
      img(src="../assets/game.png")
    form(@submit.prevent="login")
      label
        span QQ账号
        input(ref="account")
      label
        span QQ密码
        input(ref="password" type="password" autocomplete="new-password")
      div
        label(for="remanber")
          input(id="remanber" ref="remanber" type="checkbox")
          span
          a 记住账号
        label(for="contract")
          input(id="contract" ref="contract" type="checkbox")
          span
          a(href="#") 已阅读并同意服务条款
      input(type="submit" value="")
      div.version 游戏版本号： v4.0.0.0
    footer
      a(v-for="(item, index) of items" :key="index") {{item.name}}
      div
  audio.success(src="/static/sound/open.mp3" ref="FX")
  audio.success(src="/static/sound/sound.mp3" loop="loop" ref="BG")
</template>
<style lang="stylus" scoped>
  #login
    height 100%
    background #F00
    display flex
    >div
      flex 1
      position relative
      .logo
        width 100%
        height 64px
        background linear-gradient(to bottom, #000E 0%, #000A 50%, #0000 100%)
        padding 0px 16px
        box-sizing border-box
        position absolute
        div
          height 100%
          box-sizing border-box
          border-bottom 1px solid #716b6088
          img
            margin-top 8px
            height 48px
      .discription
        width 100%
        height 48px
        background #09111988
        position absolute
        bottom 0
        display flex
        align-items center
        img
          height 32px
          margin-left 8px
        div
          padding-left 16px
          span
            display block
            line-height 14px
            font-size 12px
            color rgb(105,116,124)
      >img
        object-fit cover
        width 100%
        height 100%
    main
      width 240px
      height 100%
      background #000811
      display flex
      flex-flow column
      justify-content space-between
      background url("/static/img/right_bg.png") 0px -24px
      header
        height 200px
        display flex
        justify-content center
        align-items center
        img
          width 90px
          height 90px
      form
        flex 1
        label
          display block
          color #C8AA6E
          font-size 12px
          position relative
        >label
          background url("../assets/input.png") center no-repeat
          margin-bottom 24px
          height 36px
          span
            position absolute
            top -16px
            left 20px
          input
            height 20px
            margin-top 9px
            margin-left 32px
            background #0000
            color #C8AA6E
            outline none
        >div
          margin-top -16px
          label
            padding-bottom 8px
            position relative
            padding-left 72px
            a
              color #B1AB89
            input
              display none
              &:checked + span
                width 16px
                height 16px
                background url("../assets/checked.png")
            span
              position absolute
              left 48px
              display inline-block
              width 16px
              height 16px
              background url("../assets/check.png")
        input[type="submit"]
          width 188px
          height 48px
          margin-top 16px
          margin-left 26px
          background url("../assets/login.png")
          border 1px solid #2E261F
          &:hover
            background url("../assets/login_act.png")
        .version
          margin-top 64px
          font-size 12px
          color #8888
          text-align center
      footer
        display flex
        justify-content space-around
        align-items center
        font-size 14px
        height 48px
        background #091119
        a
          color rgb(61,99,121)
          &:hover
            cursor pointer
            color rgb(2,119,149)
        div
          width 25px
          height 25px
          background url("../assets/qr_code.png")
          &:hover
            cursor pointer
            background url("../assets/qr_code_act.png")

</style>

<script>
export default {
  mounted(){
    this.$refs.FX.play()
    this.$refs.BG.play()
  },
  data(){
    return{
      items:[
        {
          name: "官网"
        },
        {
          name: "客服"
        },
        {
          name: "充值"
        },
        {
          name: "注册"
        }
      ]
    }
  },
  methods:{
    login(event){
      let str = "QQ账户："+this.$refs.account.value+"\nQQ密码："+this.$refs.password.value+"\n记住账户："+this.$refs.remanber.checked+"\n用户许可："+this.$refs.contract.checked
      console.info(str)
    }
  }
}
</script>
