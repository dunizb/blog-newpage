<template lang="html">
  <div ref="page" class="page">
    <img src="static/images/404.jpg" />
    <h1>很抱歉，你所访问的页面不存在了，可能是我调整了网站域名所至</h1>
    <h3>可能是我变更了网站URL，你可以试试下面的解决方案：</h3>
    <p>
      <a href="javascript:;" @click="to"> 【点击这里试试】 </a> 或者 修改当前URL的域名为：blog.dunizb.com
    </p>
    <p>
      <p>页面找不到了，不要慌，你可以随便到处看看其他的东西</p>
      <a href="https://dunizb.com">网站首页</a> - <a href="https://blog.dunizb.com">博客首页</a>
      - <a href="https://store.dunizb.com">我的小店</a> - <a href="https://blog.dunizb.com/categories/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/">前端开发</a>
    </p>
  </div>
</template>

<script>
  export default {
    mounted () {
      if (confirm('该页面URL可能已经变更，是否去新的地址？')) {
        this.to()
      }
    },
    methods: {
      to () {
        var url = window.location.href
        // 'https://dunizb.com/2017/12/08/You-have-to-know-the-basic-HTTP-concepts/'
        location.href = 'https://blog.dunizb.com/' + url.split('.com')[1]
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/main.scss";
.page{
  text-align:center;
  img{margin: 0 auto;}
}
</style>
