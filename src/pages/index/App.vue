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
        <li><a href="https://blog.dunizb.com/categories/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/">Web前端</a></li>
        <li><a href="https://blog.dunizb.com/categories/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/JavaScript/">JavaScript</a></li>
        <li><a href="https://blog.dunizb.com/categories/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/HTML-CSS/">HTML&HTML</a></li>
        <li><a href="https://blog.dunizb.com/categories/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%BC%80%E5%8F%91/Java/">Java</a></li>
        <li><a href="https://blog.dunizb.com/tags/github/">Github</a></li>
        <li><a href="https://blog.dunizb.com/tags/Vue-js/">Vue.js</a></li>
        <li><a href="https://blog.dunizb.com/categories/%E9%9A%8F%E7%AC%94%E6%89%AF%E8%B0%88/">随笔扯谈</a></li>
        <li><a href="https://blog.dunizb.com/categories/%E5%92%8C%E6%88%91%E4%B8%80%E8%B5%B7%E8%AF%BB%E4%B9%A6/">和我一起读书</a></li>
        <li><a href="https://blog.dunizb.com/categories/%E7%94%9F%E6%B4%BB/">生活</a></li>
        <li><a href="https://blog.dunizb.com/categories/%E5%B9%B4%E7%BB%88%E7%9B%98%E7%82%B9/">年终盘点</a></li>
        <li><a href="https://blog.dunizb.com/tags/%E6%80%9D%E8%80%83%E6%84%9F%E6%82%9F/">思考感悟</a></li>
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
              <img src="https://ws1.sinaimg.cn/large/683aa04fly1fyukcaxnl9j20ut0f80vu.jpg" />
              <a class="chenghao" onclick="_hmt.push(['_trackEvent', '专栏', 'click', '极客时间《10x 程序员工作法》'])" href="https://time.geekbang.org/column/intro/148" target="_blank"><i class="iconfont icon-webclicksettings"></i> 极客时间《10x 程序员工作法》</a>
            </div>
            <div class="content_img_box">
              <img src="//dunizb.b0.upaiyun.com/iPic/wzz99.png" />
              <a class="xiangshuai" onclick="_hmt.push(['_trackEvent', '专栏', 'click', '查看香帅《北大金融学课》学习笔记'])" href="//mubu.com/doc/HQC8PLyUg" target="_blank"><i class="iconfont icon-webclicksettings"></i> 得到《香帅·北大金融学课》学习笔记</a>
            </div>
            <div class="content_img_box">
              <img src="//dunizb.b0.upaiyun.com/iPic/fp2wc.png" style="height: 176px;" />
              <a class="lixiaolai" onclick="_hmt.push(['_trackEvent', '专栏', 'click', '网易精品课《杨亮讲单词·方法篇》'])" href="//ke.youdao.com/course/detail/9763" target="_blank"><i class="iconfont icon-webclicksettings"></i> 网易精品课《杨亮讲单词·方法篇》</a>
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
                  <img src="//img12.360buyimg.com/n0/g14/M04/10/19/rBEhV1I38YQIAAAAAAJ5G7BZzBoAADR6wCEHAcAAnkz594.jpg"/>
                  <a class="iconfont icon-buy1" href="https://store.dunizb.com" target="_blank"><strong>￥19，去看看</strong></a>
                </div>
                <a class="info" nclick="_hmt.push(['_trackEvent', '版块', 'click', '进入商店'])" href="https://store.dunizb.com" target="_blank">
                  <div class="buy_link">
                    <a class="iconfont icon-webclicksettings" href="https://store.dunizb.com" target="_blank">￥19，去看看</a>
                  </div>
                  <h3>大型网站技术架构 核心原理与案例分析</h3>
                  <span>大型网站技术开山之作，业内好评爆棚，畅销经典！</span>
                </a>
              </div>

                <div class="item">
                  <div :class="{'item_img': true, 'loading': showImgLoading}">
                    <img src="//img14.360buyimg.com/n0/jfs/t1936/332/2229081547/239041/9cfc342f/56ce90caN4f2d1bbc.jpg" />
                    <a class="iconfont icon-buy1" onclick="_hmt.push(['_trackEvent', '版块', 'click', '进入商店'])" href="https://store.dunizb.com" target="_blank"><strong>￥19，去看看</strong></a>
                  </div>
                  <a class="info" nclick="_hmt.push(['_trackEvent', '版块', 'click', '进入商店'])" href="https://store.dunizb.com" target="_blank">
                    <div class="buy_link">
                      <a class="iconfont icon-webclicksettings" href="https://store.dunizb.com" target="_blank">￥19，去看看</a>
                    </div>
                    <h3>理财最重要的事</h3>
                    <span>轻松发现自己行为中的误区，找到理财投资的新思路</span>
                  </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="row">
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
            <img src="https://ws1.sinaimg.cn/large/683aa04fly1fz5vbfma9jj20u01bctdt.jpg" />
            <img src="https://ws1.sinaimg.cn/large/683aa04fly1fz9hge6khrj20k00vgwo2.jpg" />
            <img src="https://ws1.sinaimg.cn/large/683aa04fly1fz8q60cdfcj20u01af1kx.jpg" />
          </div>
        </div>
      </div>
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
                <img src="//dunizb.b0.upaiyun.com/iPic/mmdo4.jpg" />
              </li>
              <li>
                <div class="name">做工程师不做码农</div>
                <div class="desc">公众号，及时接收最新文章</div>
                <img src="//dunizb.b0.upaiyun.com/iPic/wl0ty.jpg" />
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
        <a class="upyun" title="又拍云存储提供图床服务" href="https://www.upyun.com/">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTEiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxMTEgMzgiPgogIDxnIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xKSI+CiAgICA8cGF0aCBkPSJNMzAuOCw0LjEgTDMwLjgsNC4xIEwzMC44LDQuMSBMMzAuOCw0LjEgTDMwLjgsNC4xIEMzMC4xLDMuNiAyOS40LDMuMSAyOC42LDIuNyBDMjguMSwyLjQgMjcuNCwyLjUgMjcsMyBMMjIuMyw5LjIgTDIyLDkuNiBDMjEuNSwxMC4zIDIwLjcsMTAuNiAxOS45LDEwLjYgTDE5LDEwLjYgQzE2LjcsMTAuNyAxNC40LDExLjkgMTIuOSwxMy45IEMxMS43LDE1LjUgMTEuMSwxNy40IDExLjIsMTkuMyBDMTEuMiwxOS42IDExLjQsMTkuOSAxMS43LDIwLjEgQzEyLjMsMjAuNCAxMi44LDIxIDEzLDIxLjcgQzEzLjIsMjIuOCAxMi41LDIzLjggMTEuNSwyNC4xIEMxMC4zLDI0LjUgOSwyMy43IDguNywyMi41IEM4LjUsMjEuOCA4LjcsMjEuMiA5LjEsMjAuNyBDOS4zLDIwLjQgOS40LDIwLjEgOS40LDE5LjcgQzkuMiwxNy4zIDkuOCwxNC44IDExLjQsMTIuNyBDMTMuNCwxMC4xIDE2LjQsOC43IDE5LjUsOC43IEMyMC4xLDguNyAyMC42LDguNCAyMSw3LjkgTDI1LjMsMi4yIEMyNS42LDEuOCAyNS40LDEuMSAyNC45LDEgQzE3LjcsLTEgOS43LDEuNCA0LjgsNy43IEMtMS40LDE1LjggMC4xLDI3LjUgOC4yLDMzLjggQzksMzQuNCA5LjcsMzQuOSAxMC42LDM1LjQgQzExLjEsMzUuNyAxMS44LDM1LjYgMTIuMiwzNS4xIEwxNi45LDI4LjkgTDE3LjIsMjguNSBDMTcuNywyNy44IDE4LjUsMjcuNSAxOS4zLDI3LjUgTDIwLjIsMjcuNSBDMjIuNSwyNy40IDI0LjgsMjYuMiAyNi4zLDI0LjIgQzI3LjUsMjIuNiAyOC4xLDIwLjcgMjgsMTguOCBDMjgsMTguNSAyNy44LDE4LjIgMjcuNSwxOCBDMjYuOSwxNy43IDI2LjQsMTcuMSAyNi4yLDE2LjQgQzI2LDE1LjMgMjYuNywxNC4zIDI3LjcsMTQgQzI4LjksMTMuNiAzMC4yLDE0LjQgMzAuNSwxNS42IEMzMC43LDE2LjMgMzAuNSwxNi45IDMwLjEsMTcuNCBDMjkuOSwxNy43IDI5LjgsMTggMjkuOCwxOC40IEMzMCwyMC44IDI5LjQsMjMuMyAyNy44LDI1LjQgQzI1LjgsMjggMjIuOCwyOS40IDE5LjcsMjkuNCBDMTkuMSwyOS40IDE4LjYsMjkuNyAxOC4yLDMwLjIgTDE0LDM1LjYgQzEzLjcsMzYgMTMuOSwzNi43IDE0LjQsMzYuOCBDMjEuNiwzOC45IDI5LjcsMzYuNSAzNC41LDMwLjEgQzQwLjcsMjIgMzksMTAuMyAzMC44LDQuMSBaIi8+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MyA4KSI+CiAgICAgIDxwYXRoIGQ9Ik0xOC42LDIgTDE4LjYsMS42IEMxOC42LDEuMiAxOC4zLDEgMTgsMSBMMy41LDEgQzMuMiwxIDIuOSwxLjMgMi45LDEuNiBMMi45LDIuNSBDMi45LDIuOCAzLjIsMy4xIDMuNSwzLjEgTDE1LjgsMy4xIEMxNi4yLDMuMSAxNi40LDMuNCAxNi40LDMuOCBDMTYuMSw2LjEgMTUsMTAuNCAxMS42LDE0LjUgQzExLjQsMTQuOCAxMC45LDE0LjggMTAuNywxNC41IEM3LjksMTAuOSA3LDcuMiA2LjgsNS44IEM2LjcsNS41IDYuNSw1LjMgNi4yLDUuMyBMNS43LDUuMyBMNS4zLDUuMyBDNSw1LjMgNC43LDUuNiA0LjgsNiBDNS4xLDcuNiA2LjEsMTEuOSA5LjUsMTYgQzkuNywxNi4yIDkuNywxNi42IDkuNSwxNi44IEM1LjUsMjAuNSAxLjgsMjEuMyAwLjUsMjEuNSBDMC4yLDIxLjUgNy4xMDU0MjczNmUtMTUsMjEuOCA3LjEwNTQyNzM2ZS0xNSwyMi4xIEw3LjEwNTQyNzM2ZS0xNSwyMyBDNy4xMDU0MjczNmUtMTUsMjMuMyAwLjMsMjMuNiAwLjYsMjMuNiBDMi4xLDIzLjQgNi4zLDIyLjUgMTAuOCwxOC4zIEMxMSwxOC4xIDExLjQsMTguMSAxMS42LDE4LjMgQzEzLjgsMjAuMyAxNi42LDIyLjMgMjAuNCwyMy41IEMyMC43LDIzLjYgMjEsMjMuNCAyMS4xLDIzLjEgTDIxLjQsMjIuMyBDMjEuNSwyMiAyMS4zLDIxLjcgMjEsMjEuNiBDMTcuNSwyMC41IDE1LDE4LjcgMTMsMTYuOSBDMTIuOCwxNi43IDEyLjgsMTYuMyAxMywxNi4xIEMxOC41LDkuNCAxOC42LDIuMyAxOC42LDIgWiIvPgogICAgICA8cGF0aCBkPSJNMjguNiwwLjEgTDI3LjcsMC4xIEMyNy40LDAuMSAyNy4xLDAuNCAyNy4xLDAuNyBMMjcuMSwzLjggQzI3LjEsNC4xIDI2LjgsNC40IDI2LjUsNC40IEwyNC40LDQuNCBDMjQuMSw0LjQgMjMuOCw0LjcgMjMuOCw1IEwyMy44LDUuOSBDMjMuOCw2LjIgMjQuMSw2LjUgMjQuNCw2LjUgTDI2LjUsNi41IEMyNi44LDYuNSAyNy4xLDYuOCAyNy4xLDcuMSBMMjcuMSwxMS42IEMyNy4xLDExLjkgMjYuOCwxMi4yIDI2LjUsMTIuMiBMMjQuNCwxMi4yIEMyNC4xLDEyLjIgMjMuOCwxMi41IDIzLjgsMTIuOCBMMjMuOCwxMy43IEMyMy44LDE0IDI0LjEsMTQuMyAyNC40LDE0LjMgTDI2LjUsMTQuMyBDMjYuOCwxNC4zIDI3LjEsMTQuNiAyNy4xLDE0LjkgTDI3LjEsMTkuMiBDMjcuMSwyMC4xIDI2LjcsMjEuNiAyNC40LDIxLjggQzI0LjEsMjEuOCAyMy45LDIyLjEgMjMuOSwyMi40IEwyMy45LDIzIEMyMy45LDIzLjMgMjQuMiwyMy42IDI0LjUsMjMuNiBDMjYuOCwyMy40IDI5LjIsMjIuMSAyOS4yLDE4LjkgTDI5LjIsMTQuNiBDMjkuMiwxNC4zIDI5LjUsMTQgMjkuOCwxNCBMMzEuNywxNCBDMzIsMTQgMzIuMywxMy43IDMyLjMsMTMuNCBMMzIuMywxMi41IEMzMi4zLDEyLjIgMzIsMTEuOSAzMS43LDExLjkgTDI5LjgsMTEuOSBDMjkuNSwxMS45IDI5LjIsMTEuNiAyOS4yLDExLjMgTDI5LjIsNi44IEMyOS4yLDYuNSAyOS41LDYuMiAyOS44LDYuMiBMMzEuNyw2LjIgQzMyLDYuMiAzMi4zLDUuOSAzMi4zLDUuNiBMMzIuMyw0LjcgQzMyLjMsNC40IDMyLDQuMSAzMS43LDQuMSBMMjkuOCw0LjEgQzI5LjUsNC4xIDI5LjIsMy44IDI5LjIsMy41IEwyOS4yLDAuNiBDMjkuMiwwLjMgMjksMC4xIDI4LjYsMC4xIFoiLz4KICAgICAgPHBhdGggZD0iTTMzLjIsMjIuOCBDMzMuMiwyMy4xIDMzLjUsMjMuNCAzMy44LDIzLjQgTDQwLjMsMjMuNCBDNDMuMiwyMy40IDQ1LjUsMjEuMiA0NS41LDE4LjQgTDQ1LjUsNC43IEM0NS41LDQuNCA0NS4yLDQuMSA0NC45LDQuMSBMMzMuOCw0LjEgQzMzLjUsNC4xIDMzLjIsNC40IDMzLjIsNC43IEwzMy4yLDIyLjggWiBNNDAuNCwyMS40IEwzNS45LDIxLjQgQzM1LjYsMjEuNCAzNS4zLDIxLjEgMzUuMywyMC44IEwzNS4zLDE0LjYgQzM1LjMsMTQuMyAzNS42LDE0IDM1LjksMTQgTDQzLDE0IEM0My4zLDE0IDQzLjYsMTQuMyA0My42LDE0LjYgTDQzLjYsMTguNCBDNDMuNiwyMC4xIDQyLjEsMjEuNCA0MC40LDIxLjQgWiBNNDMuNiw2LjcgTDQzLjYsMTEuNCBDNDMuNiwxMS43IDQzLjMsMTIgNDMsMTIgTDM1LjksMTIgQzM1LjYsMTIgMzUuMywxMS43IDM1LjMsMTEuNCBMMzUuMyw2LjcgQzM1LjMsNi40IDM1LjYsNi4xIDM1LjksNi4xIEw0Myw2LjEgQzQzLjMsNi4yIDQzLjYsNi40IDQzLjYsNi43IFoiLz4KICAgICAgPHBhdGggZD0iTTQyLjEsMCBMMzYuMywwIEMzNiwwIDM1LjcsMC4zIDM1LjcsMC42IEwzNS43LDEuNSBDMzUuNywxLjggMzYsMi4xIDM2LjMsMi4xIEw0Mi4xLDIuMSBDNDIuNCwyLjEgNDIuNywxLjggNDIuNywxLjUgTDQyLjcsMC42IEM0Mi43LDAuMyA0Mi41LDAgNDIuMSwwIFoiLz4KICAgICAgPHBhdGggZD0iTTY0LjIsMC45IEw1Mi4yLDAuOSBDNTEuOSwwLjkgNTEuNiwxLjIgNTEuNiwxLjUgTDUxLjYsMi40IEM1MS42LDIuNyA1MS45LDMgNTIuMiwzIEw2NC4yLDMgQzY0LjUsMyA2NC44LDIuNyA2NC44LDIuNCBMNjQuOCwxLjUgQzY0LjgsMS4yIDY0LjUsMC45IDY0LjIsMC45IFoiLz4KICAgICAgPHBhdGggZD0iTTU5LjEsMTEuMiBMNjcuNSwxMS4yIEM2Ny44LDExLjIgNjguMSwxMC45IDY4LjEsMTAuNiBMNjguMSw5LjcgQzY4LjEsOS40IDY3LjgsOS4xIDY3LjUsOS4xIEw0OC45LDkuMSBDNDguNiw5LjEgNDguMyw5LjQgNDguMyw5LjcgTDQ4LjMsMTAuNiBDNDguMywxMC45IDQ4LjYsMTEuMiA0OC45LDExLjIgTDU0LjYsMTEuMiBDNTUuMSwxMS4yIDU1LjMsMTEuNyA1NS4xLDEyLjEgTDUxLjMsMTkgQzUxLjIsMTkuMiA1MS4xLDE5LjMgNTEuMSwxOS41IEM1MC44LDIwLjQgNTAuOSwyMS40IDUxLjUsMjIuMiBDNTIuMSwyMyA1My4xLDIzLjYgNTQuMiwyMy42IEw2NC42LDIzLjYgQzY1LjEsMjMuNiA2NS41LDIzLjQgNjUuNywyMyBDNjUuOSwyMi42IDY2LDIyLjEgNjUuOCwyMS43IEw2My40LDE3IEM2My4zLDE2LjcgNjIuOSwxNi42IDYyLjYsMTYuOCBMNjEuOCwxNy4yIEM2MS41LDE3LjMgNjEuNCwxNy43IDYxLjYsMTggTDYzLDIwLjggQzYzLjIsMjEuMiA2Mi45LDIxLjYgNjIuNSwyMS42IEw1NC4yLDIxLjYgQzUzLjgsMjEuNiA1My40LDIxLjQgNTMuMiwyMS4xIEM1My4xLDIxIDUyLjksMjAuNyA1MywyMC4zIEM1MywyMC4yIDUzLDIwLjIgNTMuMSwyMC4xIEw1Ny43LDEyIEM1OCwxMS41IDU4LjUsMTEuMiA1OS4xLDExLjIgWiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==" />
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
