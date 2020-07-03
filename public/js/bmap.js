/**
 * 我的足迹 - 百度地图
 */

function initMap() {
  createMap(); // 创建地图
  setMapEvent(); // 设置地图事件
  addMapControl(); // 向地图添加控件
  addMarker(); // 向地图中添加marker
}

// 创建地图
var map;
function createMap() {
  map = new BMap.Map("my-maps"); // 创建地图实例
  var point = new BMap.Point(101.488859, 33.393234); // 定义一个中心点坐标
  map.centerAndZoom(point, 5); // 设定地图的中心点和坐标并将地图显示在地图容器中
  window.map = map; // 将map变量存储在全局
}

// 地图事件设置函数：
function setMapEvent() {
  map.enableDragging(); // 启用地图拖拽事件，默认启用(可不写)
  // map.enableScrollWheelZoom();//启用地图滚轮放大缩小
  map.enableDoubleClickZoom(); // 启用鼠标双击放大，默认启用(可不写)
  map.enableKeyboard(); // 启用键盘上下左右键移动地图
}

// 地图控件添加函数：
function addMapControl() {
  // 向地图中添加缩放控件
  var ctrl_nav = new BMap.NavigationControl(
    { anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE },
  );
  map.addControl(ctrl_nav);
  // 向地图中添加比例尺控件
  var ctrl_sca = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT });
  map.addControl(ctrl_sca);
}

// 标注点数组
var ponit_icon = { w: 21, h: 21, l: 0, t: 0, x: 6, lb: 5 };
var markerArr = [{
  title: "杭州",
  content: "我目前正在杭州，快来找我玩耍吧",
  point: "120.171467|30.257352",
  isOpen: 1,
  icon: ponit_icon,
}, {
  title: "乌镇",
  content: "乌镇西栅、东栅",
  point: "120.490268|30.757066",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "苏州",
  content: "苏州博物馆、山塘街、忠王府、拙政园等",
  point: "120.635894|31.330387",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "昆山",
  content: "阳澄湖",
  point: "120.835913|31.409886",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "衡阳",
  content: "整个衡阳",
  point: "112.576672|26.899646",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "长沙",
  content: "长沙市、湖南农业大学、湖南环境生物机电学院、湖南大众传媒学院、湖南艺术职业技术学院",
  point: "112.948208|28.233716",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "邵阳",
  content: "邵东县",
  point: "111.961661|26.987796",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "广州",
  content: "广州市、天河、西关、电视塔、白云山、上下九等",
  point: "113.370828|23.130788",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "东莞",
  content: "大岭山、松山湖",
  point: "113.845618|22.905876",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "厦门",
  content: "厦门大学、鼓浪屿、普陀山/寺、环岛路、胡里山炮台等",
  point: "118.142483|24.497133",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "成都",
  content: "成都市、大熊猫繁育基地",
  point: "104.071216|30.663546",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "婺源",
  content: "南昌、婺源",
  point: "117.86664|29.282911",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "天津",
  content: "天津市",
  point: "117.223736|39.140848",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "北京",
  content: "天安门/广场、八达岭长城、故宫、天坛、西单、颐和园、圆明园遗址公园",
  point: "116.405505|39.913005",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "西安",
  content: "西安市区、华山",
  point: "108.981951|34.283749",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "腾格里沙漠",
  content: "内蒙古阿拉善",
  point: "105.864047|38.865403",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "无锡",
  content: "无锡军障古道徒步",
  point: "120.321109|31.44869",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "上海",
  content: "外滩、城隍庙、南京路步行街、佘山、欢乐谷、陆家嘴",
  point: "121.473338|31.233094",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "大理",
  content: "大理古城、苍山洱海",
  point: "100.252927|25.606508",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "丽江",
  content: "丽江古城、拉市海",
  point: "100.222099|26.876146",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "昆明",
  content: "昆明",
  point: "102.707855|25.058846",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "北海",
  content: "北海银滩、三千海",
  point: "109.135379|21.458892",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "桂林",
  content: "桂林、阳朔",
  point: "110.290984|25.268423",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "波市象山大沙旅游景区",
  content: "浙江省宁波市象山县大沙金海岸",
  point: "121.979235|29.1452",
  isOpen: 0,
  icon: ponit_icon,
}, {
  title: "重庆重庆市",
  content: "重庆市区",
  point: "106.553263|29.568493",
  isOpen: 0,
  icon: ponit_icon,
}];

// 创建marker
function addMarker() {
  for (var i = 0; i < markerArr.length; i++) {
    var json = markerArr[i];
    var p0 = json.point.split("|")[0];
    var p1 = json.point.split("|")[1];
    var point = new BMap.Point(p0, p1);
    var iconImg = createIcon(json.icon);
    var marker = new BMap.Marker(point, { icon: iconImg });
    var iw = createInfoWindow(i);
    var label = new BMap.Label(
      json.title,
      { "offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20) },
    );
    marker.setLabel(label);
    map.addOverlay(marker);
    label.setStyle({
      borderColor: "#808080",
      color: "#333",
      cursor: "pointer",
    });

    (function () {
      var index = i;
      var _iw = createInfoWindow(i);
      var _marker = marker;
      _marker.addEventListener("click", function () {
        this.openInfoWindow(_iw);
      });
      _iw.addEventListener("open", function () {
        _marker.getLabel().hide();
      });
      _iw.addEventListener("close", function () {
        _marker.getLabel().show();
      });
      label.addEventListener("click", function () {
        _marker.openInfoWindow(_iw);
      });
      if (json.isOpen) {
        label.hide();
        _marker.openInfoWindow(_iw);
      }
    })();
  }
}
// 创建InfoWindow
function createInfoWindow(i) {
  var json = markerArr[i];
  var iw = new BMap.InfoWindow(
    "<b class='iw_poi_title' title='" + json.title + "'>" + json.title +
      "</b><div class='iw_poi_content'>" + json.content + "</div>",
  );
  return iw;
}
// 创建一个Icon
function createIcon(json) {
  var myIcon = new BMap.Icon(
    "//api.map.baidu.com/img/markers.png",
    new BMap.Size(23, 25),
    {
      offset: new BMap.Size(10, 25), // 指定定位位置
      imageOffset: new BMap.Size(0, 0 - 10 * 25), // 设置图片偏移
    },
  );
  // var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
  return myIcon;
}

initMap();
