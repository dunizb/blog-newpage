<template lang="html">
  <div ref="page" class="page">
    <img ref="bgimg" src="//api.dujin.org/bing/1920.php" style="display:none;">
    <header ref="header">
      <h1>Dunizb</h1>
      <h2>这世间唯有梦想和好姑娘不可辜负！</h2>
      <div class="split">
        <span style="background-color: #dc3023"></span>
        <span style="background-color: #3183f9;"></span>
        <span style="background-color: #057748;"></span>
        <span style="background-color: #e6b422;"></span>
      </div>
    </header>
    <nav>
      <ul>
        <li title="博客"><a class="blog" href="https://blog.dunizb.com"><i class="iconfont icon-index"></i>博客</a></li>
        <li title="我的商店"><a class="store" href="https://store.dunizb.com"><i class="iconfont icon-circlebuy1"></i>商店</a></li>
        <!-- <li title="博客分类"><a class="categorie" href="https://blog.dunizb.com"><i class="iconfont icon-filearticle"></i>FE</a></li> -->
        <li title="Demos"><a class="demo" href="https://demo.dunizb.com"><i class="iconfont icon-bianji"></i>Demo</a></li>
        <!-- <li title="Codetest"><a class="code" href="https://blog.dunizb.com"><i class="iconfont icon-Code"></i>Code</a></li> -->
        <li title="我的足迹"><a class="map" target="_blank" href="https://dunizb.github.io/footprint"><i class="iconfont icon-09"></i>足迹</a></li>
        <li title="我拍的照片"><a class="photo" href="https://blog.dunizb.com"><i class="iconfont icon-photoalbum"></i>摄影</a></li>
        <li title="我拍的照片"><a class="read" target="_blank" href="https://github.com/dunizb/reading-list"><i class="iconfont icon-book1"></i>读书</a></li>
        <li title="电子书"><a class="ebook" href="https://webdev.dunizb.com"><i class="iconfont icon-book-copy"></i>电子书</a></li>
        <li title="关于"><a class="about" href="https://dunizb.com/about/"><i class="iconfont icon-about-s"></i>关于</a></li>
      </ul>
    </nav>
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
        // const imgurl = this.$refs['bgimg'].src
        // this.$refs['header'].style.backgroundImage = 'url(' + imgurl + ')'
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/main.scss";
</style>
