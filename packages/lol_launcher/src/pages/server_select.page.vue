<template lang="pug">
div#server_select
  div.infomation
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
      footer
        a(v-for="(item, index) of items" :key="index") {{item.name}}
        div
    img(src="../assets/bg.jpg")
  transition(name="fade")
    div.server_list(v-show="listshow" transition="fade")
      div(v-for="(block, index) of servers" :key="index")
        span {{block.name}}
        div(v-for="(server, indexs) of block.children" :key="indexs" :class="selectCheck(index,server)" @click="selectserver=server") {{server.name}}
  main
    div.version 当前游戏版本： v4.0.8.6
    div.serverlist(@click="listshow = !listshow")
    div.serverpic
      img(:src="'/static/img/servers/'+selectserver.pic+'.png'")
      span(@click="last(selectserver.id)")
      span(@click="next(selectserver.id)")
    h1 {{selectserver.name}}
    div.start
</template>
<style lang="stylus" scoped>
#server_select
  overflow hidden
  height 100%
  background #F00
  display flex
  position relative
  .infomation
    position relative
    .logo
      z-index 1
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
      z-index 1
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
      footer
        margin-left 16px
        flex 1
        padding-left 16px
        display flex
        justify-content space-around
        align-items center
        font-size 12px
        height 100%
        a
          color rgb(61,99,121)
          &:hover
            cursor pointer
            color rgb(2,119,149)
        div
          padding 0
          width 25px
          height 25px
          //background url("../assets/qr_code.png")
    >img
      object-fit cover
      object-position -173px
      width 100%
      height 100%
  .server_list
    padding-top 72px
    padding-left 32px
    padding-right 180px
    box-sizing border-box
    position absolute
    font-size 12px
    color #b1ab89
    width 75%
    height 100%
    background linear-gradient(to right, #000C 50%, #0000 100%)
    >div
      span
        margin-bottom 5px
        display block
      >div
        width 102px
        height 30px
        margin-right 12px
        margin-bottom 12px
        display inline-block
        box-sizing border-box
        font bolder 14px/30px "微软雅黑"
        padding-left 24px
        cursor pointer
        &:hover
          transition .25s
      .blue
        color #CFF8FA
        background url("../assets/blue.png")
        &:hover
          color #EFF8FA
          background url("../assets/blueed.png")
      .blueed
        color #EFF8FA
        background url("../assets/blueed.png")
      .orange
        color #CCBE8F
        background url("../assets/orange.png")
        &:hover
          color #EDE5CE
          background url("../assets/oranged.png")
          box-shadow 0px 0px 16px #b1ab89
      .oranged
        color #EDE5CE
        background url("../assets/oranged.png")
        box-shadow 0px 0px 16px #b1ab89
  main
    z-index 0
    position absolute
    right 0px
    width 280px
    height 100%
    background #000811
    display flex
    flex-flow column
    justify-content space-between
    background linear-gradient(to left, #000F 0%, #000C 75%, #0000 100%)
    .serverlist
      width 112px
      height 28px
      background url("../assets/serverlist.png")
      position absolute
      bottom 64px
      right 24px
      &:hover
        background url("../assets/serverlisted.png")
        cursor pointer
    .version
      width 150px
      position absolute
      bottom 100px
      right 0px
      font-size 12px
      color: #A88a4e
    .serverpic
      position absolute
      left -155px
      bottom 210px
      border 1px solid #785A28
      border-radius 50%;
      width 280px
      height 280px
      img 
        width 100%
        height 100%
      span
        width 31px
        height 58px
        position absolute
        left -40px
        top 115px
        background url("../assets/left_tar.png")
        &:hover
          background url("../assets/left_tar_ed.png")
        &:active
          background url("../assets/left_tar_ch.png")
      span+span
        left auto
        right -40px
        background url("../assets/right_tar.png")
        &:hover
          background url("../assets/right_tar_ed.png")
        &:active
          background url("../assets/right_tar_ch.png")
    h1
      width 264px
      text-align center
      position absolute
      left -145px
      bottom 160px
      text-shadow 0px 0px 8px #000
      font-family "微软雅黑"
      color #F0E7D6
      background linear-gradient(to left, #0000 10%, #000A 50%, #0000 90%)
    .start
      width 264px
      height 48px
      position absolute
      bottom 100px
      right 160px
      background url("../assets/server_select.png")
      &:hover
        background url("../assets/server_selected.png")
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
.fade-enter-active, .fade-leave-active
  transition .5s
  opacity 1
  transform translateX(0%) .5s 
.fade-enter, .fade-leave-to
  opacity 0
  transform translateX(-25%) 

</style>

<script>
export default {
  methods: {
    selectCheck(index, server){
      return index == 0 ? (
        this.selectserver.name == server.name ? "blueed" : "blue"
      ) : (
        this.selectserver.name == server.name ? "oranged" : "orange"
      )
    },
    last(id){
      var select
      this.servers.forEach(element => {
        if(select = element.children.filter(obj => obj.id == id-1)[0]){
          this.selectserver = select
        }
      })
      if(this.selectserver.id==id){
        this.servers.forEach(element => {
          if(select = element.children.filter(obj => obj.id == 28)[0]){
            this.selectserver = select
          }
        })
      }
    },
    next(id){
      let select
      this.servers.forEach(element => {
        if(select = element.children.filter(obj => obj.id == id+1)[0]){
          this.selectserver = select
        }
      })
      if(this.selectserver.id==id){
        this.servers.forEach(element => {
          if(select = element.children.filter(obj => obj.id == 1)[0]){
            this.selectserver = select
            console.log(id)
          }
        })
      }
    }
  },
  mounted(){
    this.selectserver = this.servers[1].children.filter(obj => obj.name == "艾欧尼亚")[0]
  },
  data(){
    return{
      listshow: false,
      selectserver: {},
      servers: [
        {
          name: "全网络大区 v4.0.8.5",
          children: [
            {
              id: 26,
              name: "男爵领域",
            },
            {
              id: 27,
              name: "峡谷之巅",
            }
          ]
        },
        {
          name: "电信 v4.0.8.5",
          children: [
            {
              id: 1,
              name: "艾欧尼亚",
              pic: '1001'
            },
            {
              id: 2,
              name: "祖安",
              pic: '1002'
            },
            {
              id: 3,
              name: "诺克萨斯",
              pic: '1003'
            },
            {
              id: 4,
              name: "班德尔城",
              pic: '1004'
            },
            {
              id: 5,
              name: "皮尔特沃夫",
              pic: '1005'
            },
            {
              id: 6,
              name: "战争学院"
            },
            {
              id: 7,
              name: "巨神峰"
            },
            {
              id: 8,
              name: "雷瑟守备"
            },
            {
              id: 9,
              name: "钢铁烈阳"
            },
            {
              id: 10,
              name: "裁决之地"
            },
            {
              id: 11,
              name: "黑色玫瑰"
            },
            {
              id: 12,
              name: "暗影岛",
              pic: '1012'
            },
            {
              id: 13,
              name: "水晶之痕"
            },
            {
              id: 14,
              name: "影流"
            },
            {
              id: 15,
              name: "守望之海"
            },
            {
              id: 16,
              name: "征服之海"
            },
            {
              id: 17,
              name: "卡拉曼达"
            },
            {
              id: 18,
              name: "强者世界"
            }
          ]
        },
        {
          name: "联通 v4.0.8.5",
          children: [
            {
              id: 19,
              name: "比尔吉沃特",
              pic: '1019'
            },
            {
              id: 20,
              name: "德玛西亚",
              pic: '1020'
            },
            {
              id: 21,
              name: "弗雷尔卓德",
              pic: '1021'
            },
            {
              id: 22,
              name: "无畏先锋"
            },
            {
              id: 23,
              name: "恕瑞玛",
              pic: '1023'
            },
            {
              id: 24,
              name: "扭曲丛林"
            },
            {
              id: 25,
              name: "巨龙之巢"
            }
          ]
        },
        {
          name: "其他 v4.0.8.5",
          children: [
            {
              id: 28,
              name: "教育网专区"
            }
          ]
        },
      ],
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
  }
}
</script>
