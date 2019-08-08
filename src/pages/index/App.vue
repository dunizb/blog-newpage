<template lang="html">
  <div ref="page" class="page">
    <!-- <div class="split">
      <span style="background-color: #dc3023"></span>
      <span style="background-color: #3183f9;"></span>
      <span style="background-color: #057748;"></span>
      <span style="background-color: #e6b422;"></span>
    </div> -->
    <img ref="bgimg" src="//api.dujin.org/bing/1920.php" style="display:none;">
    <header ref="header">
      <hgroup>
        <div class="avatar">
          <img src="static/images/avatar.gif" id="play_bgm_avatar" @click="play()" :class="[className]" title="点我关闭背景音乐" />
        </div>
        <h1>Dunizb<span>.com</span><img class="hat" src="../../assets/hat.svg" /></h1>
        <h2>这世间唯有梦想和好姑娘不可辜负</h2>
      </hgroup>
    </header>

    <!-- 导航菜单 开始 -->
    <nav>
      <ul class="main-nav">
        <li title="博客"><a class="blog" onclick="_hmt.push(['_trackEvent', 'nav', 'click', '博客'])" href="https://blog.dunizb.com"><i class="iconfont icon-index"></i> 博客</a></li>
        <li title="我的小铺"><a class="store" onclick="_hmt.push(['_trackEvent', 'nav', 'click', '商店'])" href="https://store.dunizb.com"><i class="iconfont icon-circlebuy1"></i> 小铺</a></li>
        <!-- <li title="博客分类"><a class="categorie" href="https://blog.dunizb.com"><i class="iconfont icon-filearticle"></i>FE</a></li> -->
        <li title="小码"><a class="demo" onclick="_hmt.push(['_trackEvent', 'nav', 'click', 'DEMO'])" href="http://demo.dunizb.com"><i class="iconfont icon-bianji"></i> 小码</a></li>
        <li title="我的足迹"><a class="map" onclick="_hmt.push(['_trackEvent', 'nav', 'click', '足迹'])" href="#my-zuji"><i class="iconfont icon-09"></i> 足迹</a></li>
        <li title="我拍的照片"><a onclick="_hmt.push(['_trackEvent', 'nav', 'click', '照片'])" class="photo" href="https://photo.dunizb.com/" target="_blank"><i class="iconfont icon-photoalbum"></i> 摄影</a></li>
        <li title="我的阅读激励"><a class="read" onclick="_hmt.push(['_trackEvent', 'nav', 'click', '读书'])" href="https://github.com/dunizb/reading-list" target="_blank"><i class="iconfont icon-book1"></i> 读书</a></li>
        <li title="Codetest"><a class="code" onclick="_hmt.push(['_trackEvent', 'nav', 'click', 'Code'])" href="https://github.com/dunizb/CodeTest"><i class="iconfont icon-Code"></i> Code</a></li>
        <li title="关于"><a class="about" onclick="_hmt.push(['_trackEvent', 'nav', 'click', '关于我'])" href="https://blog.dunizb.com/about/"><i class="iconfont icon-about-s"></i> 关于</a></li>
      </ul>
      <ul class="sub-nav">
        <!-- <li title="去博客首页"><a href="https://blog.dunizb.com" class="main"><i class="iconfont icon-go"></i></a></li> -->
        <li><a href="https://blog.dunizb.com/categories/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/">前端开发</a></li>
        <li><a href="https://blog.dunizb.com/tags/Vue-js/">Vue.js</a></li>
        <li><a href="https://blog.dunizb.com/categories/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/">学习笔记</a></li>
        <li><a href="https://blog.dunizb.com/tags/%E5%B0%8F%E6%8A%80%E5%B7%A7/">小技巧</a></li>
        <li><a href="https://blog.dunizb.com/categories/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%BC%80%E5%8F%91/">服务端开发</a></li>
        <li><a href="https://blog.dunizb.com/categories/%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8/">工具使用</a></li>
        <li><a href="https://blog.dunizb.com/categories/%E9%9A%8F%E7%AC%94%E6%89%AF%E8%B0%88/">随笔扯谈</a></li>
        <li><a href="https://blog.dunizb.com/categories/%E5%92%8C%E6%88%91%E4%B8%80%E8%B5%B7%E8%AF%BB%E4%B9%A6/">和我一起读书</a></li>
        <li><a href="https://blog.dunizb.com/categories/%E7%94%9F%E6%B4%BB/">生活</a></li>
        <!-- <li><a href="https://blog.dunizb.com/categories/%E5%B9%B4%E7%BB%88%E7%9B%98%E7%82%B9/">年终盘点</a></li> -->
        <!-- <li><a href="https://blog.dunizb.com/tags/%E6%80%9D%E8%80%83%E6%84%9F%E6%82%9F/">思考感悟</a></li> -->
      </ul>
    </nav>
    <!-- 导航菜单 结束 -->

    <div class="row-container">
      <div class="row">
        <!-- 我订阅的专栏 -->
        <div class="row_box row_zhuanlan">
          <div class="header">
            <div class="title"><i class="iconfont icon-Rss"></i> 我订阅的专栏</div>
            <div class="title_info">订阅的一些很棒的付费专栏，推荐你也看看</div>
          </div>
          <div class="content">
            <div class="content_img_box">
              <img src="//i.loli.net/2019/07/28/5d3d931c9f9b085051.jpg" />
              <a class="chenghao" onclick="_hmt.push(['_trackEvent', '专栏', 'click', '极客时间《10x 程序员工作法》'])" href="//blog.dunizb.com/2019/01/20/10%E5%80%8D%E5%B7%A5%E4%BD%9C%E6%B3%95%E4%B9%8B%E4%BB%A5%E7%BB%88%E4%B8%BA%E5%A7%8B/" target="_blank"><i class="iconfont icon-webclicksettings"></i> 极客时间《10x 程序员工作法》</a>
            </div>
            <div class="content_img_box">
              <img src="//i.loli.net/2019/07/28/5d3d93b71d2da94904.png" />
              <a class="xiangshuai" onclick="_hmt.push(['_trackEvent', '专栏', 'click', '《吴军的谷歌方法论》'])" href="javascript:;" target="_blank"><i class="iconfont icon-webclicksettings"></i> 得到《吴军的谷歌方法论》</a>
            </div>
            <div class="content_img_box">
              <img src="//i.loli.net/2019/07/28/5d3da4263741272637.png" style="height: 176px;" />
              <a class="lixiaolai" onclick="_hmt.push(['_trackEvent', '专栏', 'click', '网易精品课《杨亮讲单词·方法篇》'])" href="//ke.youdao.com/course/detail/26898?keyfrom=www.dunizb.com" target="_blank"><i class="iconfont icon-webclicksettings"></i> 网易精品课《杨亮讲单词·方法篇》</a>
            </div>
          </div>
        </div>
        <!-- 我的书店 -->
        <div class="row_box row_store">
          <div class="header">
            <div class="title"><i class="iconfont icon-ShoppingMall"></i> 我的小店</div>
            <div class="title_info">出售个人闲置书籍，价格实惠，正品包邮，欢迎来看看</div>
          </div>
          <div class="content">
              <div class="row_store_item">
                <div class="item">
                <div class="item_img">
                  <img src="//img3m0.ddimg.cn/86/5/1157436410-1_w_1.jpg" style="height: 418px;"/>
                  <a class="iconfont icon-buy1" href="https://store.dunizb.com" target="_blank"><strong>￥19，去看看</strong></a>
                </div>
                <a class="info" nclick="_hmt.push(['_trackEvent', '版块', 'click', '进入商店'])" href="https://store.dunizb.com" target="_blank">
                  <div class="buy_link">
                    <a class="iconfont icon-webclicksettings" href="https://store.dunizb.com" target="_blank">￥19，去看看</a>
                  </div>
                  <h3>文明之光（全彩印刷套装1-4册）</h3>
                  <span>吴军出品，必属精品，迄今为止吴军规模最宏大的作品</span>
                </a>
              </div>

                <div class="item">
                  <div :class="{'item_img': true, 'loading': showImgLoading}">
                    <img src="https://m.360buyimg.com/mobilecms/s750x750_g10/M00/08/19/rBEQWFE5UAMIAAAAAAIdHGYQUr8AABt2QDZKuwAAh00309.jpg!q80.dpg.webp" style="height: 419px; width: 320px;" />
                    <a class="iconfont icon-buy1" onclick="_hmt.push(['_trackEvent', '版块', 'click', '进入商店'])" href="https://store.dunizb.com" target="_blank"><strong>￥19，去看看</strong></a>
                  </div>
                  <a class="info" nclick="_hmt.push(['_trackEvent', '版块', 'click', '进入商店'])" href="https://store.dunizb.com" target="_blank">
                    <div class="buy_link">
                      <a class="iconfont icon-webclicksettings" href="https://store.dunizb.com" target="_blank">￥19，去看看</a>
                    </div>
                    <h3>编写可维护的JavaScript</h3>
                    <span>《JavaScript高级程序设计》作者Nicholas Zakas全新力作</span>
                  </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- <div class="row">
        <div class="row_box row_report">
          <div class="header">
            <div class="title"><i class="iconfont icon-baobiaobiaoweiguanli"></i> 2018年度报告</div>
            <div class="title_info">各种社交数据</div>
          </div>
          <div class="content">
            <img src="https://ws1.sinaimg.cn/large/683aa04fly1fyulasl9wej20ku11s0zo.jpg" />
            <img src="https://ws1.sinaimg.cn/large/683aa04fly1fyy7zohoc9j21nf33xdvc.jpg" />
            <img src="https://ws1.sinaimg.cn/large/683aa04fly1fyy7sl730yj20jt0z8h3o.jpg" />
            <img src="https://ws1.sinaimg.cn/large/683aa04fly1fz5tvchqacj20u01atwns.jpg" />
            <img src="https://ws1.sinaimg.cn/large/683aa04fly1fz9hz6hxj8j20u01bady5.jpg" />
            <img src="https://ws1.sinaimg.cn/large/683aa04fly1fzc4bsaspnj20yg1dfq6o.jpg" />
            <img src="https://ws1.sinaimg.cn/large/683aa04fly1fz5vbfma9jj20u01bctdt.jpg" />
            <img src="https://ws1.sinaimg.cn/large/683aa04fly1fz9hge6khrj20k00vgwo2.jpg" />
            <img src="https://ws1.sinaimg.cn/large/683aa04fly1fzahsr2c0yj20h00oa779.jpg" />
            <img src="https://ws1.sinaimg.cn/large/683aa04fly1fz8q60cdfcj20u01af1kx.jpg" />
          </div>
        </div>
      </div> -->
      <div class="row">
        <div class="row_box row_sms">
          <div class="header">
            <div class="title"><i class="iconfont icon-add_friends"></i> 我也在这里</div>
            <div class="title_info">经常也在这里出没，各有不同</div>
          </div>
          <div class="content">
            <ul class="siteicon">
              <li title="Github"><a class="github iconfont icon-icongithub" href="https://github.com/duizb" target="_blank"></a></li>
              <li title="segmentfault"><a class="sf iconfont icon-iconsf-copy" href="https://segmentfault.com/u/dunizb" target="_blank"></a></li>
              <li title="掘金"><a class="juejin" href="https://juejin.im/user/5794cec91532bc0060caf52b" target="_blank"></a></li>
              <li title="简书"><a class="jianshu iconfont icon-jianshu" href="https://www.jianshu.com/u/737d8047278d" target="_blank"></a></li>
              <li title="微博"><a class="weibo" href="http://www.weibo.com/duni/" target="_blank"></a></li>
              <li title="Coding"><a class="coding" href="https://coding.net/u/dunizb" target="_blank"></a></li>
              <li title="豆瓣"><a class="douban" href="https://www.douban.com/people/dunish/" target="_blank"></a></li>
              <li title="网易摄影"><a class="wangyipp" href="http://duni.pp.163.com/" target="_blank"></a></li>
              <!-- <li title="电子邮件"><a class="email iconfont icon-about-mail" href="mailto:zb@dunizb.vip" target="_blank"></a></li> -->
            </ul>
            <ul class="qrcode">
              <li>
                <div class="name">Dunizb</div>
                <div class="desc">微信号，和我发生纯纯的友谊</div>
                <img src="//raw.githubusercontent.com/dunizb/cloudimg/master/mmdo4.jpg" />
              </li>
              <li>
                <div class="name">做工程师不做码农</div>
                <div class="desc">公众号，及时接收最新文章</div>
                <img src="//raw.githubusercontent.com/dunizb/cloudimg/master/wl0ty.jpg" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 我的足迹 开始 -->
      <div class="row" id="my-zuji">
        <div class="row_box row_maps">
          <div class="header">
            <div class="title"><i class="iconfont icon-09"></i> 我的足迹</div>
            <div class="title_info">读书与旅行，缺一不可，看看世界，定位自己</div>
          </div>
          <div class="content">
            <tab-switch-btn :actived="isActivedFx" @click.native="swicthMapType('fx')">足迹路线</tab-switch-btn>
            <tab-switch-btn :actived="isActivedDd" @click.native="swicthMapType('dd')">踏足地点</tab-switch-btn>
            <tab-switch-btn :actived="isActivedSf" @click.native="swicthMapType('sf')">踏足省份</tab-switch-btn>
            <div class="didian"  v-show="showDidian">
              <div id="my-maps"></div>
            </div>
            <div class="feixian" v-show="showFeixian">
              <div id="linemap" class="linemap-wrapper"> </div>
            </div>
            <div class="row_btn">
              <a @click="_hmt.push(['_trackEvent', '版块', 'click', '进入我的足迹'])" href="https://dunizb.github.io/footprint" target="_blank">
                <i class="iconfont icon-webclicksettings"></i> 查看详细足迹
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 我的足迹 结束 -->
    </div>

    <footer>
      <div class="service">
        <a class="coding" title="由Coding.net提供静态Pages" href="https://pages.coding.me" target="_blank">
          <img src="https://dn-coding-net-production-static.qbox.me/static/f7272a0b7cd340571725c6734c6bdd6f.png"/>
        </a>
        <a class="upyun" title="SM.SM供图床服务" href="https://sm.ms//">
          <img src="//i.loli.net/2019/07/28/5d3da709e31a539122.png" />
        </a>
        <a class="hexo iconfont icon-hexo" title="" href="https://hexo.io/"></a>
      </div>
      <div class="pc">
        <p>Copyright © <a href="/">dunizb.com</a>. All Rights Reserevd. 2014-2018   ShangHai·China   读你·这世间唯有梦想和好姑娘不可辜负！</p>
        <p>Powerd by <a href="https://hexo.io/" target="_blank">Hexo</a>  Themes Source Code: <a href="https://github.com/MOxFIVE/hexo-theme-yelee" target="_blank">Yelee</a>  The Page Design by <a href="https://dunizb.com/" target="_blank">Dunizb(张兵)</a></p>
        <p>Source Code: blog-newpage(Github: https://github.com/dunizb/blog-newpage)</p>
      </div>
      <div class="m">
        <p>Powerd by <a href="https://hexo.io/" target="_blank">Hexo</a> & Design by <a href="https://dunizb.com/" target="_blank">Dunizb(张兵)</a></p>
      </div>
    </footer>
  </div>
</template>

<script>
import tabSwitchBtn from '@components/tabSwitchBtn'
export default {
  data () {
    return {
      showImgLoading: true,
      showDidian: false,
      showFeixian: true,
      isActivedFx: true,
      isActivedDd: false,
      isActivedSf: false,
      className: 'play_stop'
    }
  },
  mounted () {
    // 获取Bing.com每日壁纸
    this.getEveryDayBgimg()
    this.$nextTick(() => {
      this.showImgLoading = false
    })
    setTimeout(() => {
      this.className = 'play_on'
    }, 2000)
  },
  methods: {
    play () {
      const bgm = document.getElementById('music-bgm')
      if (bgm.paused) {
        bgm.play()
        this.className = 'play_on'
      } else {
        bgm.pause()
        this.className = 'play_stop'
      }
    },
    swicthMapType (type) {
      if (type === 'dd') {
        this.showDidian = true
        this.showFeixian = false
        this.isActivedFx = false
        this.isActivedDd = true
      }
      if (type === 'fx') {
        this.showDidian = false
        this.showFeixian = true
        this.isActivedFx = true
        this.isActivedDd = false
      }
      if (type === 'sf') {
        alert('建设中...')
      }
    },
    getEveryDayBgimg () {
      console.log('获取Bing.com每日壁纸')
      const imgurl = this.$refs['bgimg'].src
      this.$refs['header'].style.backgroundImage = 'url(' + imgurl + ')'
    }
  },
  components: {
    tabSwitchBtn
  }
}
</script>

<style lang="scss">
  @import "../../assets/scss/main.scss";
  #linemap {
    border-bottom: 2px solid $mian-gray;
    width: 100%;
    height: 550px;
  }
</style>
