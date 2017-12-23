<template lang="html">
  <div ref="page" class="page">
    <div class="split">
      <span style="background-color: #dc3023"></span>
      <span style="background-color: #3183f9;"></span>
      <span style="background-color: #057748;"></span>
      <span style="background-color: #e6b422;"></span>
    </div>
    <img ref="bgimg" src="//api.dujin.org/bing/1920.php" style="display:none;">
    <header ref="header">
      <hgroup>
        <a href="/">
          <div class="avatar">
            <img src="https://dunizb.com/img/avatar.gif" />
          </div>
          <h1>Dunizb<span>.com</span></h1>
        </a>
        <h2>这世间唯有梦想和好姑娘不可辜负</h2>
      </hgroup>
    </header>
    <nav>
      <ul class="main-nav">
        <li title="博客"><a class="blog" href="javscript:;"><i class="iconfont icon-index"></i> 博客</a></li>
        <li title="我的商店"><a class="store" href="https://store.dunizb.com"><i class="iconfont icon-circlebuy1"></i> 商店</a></li>
        <!-- <li title="博客分类"><a class="categorie" href="https://blog.dunizb.com"><i class="iconfont icon-filearticle"></i>FE</a></li> -->
        <li title="Demos"><a class="demo" href="https://demo.dunizb.com"><i class="iconfont icon-bianji"></i> Demo</a></li>
        <li title="我的足迹"><a class="map" target="_blank" href="https://dunizb.github.io/footprint"><i class="iconfont icon-09"></i> 足迹</a></li>
        <li title="我拍的照片"><a class="photo" href="http://duni.pp.163.com/"><i class="iconfont icon-photoalbum"></i> 摄影</a></li>
        <li title="我拍的照片"><a class="read" target="_blank" href="https://github.com/dunizb/reading-list"><i class="iconfont icon-book1"></i> 读书</a></li>
        <li title="Codetest"><a class="code" href="https://blog.dunizb.com"><i class="iconfont icon-Code"></i> Code</a></li> 
        <!-- <li title="电子书"><a class="ebook" href="https://webdev.dunizb.com"><i class="iconfont icon-book-copy"></i>EBOOK</a></li>  -->
        <li title="关于"><a class="about" href="https://dunizb.com/about/"><i class="iconfont icon-about-s"></i> 关于</a></li>
      </ul>
      <ul class="sub-nav">
        <!-- <li title="去博客首页"><a href="https://blog.dunizb.com" class="main"><i class="iconfont icon-go"></i></a></li> -->
        <li><a href="http://dunizb.com/categories/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/">大前端</a></li>
        <li><a href="http://dunizb.com/tags/JavaScript/">JavaScript</a></li>
        <li><a href="http://dunizb.com/tags/HTML/">HTML</a></li>
        <li><a href="http://dunizb.com/tags/css/">CSS</a></li>
        <li><a href="http://dunizb.com/categories/Java/">Java</a></li>
        <li><a href="https://dunizb.com/tags/github/">Git</a></li>
        <li><a href="https://dunizb.com/tags/Vue-js/">Vue.js</a></li>
        <li><a href="https://dunizb.com/tags/%E7%A7%BB%E5%8A%A8Web/">移动Web</a></li> 
        <li><a href="https://dunizb.com/categories/%E9%9A%8F%E7%AC%94%E6%89%AF%E8%B0%88/">随笔扯谈</a></li>
        <li><a href="https://dunizb.com/categories/%E5%92%8C%E6%88%91%E4%B8%80%E8%B5%B7%E8%AF%BB%E4%B9%A6/">和我一起读书</a></li>
        <li><a href="https://dunizb.com/tags/%E7%94%9F%E6%B4%BB/">生活</a></li>
        <li><a href="https://dunizb.com/categories/%E5%B9%B4%E7%BB%88%E6%80%BB%E7%BB%93/">年终总结</a></li> 
        <li><a href="https://dunizb.com/categories/%E5%B9%B4%E7%BB%88%E6%80%BB%E7%BB%93/">思考&感悟&心得</a></li>
      </ul>
    </nav>
    <div class="row">
      <!-- 我订阅的专栏 -->
      <div class="row_box row_zhuanlan">
        <div class="title"><i class="iconfont icon-Rss"></i> 我订阅的专栏</div>
        <div class="content">
          <div class="content_img_box">
            <img src="../../assets/images/zhuanlan/jiketime_zuoertingfeng.png" />
            <a class="chenghao" href="https://mubu.com/doc/25sSf3gfih" target="_blank"><i class="iconfont icon-webclicksettings"></i> 陈皓《左耳听风》学习笔记</a>
          </div>
          <div class="content_img_box">
            <img src="../../assets/images/zhuanlan/dedao_xiangshuai.png" />
            <a class="xiangshuai" href="https://mubu.com/doc/HQC8PLyUg" target="_blank"><i class="iconfont icon-webclicksettings"></i> 香帅《北大金融学课》学习笔记</a>
          </div>
          <div class="content_img_box">
            <img src="../../assets/images/zhuanlan/dedao_lixiaolai.jpg" />
            <a class="lixiaolai" href="https://mubu.com/doc/EsBQnoFgg" target="_blank"><i class="iconfont icon-webclicksettings"></i> 李笑来《通往财富自由之路》学习笔记</a>
          </div>
        </div>
      </div>
      <!-- 我的书店 -->
      <div class="row_box row_store">
        <div class="title"><i class="iconfont icon-ShoppingMall"></i> 我的小店</div>
        <div class="content">
          <div class="row_store_item">
            <div class="item">
              <div class="item_img">
                <img src="https://img14.360buyimg.com/n0/jfs/t2191/111/699154754/198998/32d7bfe0/5624b582Nbc01af5b.jpg" />
                <a class="iconfont icon-buy1" href="https://store.dunizb.com" target="_blank"><strong>￥49，去看看</strong></a>
              </div>
              <div class="info">
                <h3>Java编程思想（第4版）[thinking in java]</h3>
                <span>全球程序员广泛赞誉 Java扛鼎经典之作</span>
              </div>
            </div>
            <div class="item">
              <div class="item_img">
                <img src="https://img14.360buyimg.com/n0/jfs/t3136/71/355944483/202149/2788207/57b2f0d5N776838af.jpg" />
                <a class="iconfont icon-buy1" href="https://store.dunizb.com" target="_blank"><strong>￥20，去看看</strong></a>
              </div>
              <div class="info">
                <h3>内外兼修：程序员的成长之路</h3>
                <span>如何从一个普通程序员成长为架构师、团队负责人</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="row_box row_maps">
        <div class="title"><i class="iconfont icon-09"></i> 我的足迹</div>
        <div class="content">
          <div id="my-maps"></div>
          <div class="row_btn">
            <a href="https://dunizb.github.io/footprint" target="_blank"><i class="iconfont icon-footerx"></i> 查看详细足迹 <i class="iconfont icon-footerx"></i></a>
          </div>
        </div>
      </div>
    </div>
    <footer>
    </footer>
  </div>
</template>

<script>
  export default {
    mounted () {
      // 获取Bing.com每日壁纸
      this.getEveryDayBgimg()
    },
    methods: {
      getEveryDayBgimg () {
        console.log('获取Bing.com每日壁纸')
        const imgurl = this.$refs['bgimg'].src
        this.$refs['header'].style.backgroundImage = 'url(' + imgurl + ')'
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/main.scss";
</style>
