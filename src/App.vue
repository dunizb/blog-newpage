<template>
  <div ref="page" class="page">
    <img ref="bgimg" src="//api.dujin.org/bing/1920.php" style="display:none;" />
    <header ref="header">
      <hgroup>
        <div class="avatar">
          <img src="./assets/logo.gif" id="play_bgm_avatar" />
        </div>
        <div class="sitename">
          <h1>
            <span>Dunizb</span>
            <!-- <img class="hat" src="./assets/hat.svg" /> -->
          </h1>
          <h2>做工程师不做码农、全栈开发工程师、持续学习者</h2>
        </div>
      </hgroup>
    </header>

    <!-- 导航菜单 开始 -->
    <nav>
      <ul class="main-nav">
        <li title="博客">
          <a
            class="blog"
            onclick="_hmt.push(['_trackEvent', 'nav', 'click', '博客'])"
            href="https://blog.zhangbing.site/"
          >
            <i class="iconfont icon-article1"></i> 博客
          </a>
        </li>
        <li title="Vue3备忘单">
          <a
            class="store"
            onclick="_hmt.push(['_trackEvent', 'nav', 'click', 'Vue3备忘单'])"
            href="/vue3/"
          >
            <svg
              style="vertical-align: middle;"
              t="1572367313845"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6427"
              width="16"
              height="16"
            >
              <path
                d="M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"
                fill="#41B883"
                p-id="6428"
              />
              <path
                d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"
                fill="#34495E"
                p-id="6429"
              />
            </svg> Vue3
          </a>
        </li>
        <li title="我的小铺">
          <a
            class="store"
            onclick="_hmt.push(['_trackEvent', 'nav', 'click', '商店'])"
            href="https://store.zhangbing.site"
          >
            <i class="iconfont icon-ShoppingMall"></i> 小铺
          </a>
        </li>
        <li title="小码">
          <a
            class="demo"
            onclick="_hmt.push(['_trackEvent', 'nav', 'click', 'DEMO'])"
            href="https://coding.zhangbing.site"
          >
            <i class="iconfont icon-Code"></i> 小码
          </a>
        </li>
        <li title="看世界">
          <a
            class="map"
            onclick="_hmt.push(['_trackEvent', 'nav', 'click', '看世界'])"
            href="#my-zuji"
          >
            <i class="iconfont icon-09"></i> 看世界
          </a>
        </li>
        <!-- <li title="我拍的照片"><a onclick="_hmt.push(['_trackEvent', 'nav', 'click', '照片'])" class="photo" href="https://photo.zhangbing.site/" target="_blank"><i class="iconfont icon-photoalbum"></i> 摄影</a></li> -->
        <li title="读书记录">
          <a
            class="read"
            onclick="_hmt.push(['_trackEvent', 'nav', 'click', '读书'])"
            href="https://book.douban.com/people/dunish/collect"
            target="_blank"
          >
            <i class="iconfont icon-book1"></i> 读书
          </a>
        </li>
        <li title="订阅">
          <a class="code" onclick="_hmt.push(['_trackEvent', 'nav', 'click', 'Code'])" href="#rss">
            <i class="iconfont icon-RSS"></i> 订阅
          </a>
        </li>
        <li title="关于">
          <a
            class="about"
            onclick="_hmt.push(['_trackEvent', 'nav', 'click', '关于我'])"
            href="https://blog.zhangbing.site/about/"
          >
            <i class="iconfont icon-about-s"></i> 关于
          </a>
        </li>
      </ul>
      <ul class="sub-nav">
        <!-- <li title="去博客首页"><a href="https://blog.zhangbing.site" class="main"><i class="iconfont icon-go"></i></a></li> -->
        <li>
          <a href="https://blog.zhangbing.site/categories/%E6%8A%80%E6%9C%AF/">技术</a>
        </li>
        <li>
          <a href="https://blog.zhangbing.site/tags/%E5%89%8D%E7%AB%AF/">前端</a>
        </li>
        <li>
          <a
            href="https://blog.zhangbing.site/categories/%E8%AF%BB%E4%B9%A6%E4%B8%8E%E5%AD%A6%E4%B9%A0/"
          >读书与学习</a>
        </li>
        <li>
          <a href="https://blog.zhangbing.site/categories/%E5%B7%A5%E5%85%B7/">工具</a>
        </li>
        <li>
          <a href="https://blog.zhangbing.site/categories/%E5%85%B6%E5%AE%83/">其它</a>
        </li>
      </ul>
    </nav>
    <!-- 导航菜单 结束 -->

    <div class="row-container">
      <div class="row">
        <!-- 我订阅的专栏 -->
        <div class="row_box row_zhuanlan">
          <div class="header">
            <div class="title">
              <i class="iconfont icon-Rss"></i> 我的订阅推荐
            </div>
            <div class="title_info">订阅的一些很棒的付费专栏，推荐你也看看</div>
          </div>
          <div class="content">
            <div class="content_img_box">
              <img src="https://i.loli.net/2019/12/11/cUMF7l35iORhenq.jpg" style="height: 185px;" />
              <a
                class="chenghao"
                onclick="_hmt.push(['_trackEvent', '专栏', 'click', '极客时间《白话法律42讲》'])"
                href="https://time.geekbang.org/column/intro/132"
                target="_blank"
              >
                <i class="iconfont icon-webclicksettings"></i> 极客时间《白话法律42讲》
              </a>
            </div>
            <div class="content_img_box">
              <img src="//i.loli.net/2019/07/28/5d3d93b71d2da94904.png" />
              <a
                class="xiangshuai"
                onclick="_hmt.push(['_trackEvent', '专栏', 'click', '《吴军的谷歌方法论》'])"
                href="javascript:;"
                target="_blank"
              >
                <i class="iconfont icon-webclicksettings"></i> 得到《吴军的谷歌方法论》
              </a>
            </div>
            <div class="content_img_box">
              <img src="https://i.loli.net/2020/03/15/nbMrts12OPaL68D.png" />
              <a
                class="lixiaolai"
                onclick="_hmt.push(['_trackEvent', '专栏', 'click', '得到《香帅的北大金融学课》'])"
                href="javascript:;"
                target="_blank"
              >
                <i class="iconfont icon-webclicksettings"></i> 得到《香帅的北大金融学课》
              </a>
            </div>
            <div class="content_img_box">
              <img src="https://i.loli.net/2020/03/15/Nn4eHsULJ58ovIT.jpg" />
              <a
                class="lixiaolai"
                onclick="_hmt.push(['_trackEvent', '专栏', 'click', '得到《梁宁·产品思维30将》'])"
                href="javascript:;"
                target="_blank"
              >
                <i class="iconfont icon-webclicksettings"></i> 得到《梁宁·产品思维30将》
              </a>
            </div>
          </div>
        </div>
        <!-- 我的书店 -->
        <div class="row_box row_store">
          <div class="header">
            <div class="title">
              <i class="iconfont icon-ShoppingMall"></i> 我的小铺
            </div>
            <div class="title_info">出售个人闲置书籍，价格实惠，正品包邮，欢迎来看看</div>
          </div>
          <div class="content">
            <div class="row_store_item">
              <div class="item">
                <div class="item_img">
                  <img
                    src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/56336/26/12823/78599/5d9be26dEb29260d7/a79533e4d99d0e88.jpg"
                    style="height: 418px;"
                  />
                  <a class="iconfont icon-buy1" href="https://store.zhangbing.site" target="_blank">
                    <strong>￥29，去看看</strong>
                  </a>
                </div>
                <a
                  class="info"
                  nclick="_hmt.push(['_trackEvent', '版块', 'click', '进入商店'])"
                  href="https://store.zhangbing.site"
                  target="_blank"
                >
                  <div class="buy_link">
                    <a
                      class="iconfont icon-webclicksettings"
                      href="https://store.zhangbing.site"
                      target="_blank"
                    >￥29，去看看</a>
                  </div>
                  <h3>CSS选择器世界</h3>
                  <span>《CSS世界》姊妹篇，张鑫旭大神最新作品</span>
                </a>
              </div>

              <div class="item">
                <div :class="{'item_img': true, 'loading': showImgLoading}">
                  <img
                    src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/67766/39/7605/174367/5d5b5c9dEa0ebca42/2d7b0948d914d82f.jpg"
                    style="width: 441px;"
                  />
                  <a
                    class="iconfont icon-buy1"
                    onclick="_hmt.push(['_trackEvent', '版块', 'click', '进入商店'])"
                    href="https://store.zhangbing.site"
                    target="_blank"
                  >
                    <strong>￥39，去看看</strong>
                  </a>
                </div>
                <a
                  class="info"
                  nclick="_hmt.push(['_trackEvent', '版块', 'click', '进入商店'])"
                  href="https://store.zhangbing.site"
                  target="_blank"
                >
                  <div class="buy_link">
                    <a
                      class="iconfont icon-webclicksettings"
                      href="https://store.zhangbing.site"
                      target="_blank"
                    >￥39，去看看</a>
                  </div>
                  <h3>了不起的JavaScript工程师</h3>
                  <span>从前端到全端高级进阶</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row_box row_likeassert">
          <div class="header">
            <div class="title">
              <i class="iconfont icon-star"></i> 收藏资源
            </div>
            <div class="title_info">收藏的一些非常棒的互联网资源</div>
          </div>
          <div class="content">
            <div class="content-mode">
              <div class="ul-title">💉编程学习网站</div>
              <ul class="siteicon likeassert-list">
                <li>
                  <a href="https://www.imooc.com/" target="_blank">
                    <img
                      target="_blank"
                      title="慕课网"
                      alt="慕课网"
                      style="width: 104px;"
                      src="https://m.imooc.com/static/wap/static/common/img/logo2.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://time.geekbang.org/" target="_blank">
                    <img
                      target="_blank"
                      title="极客时间"
                      alt="极客时间"
                      style="width: 150px;height: 36px;"
                      src="data:image/png;base64,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"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://segmentfault.com/lives" target="_blank">
                    <img
                      target="_blank"
                      title="思否编程"
                      alt="思否编程"
                      style="width:140px"
                      src="https://ftp.bmp.ovh/imgs/2019/11/75e029021c8108fe.png"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="http://jspang.com/"
                    target="_blank"
                    style="font-size: 1.3em;font-weight: 600;color: #1e90ff;"
                  >技术胖</a>
                </li>
                <li>
                  <a href="https://study.163.com" target="_blank">
                    <img
                      target="_blank"
                      title="网易云课堂"
                      alt="网易云课堂"
                      style="width: 116px;height: 36px;"
                      src="https://edu-image.nosdn.127.net/51373455cc3e4a96a802e89387cb868c.png?imageView&quality=100"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://ke.qq.com/" target="_blank">
                    <img
                      target="_blank"
                      title="腾讯课堂"
                      alt="腾讯课堂"
                      style="width: 137px;height: 37px;"
                      src="https://8.url.cn/edu/edu_modules/edu-ui/img/bg/logo-3x.46efb146.png#unsprite"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://edu.csdn.net/" target="_blank">
                    <img
                      target="_blank"
                      title="CSDN学院"
                      alt="CSDN学院"
                      style="height: 33px;width: 94px;"
                      src="https://ftp.bmp.ovh/imgs/2019/11/671d4a1c07fb8d0c.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://gitbook.cn/" target="_blank">
                    <img
                      target="_blank"
                      title="GitChat"
                      alt="GitChat"
                      style="width:40px"
                      src="https://images.gitbook.cn/FpdQSGLQ9JWwdHIQHK7Cp4m0LEXj"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://juejin.im/books" target="_blank">
                    <img
                      target="_blank"
                      title="掘金小册"
                      alt="掘金小册"
                      src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="http://www.jikexueyuan.com/" target="_blank">
                    <img
                      target="_blank"
                      title="极客学院"
                      alt="极客学院"
                      src="https://www.jiker.com/_nuxt/img/f43b9a4.svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://leetcode-cn.com/" target="_blank">
                    <img
                      target="_blank"
                      title="力扣"
                      alt="力扣"
                      style="width:100px"
                      src="https://static.leetcode-cn.com/cn-mono-assets/production/head/17df28f35bfb3292fe5bdd94b81fa456.svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="http://www.itdks.com/" target="_blank">
                    <img
                      target="_blank"
                      title="IT大咖说"
                      alt="IT大咖说"
                      style="width:120px"
                      src="http://www.itdks.com/Public/Home/img/customer/logo_index.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://edu.51cto.com" target="_blank">
                    <img
                      target="_blank"
                      title="51CTO学院"
                      alt="51CTO学院"
                      style="width:160px"
                      src="https://ftp.bmp.ovh/imgs/2019/11/79a3050c4213f37e.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.w3cschool.cn" target="_blank">
                    <img
                      target="_blank"
                      title="w3cschool"
                      alt="w3cschool"
                      style="width:160px"
                      src="https://www.w3cschool.cn/statics/img/logo/indexlogo@2x.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.shiyanlou.com/" target="_blank">
                    <img
                      target="_blank"
                      title="实验楼"
                      alt="实验楼"
                      style="width:145px"
                      src="https://static.shiyanlou.com/frontend/dist/img/9f43b00.svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.boxuegu.com/" target="_blank">
                    <img
                      target="_blank"
                      title="博学谷"
                      alt="博学谷"
                      style="width: 113px;"
                      src="https://s1.ax1x.com/2020/03/16/8tEEL9.png"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nowcoder.com/"
                    target="_blank"
                    style="background:#3d444c;padding: 5px;"
                  >
                    <img
                      target="_blank"
                      title="牛客网"
                      alt="牛客网"
                      style="width:110px"
                      src="https://static.nowcoder.com/images/res/logo/logo-v3.png?t=20191013"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class="content-mode">
              <div class="ul-title">📌文档和工具</div>
              <ul class="siteicon likeassert-list">
                <li>
                  <a href="https://zhuanlan.zhihu.com/p/68477600" target="_blank">
                    <svg
                      style="vertical-align: middle;"
                      t="1572367313845"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="6427"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"
                        fill="#41B883"
                        p-id="6428"
                      />
                      <path
                        d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"
                        fill="#34495E"
                        p-id="6429"
                      />
                    </svg>
                    Vue Function-based API RFC（中⽂版）
                  </a>
                </li>
                <li>
                  <a href="/vue3/" target="_blank">
                    <svg
                      style="vertical-align: middle;"
                      t="1572367313845"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="6427"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"
                        fill="#41B883"
                        p-id="6428"
                      />
                      <path
                        d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"
                        fill="#34495E"
                        p-id="6429"
                      />
                    </svg>
                    Vue3 Composition API Cheat Sheet（中⽂版）
                  </a>
                </li>
                <li>
                  <a href="https://typescript.bootcss.com/" target="_blank">
                    <img
                      style="width: 16px;display: inline;vertical-align: text-top;"
                      src="https://typescript.bootcss.com/favicon.ico"
                    />
                    TypeScript 中文手册
                  </a>
                </li>
                <li>
                  <a href="https://zh.javascript.info/" target="_blank">
                    <img
                      style="width: 16px;display: inline;vertical-align: text-top;"
                      src="https://zh.javascript.info/img/favicon/favicon.png"
                    />
                    现代 JavaScript 教程
                  </a>
                </li>
                <li>
                  <a href="https://cloud.tencent.com/developer/devdocs" target="_blank">
                    <img
                      style="width: 16px;display: inline;vertical-align: text-bottom;"
                      src="https://cloud.tencent.com/favicon.ico"
                    />
                    开发者手册
                  </a>
                </li>
                <li>
                  <a
                    href="http://naotu.baidu.com/file/11338e6e28270e427bfb738519e7cc8e?token=16023c01a2b5c4b8"
                    target="_blank"
                  >
                    <svg
                      style="vertical-align: middle;"
                      t="1572367651050"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="6635"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M388.7 542.88c-16.57 0-30-13.43-30-30s13.43-30 30-30c52.3 0 94.85-42.55 94.85-94.85v-67.81c0-40.96 15.84-79.58 44.6-108.74 28.76-29.16 67.16-45.53 108.12-46.1l3.43-0.05c16.57-0.22 30.18 13.02 30.41 29.58 0.23 16.57-13.02 30.18-29.58 30.41l-3.43 0.05c-51.58 0.71-93.55 43.25-93.55 94.84v67.81c0 85.4-69.47 154.86-154.85 154.86z"
                        fill="#FFC061"
                        p-id="6636"
                      />
                      <path
                        d="M640.12 860.42h-0.42l-3.43-0.05c-40.96-0.56-79.36-16.93-108.12-46.09s-44.6-67.78-44.6-108.74v-67.8c0-52.3-42.55-94.85-94.85-94.85-16.57 0-30-13.43-30-30s13.43-30 30-30c85.38 0 154.85 69.47 154.85 154.85v67.8c0 51.59 41.96 94.13 93.55 94.84l3.43 0.05c16.57 0.23 29.81 13.84 29.59 30.41-0.24 16.42-13.62 29.58-30 29.58z"
                        fill="#FFC061"
                        p-id="6637"
                      />
                      <path
                        d="M640.11 542.88H388.7c-16.57 0-30-13.43-30-30s13.43-30 30-30h251.42c16.57 0 30 13.43 30 30-0.01 16.57-13.44 30-30.01 30z"
                        fill="#FFC061"
                        p-id="6638"
                      />
                      <path
                        d="M343.89 638.95H137.78c-38.6 0-70-31.4-70-70V456.81c0-38.6 31.4-70 70-70h206.11c38.6 0 70 31.4 70 70v112.13c0 38.6-31.4 70.01-70 70.01zM137.78 446.81c-5.51 0-10 4.49-10 10v112.13c0 5.51 4.49 10 10 10h206.11c5.51 0 10-4.49 10-10V456.81c0-5.51-4.49-10-10-10H137.78zM830.16 316.96h-93.98c-69.51 0-126.07-56.55-126.07-126.07S666.66 64.83 736.18 64.83h93.98c69.51 0 126.07 56.55 126.07 126.07-0.01 69.5-56.56 126.06-126.07 126.06z m-93.98-192.13c-36.43 0-66.07 29.64-66.07 66.07s29.64 66.07 66.07 66.07h93.98c36.43 0 66.07-29.64 66.07-66.07s-29.64-66.07-66.07-66.07h-93.98zM830.16 638.95h-93.98c-69.51 0-126.07-56.55-126.07-126.07 0-69.51 56.55-126.07 126.07-126.07h93.98c69.51 0 126.07 56.55 126.07 126.07-0.01 69.51-56.56 126.07-126.07 126.07z m-93.98-192.14c-36.43 0-66.07 29.64-66.07 66.07 0 36.43 29.64 66.07 66.07 66.07h93.98c36.43 0 66.07-29.64 66.07-66.07 0-36.43-29.64-66.07-66.07-66.07h-93.98z"
                        fill="#352E70"
                        p-id="6639"
                      />
                      <path
                        d="M830.16 959.17h-93.98c-69.51 0-126.07-56.55-126.07-126.07s56.55-126.07 126.07-126.07h93.98c69.51 0 126.07 56.55 126.07 126.07s-56.56 126.07-126.07 126.07z m-93.98-192.13c-36.43 0-66.07 29.64-66.07 66.07s29.64 66.07 66.07 66.07h93.98c36.43 0 66.07-29.64 66.07-66.07s-29.64-66.07-66.07-66.07h-93.98z"
                        fill="#352E70"
                        p-id="6640"
                      />
                    </svg>
                    高级前端技能树
                  </a>
                </li>
                <li>
                  <a href="https://es6.ch-un.com" target="_blank">
                    <img
                      src="http://es6.ruanyifeng.com/favicon.ico"
                      style="width:16px;display:inline;vertical-align: text-top;"
                    />
                    ECMAScript 6简洁版
                  </a>
                </li>
                <li>
                  <a href="https://www.kancloud.cn/dunizb/web-dev-marrow" target="_blank">
                    <svg
                      style="vertical-align: middle;"
                      t="1572367748584"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="6870"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M852.002 1000.016H249.208V171.175h263.721v343.779l133.406-101.323 130.317 101.323V171.175h150.699v753.492c0 41.573-33.775 75.347-75.349 75.347zM646.335 364.259l-95.73 75.348V133.501h188.371v306.106l-92.641-75.348zM136.186 95.827v37.674c0 20.825 16.849 37.676 37.673 37.676h37.676v828.841h-37.676c-41.647 0-75.347-33.774-75.347-75.348V95.828c0-41.647 33.7-75.348 75.347-75.348h678.143c27.814 0 51.802 15.233 64.901 37.674H173.859c-20.825 0-37.673 16.85-37.673 37.674z"
                        fill="#50D2C2"
                        p-id="6871"
                      />
                    </svg>
                    前端精华总结
                  </a>
                </li>
                <li>
                  <a href="https://wild-flame.github.io/guides/" target="_blank">
                    <svg
                      style="vertical-align: middle;"
                      t="1572367813512"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="7825"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M673.4 903.5H350.6c-6.4 0-10.1-7.4-8.2-16.3l47.1-223.1c1-4.6 5.4-8.2 9.8-8.2h225.1c4.5 0 8.9 3.7 9.8 8.2l47.1 223.1c2.1 8.9-1.5 16.3-7.9 16.3z"
                        fill="#B9D5EA"
                        p-id="7826"
                      />
                      <path
                        d="M673.4 913.5H350.6c-5.4 0-10.3-2.4-13.8-6.6-4.4-5.5-6-13.4-4.2-21.8L379.8 662c1.9-9.2 10.4-16.2 19.6-16.2h225.1c9.2 0 17.7 6.9 19.6 16.2l47.1 223.1c1.8 8.4 0.2 16.3-4.2 21.8-3.3 4.2-8.2 6.6-13.6 6.6z m-321.3-20h319.7c0.2-0.8 0.3-2.3-0.1-4.3l-47.1-223.1-0.3-0.3H399.7l-0.4 0.4-47.1 223c-0.4 2-0.3 3.5-0.1 4.3z"
                        fill="#322E63"
                        p-id="7827"
                      />
                      <path
                        d="M885.6 764.4H137.9c-26.4 0-48-21.6-48-48V203c0-26.4 21.6-48 48-48h747.7c26.4 0 48 21.6 48 48v513.4c0 26.4-21.6 48-48 48z"
                        fill="#28B1D5"
                        p-id="7828"
                      />
                      <path
                        d="M885.6 764.4H137.9c-26.4 0-48-21.6-48-48V591h843.7v125.4c0 26.4-21.6 48-48 48z"
                        fill="#198EBC"
                        p-id="7829"
                      />
                      <path
                        d="M597.4 764.4h274.8L262.9 155h-125c-26.4 0-48 21.6-48 48v53.8l507.5 507.6zM386.9 155l546.7 546.7v-77.4L464.4 155z"
                        fill="#FFFFFF"
                        p-id="7830"
                      />
                      <path
                        d="M885.6 774.4H137.9c-32 0-58-26-58-58V203c0-32 26-58 58-58h747.7c32 0 58 26 58 58v513.4c0 31.9-26 58-58 58zM137.9 165c-21 0-38 17-38 38v513.4c0 21 17 38 38 38h747.7c21 0 38-17 38-38V203c0-21-17-38-38-38H137.9z"
                        fill="#322E63"
                        p-id="7831"
                      />
                      <path
                        d="M885.6 763.7H137.9c-26.4 0-48-21.6-48-48v-72.1h843.7v72.1c0 26.4-21.6 48-48 48z"
                        fill="#FFFFFF"
                        p-id="7832"
                      />
                      <path
                        d="M885.6 774.4H137.9c-32 0-58-26-58-58v-82.1h863.7v82.1c0 31.9-26 58-58 58zM99.9 654.3v62.1c0 21 17 38 38 38h747.7c21 0 38-17 38-38v-62.1H99.9z"
                        fill="#322E63"
                        p-id="7833"
                      />
                      <path
                        d="M512 707.1m-19.4 0a19.4 19.4 0 1 0 38.8 0 19.4 19.4 0 1 0-38.8 0Z"
                        fill="#322E63"
                        p-id="7834"
                      />
                      <path
                        d="M738.6 913.5H285.3c-5.5 0-10-4.5-10-10s4.5-10 10-10h453.3c5.5 0 10 4.5 10 10s-4.4 10-10 10z"
                        fill="#322E63"
                        p-id="7835"
                      />
                    </svg>
                    Mac OS X 配置指南
                  </a>
                </li>
                <li>
                  <a href="https://phodal.github.io/booktree/" target="_blank">
                    <svg
                      style="vertical-align: middle;"
                      t="1572367858591"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="8070"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M893 639.5H89c-8.5 0-16.1-5.2-19.2-13.2-3.1-7.9-1-16.9 5.3-22.7 26.4-24.2 41-54.6 41-85.6 0-31-14.5-61.5-40.9-85.7-6.3-5.7-8.4-14.7-5.3-22.7 3.1-7.9 10.7-13.1 19.2-13.1h804c5.2 0 10.1 1.9 13.9 5.4 35 32.1 54.2 73.3 54.2 116 0 42.8-19.3 84-54.4 116-3.7 3.7-8.7 5.6-13.8 5.6z m-759.8-41.2h751.5c22.9-23.2 35.4-51.4 35.4-80.2 0-28.8-12.5-57-35.3-80.2H133.2c15.7 24.6 24 52.1 24 80.2 0.1 28.1-8.3 55.6-24 80.2zM940.7 941.2h-804c-5.1 0-10.1-1.9-13.9-5.4-35.1-32-54.4-73.2-54.4-116 0-42.7 19.3-83.9 54.2-116 3.8-3.5 8.8-5.4 13.9-5.4h804c8.5 0 16.1 5.2 19.2 13.1 3.1 7.9 1 16.9-5.3 22.7-26.3 24.2-40.8 54.6-40.8 85.7 0 31 14.5 61.5 41 85.6 6.3 5.7 8.4 14.7 5.3 22.7-3.1 7.8-10.7 13-19.2 13zM145 900h751.5c-15.7-24.6-24.1-52.1-24.1-80.2s8.3-55.6 24-80.2H144.8c-22.8 23.2-35.2 51.5-35.2 80.2 0 28.7 12.5 57 35.4 80.2zM940.7 337.9h-804c-5.1 0-10.1-1.9-13.9-5.4-35.1-32-54.4-73.2-54.4-116 0-42.7 19.3-83.9 54.2-116 3.8-3.5 8.8-5.4 13.9-5.4h804c8.5 0 16.1 5.2 19.2 13.1 3.1 7.9 1 16.9-5.3 22.7-26.3 24.2-40.8 54.6-40.8 85.6 0 31.1 14.5 61.5 41 85.6 6.3 5.7 8.4 14.7 5.3 22.7-3.1 7.8-10.7 13.1-19.2 13.1z m-795.8-41.3h751.5c-15.7-24.6-24-52.1-24-80.2s8.3-55.6 24-80.2H144.8c-22.8 23.2-35.2 51.4-35.2 80.2 0 28.8 12.5 57.1 35.3 80.2z"
                        fill="#E86262"
                        p-id="8071"
                      />
                    </svg>
                    进阶书单
                  </a>
                </li>
                <!-- <li>
                  <a href="https://www.edrawmax.cn/" target="_blank">
                  <img style="width: 16px;display: inline;vertical-align: text-top;" src="https://www.edrawmax.cn/favicon.ico" />
                  亿图图示
                  </a>
                </li>-->
                <li>
                  <a href="https://jsrun.pro/" target="_blank">
                    <img
                      style="width: 16px;display: inline;vertical-align: text-top;"
                      src="https://i.loli.net/2019/12/05/dcBCnxfgM7R21Hm.jpg"
                    />
                    JSRUN
                  </a>
                </li>
                <!-- <li>
                  <a href="https://carbon.now.sh" target="_blank">
                    <img style="width: 16px;display: inline;vertical-align: text-top;" src="https://carbon.now.sh/favicon.ico" />
                    Carbon
                  </a>
                </li>-->
                <li>
                  <a href="https://regexper.com/" target="_blank">
                    <img
                      style="width: 16px;display: inline;vertical-align: text-top;"
                      src="https://regexper.com/favicon.ico"
                    />
                    Regexper
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 我也在这里 -->
      <div class="row">
        <div id="rss" class="row_box row_sms">
          <div class="header">
            <div class="title">
              <i class="iconfont icon-add_friends"></i> 订阅
            </div>
            <div class="title_info">经常也在这里出没，不要错过精彩，公众号会优先一两天哦！</div>
          </div>
          <div class="content">
            <ul class="siteicon">
              <li title="Github">
                <a href="https://github.com/duizb" target="_blank">
                  <i
                    class="iconfont icon-icongithub"
                    style="vertical-align: super;font-size: 2rem;"
                  ></i>
                </a>
              </li>
              <li title="segmentfault">
                <a href="https://segmentfault.com/u/dunizb" target="_blank" style="width:140px">
                  <img src="https://cdn.segmentfault.com/v-5e7854c5/global/img/logo-b.svg" alt="SF" />
                </a>
              </li>
              <li title="掘金">
                <a href="https://juejin.im/user/5794cec91532bc0060caf52b" target="_blank">
                  <img src="https://gold-cdn.xitu.io/images/app/logo.png" style="width: 40px;" />
                </a>
              </li>
              <li title="腾讯云+社区">
                <a href="https://cloud.tencent.com/developer/column/83987" target="_blank">
                  <img src="https://i.loli.net/2020/01/01/V72IreGcwl36ijC.jpg" style="width: 64px;" />
                </a>
              </li>
              <li title="微博">
                <a class="weibo" href="http://www.weibo.com/duni/" target="_blank">
                  <img src="../public/images/icon/weibo_1.png" style="width:40px;" />
                </a>
              </li>
              <li title="豆瓣">
                <a class="douban" href="https://www.douban.com/people/dunish/" target="_blank">
                  <img
                    src="https://img3.doubanio.com/f/frodo/144e6fb7d96701944e7dbb1a9bad51bdb1debe29/pics/app/logo.png"
                    style="width:38px;"
                  />
                </a>
              </li>
            </ul>
            <ul class="qrcode">
              <li>
                <a
                  href="https://www.toutiao.com/c/user/1268500160/#mid=1653459147621379"
                  target="_blank"
                >
                  <img src="https://gitee.com/dunizb/cloudimg/raw/jsdelivr/toutiao-290x290.jpeg" />
                </a>
              </li>
              <li>
                <a href="https://www.kancloud.cn/invite?code=5dfdd52d9d1aa" target="_blank">
                  <img
                    src="https://img.kancloud.cn/36/57/36575f650b6c35147c6531345c64bc81_256x256.png"
                  />
                </a>
              </li>
              <li style="width: 468px">
                <img
                  src="https://gitee.com/dunizb/cloudimg/raw/jsdelivr/关注名片-大礼包_横版二维码_2020-01-01-0.jpg"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 我的足迹 开始 -->
      <div class="row" id="my-zuji">
        <div class="row_box row_maps">
          <div class="header">
            <div class="title">
              <i class="iconfont icon-09"></i> 看世界
            </div>
            <div class="title_info">读书与旅行，缺一不可，看看世界，定位自己</div>
          </div>
          <div class="content">
            <tab-switch-btn :actived="isActivedFx" @click.native="swicthMapType('fx')">足迹路线</tab-switch-btn>
            <tab-switch-btn :actived="isActivedDd" @click.native="swicthMapType('dd')">踏足地点</tab-switch-btn>
            <tab-switch-btn :actived="isActivedSf" @click.native="swicthMapType('sf')">踏足省份</tab-switch-btn>
            <div class="didian" v-show="showDidian">
              <div id="my-maps"></div>
            </div>
            <div class="feixian" v-show="showFeixian">
              <div id="linemap" class="linemap-wrapper"></div>
            </div>
            <div class="row_btn">
              <a
                @click="_hmt.push(['_trackEvent', '版块', 'click', '进入我的足迹'])"
                href="https://dunizb.github.io/footprint"
                target="_blank"
              >
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
        <a
          class="coding"
          title="由Coding.net提供静态Pages"
          href="https://pages.coding.me"
          target="_blank"
        >
          <img
            src="https://dn-coding-net-production-static.qbox.me/static/f7272a0b7cd340571725c6734c6bdd6f.png"
          />
        </a>
        <a class="upyun" title="SM.SM供图床服务" href="https://sm.ms//">
          <img src="//i.loli.net/2019/07/28/5d3da709e31a539122.png" />
        </a>
        <a class="hexo iconfont icon-hexo" title href="https://hexo.io/"></a>
      </div>
      <div class="pc">
        <p>
          Copyright ©
          <a href="/">zhangbing.site</a>. All Rights Reserevd. 2014-2018 ShangHai·China 读你·这世间唯有梦想和好姑娘不可辜负！
        </p>
        <p>
          Powerd by
          <a href="https://hexo.io/" target="_blank">Hexo</a> Themes Source Code:
          <a
            href="https://github.com/MOxFIVE/hexo-theme-yelee"
            target="_blank"
          >Yelee</a> The Page Design by
          <a href="https://zhangbing.site/" target="_blank">张兵</a>
        </p>
        <p>Source Code: blog-newpage(Github: https://github.com/dunizb/blog-newpage)</p>
      </div>
      <div class="m">
        <p>
          Powerd by
          <a href="https://hexo.io/" target="_blank">Hexo</a> & Design by
          <a href="https://zhangbing.site/" target="_blank">张兵</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showImgLoading: true,
      showDidian: false,
      showFeixian: true,
      isActivedFx: true,
      isActivedDd: false,
      isActivedSf: false
    };
  },
  mounted() {
    // 获取Bing.com每日壁纸
    this.getEveryDayBgimg();
    this.$nextTick(() => {
      this.showImgLoading = false;
    });
  },
  methods: {
    swicthMapType(type) {
      if (type === "dd") {
        this.showDidian = true;
        this.showFeixian = false;
        this.isActivedFx = false;
        this.isActivedDd = true;
      }
      if (type === "fx") {
        this.showDidian = false;
        this.showFeixian = true;
        this.isActivedFx = true;
        this.isActivedDd = false;
      }
      if (type === "sf") {
        alert("建设中...");
      }
    },
    getEveryDayBgimg() {
      console.log("获取Bing.com每日壁纸");
      const imgurl = this.$refs["bgimg"].src;
      this.$refs["header"].style.backgroundImage = `url(${imgurl})`;
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
#linemap {
  border-bottom: 2px solid $mian-gray;
  width: 100%;
  height: 550px;
}
</style>
