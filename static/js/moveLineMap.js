var inmap = new inMap.Map({
  id: 'linemap',
  skin: "Blueness",
  center: [105.403119, 35.028658], //地图中心点
  style: {
    colors: ['#fff','#67C23A','#409EFF','#E6A23C','#F56C6C','#FF2121','#FF8080','#FFD96B','#5ADD94']
  },
  zoom: {
    value: 5, //当前地图级别
    show: true, //放大缩小按钮显示
    max: 18,
    min: 5
  },
});

var data = [{
  "from": {
    "city": "上海",
    "lnglat": [121.473338,31.233094]
  },
  "to": {
    "city": "杭州",
    "lnglat": [120.171467,30.257352]
  }
},{
  "from": {
    "city": "上海",
    "lnglat": [121.473338,31.233094]
  },
  "to": {
    "city": "北京",
    "lnglat": [116.405505,39.913005]
  }
},{
  "from": {
    "city": "上海",
    "lnglat": [121.473338,31.233094]
  },
  "to": {
    "city": "厦门",
    "lnglat": [118.142483,24.497133]
  }
},{
  "from": {
    "city": "上海",
    "lnglat": [121.473338,31.233094]
  },
  "to": {
    "city": "昆明",
    "lnglat": [102.707855,25.058846]
  }
},{
  "from": {
    "city": "昆明",
    "lnglat": [102.707855,25.058846]
  },
  "to": {
    "city": "大理",
    "lnglat": [100.252927,25.606508]
  }
},{
  "from": {
    "city": "大理",
    "lnglat": [100.252927,25.606508]
  },
  "to": {
    "city": "丽江",
    "lnglat": [100.222099,26.876146]
  }
},{
  "from": {
    "city": "丽江",
    "lnglat": [100.222099,26.876146]
  },
  "to": {
    "city": "昆明",
    "lnglat": [102.707855,25.058846]
  }
},{
  "from": {
    "city": "昆明",
    "lnglat": [102.707855,25.058846]
  },
  "to": {
    "city": "南宁",
    "lnglat": [108.420597,22.847122]
  }
},{
  "from": {
    "city": "南宁",
    "lnglat": [108.420597,22.847122]
  },
  "to": {
    "city": "北海",
    "lnglat": [109.135379,21.458892]
  }
},{
  "from": {
    "city": "北海",
    "lnglat": [109.135379,21.458892]
  },
  "to": {
    "city": "桂林",
    "lnglat": [110.290984,25.268423]
  }
},{
  "from": {
    "city": "桂林",
    "lnglat": [110.290984,25.268423]
  },
  "to": {
    "city": "衡阳",
    "lnglat": [112.576672,26.899646]
  }
},{
  "from": {
    "city": "衡阳",
    "lnglat": [112.576672,26.899646]
  },
  "to": {
    "city": "上海",
    "lnglat": [121.473338,31.233094]
  }
},{
  "from": {
    "city": "衡阳",
    "lnglat": [112.576672,26.899646]
  },
  "to": {
    "city": "长沙",
    "lnglat": [112.948208,28.233716]
  }
},{
  "from": {
    "city": "上海",
    "lnglat": [121.473338,31.233094]
  },
  "to": {
    "city": "衡阳",
    "lnglat": [112.576672,26.899646]
  }
},{
  "from": {
    "city": "上海",
    "lnglat": [121.473338,31.233094]
  },
  "to": {
    "city": "腾格里沙漠",
    "lnglat": [105.864047,38.865403]
  }
},{
  "from": {
    "city": "上海",
    "lnglat": [121.473338,31.233094]
  },
  "to": {
    "city": "无锡",
    "lnglat": [120.258217,31.511268]
  }
},{
  "from": {
    "city": "上海",
    "lnglat": [121.473338,31.233094]
  },
  "to": {
    "city": "成都",
    "lnglat": [104.071216,30.663546]
  }
},{
  "from": {
    "city": "衡阳",
    "lnglat": [112.576672,26.899646]
  },
  "to": {
    "city": "广州",
    "lnglat": [113.370828,23.130788]
  }
},{
  "from": {
    "city": "上海",
    "lnglat": [121.473338,31.233094]
  },
  "to": {
    "city": "广州",
    "lnglat": [113.370828,23.130788]
  }
},{
  "from": {
    "city": "上海",
    "lnglat": [121.473338,31.233094]
  },
  "to": {
    "city": "天津",
    "lnglat": [117.223736,39.140848]
  }
},{
  "from": {
    "city": "上海",
    "lnglat": [121.473338,31.233094]
  },
  "to": {
    "city": "南昌",
    "lnglat": [115.86631,28.680836]
  }
},{
  "from": {
    "city": "上海",
    "lnglat": [121.473338,31.233094]
  },
  "to": {
    "city": "苏州",
    "lnglat": [120.635894,31.330387]
  }
},{
  "from": {
    "city": "南昌",
    "lnglat": [115.86631,28.680836]
  },
  "to": {
    "city": "婺源",
    "lnglat": [117.86664,29.282911]
  }
},{
  "from": {
    "city": "天津",
    "lnglat": [117.223736,39.140848]
  },
  "to": {
    "city": "北京",
    "lnglat": [116.405505,39.913005]
  }
},{
  "from": {
    "city": "天津",
    "lnglat": [117.223736,39.140848]
  },
  "to": {
    "city": "西安",
    "lnglat": [108.981951,34.283749]
  }
},{
  "from": {
    "city": "厦门",
    "lnglat": [118.142483,24.497133]
  },
  "to": {
    "city": "广州",
    "lnglat": [113.370828,23.130788]
  }
},{
  "from": {
    "city": "广州",
    "lnglat": [113.370828,23.130788]
  },
  "to": {
    "city": "东莞",
    "lnglat": [113.845618,22.905876]
  }
}];

var overlay = new inMap.MoveLineOverlay({
  style: {
    normal: {
      markerRadius: 3,
      //marker点颜色,为空或null则默认取线条颜色
      markerColor: '#fff',
      //线条类型 solid、dashed、dotted
      lineType: 'solid',
      //线条宽度
      lineWidth: 1,
      //线条颜色
      colors: ['#F9815C', '#F8AB60', '#EDCC72', '#E2F194', '#94E08A', '#4ECDA5'],
      //移动点半径
      moveRadius: 2,
      //移动点颜色
      fillColor: '#fff',
      //移动点阴影颜色
      shadowColor: '#fff',
      //移动点阴影大小
      shadowBlur: 10,
    }
  },
  data: data,
});

inmap.add(overlay);

// setTimeout(() => {
//   overlay.setOptionStyle({
//     skin: "WhiteLover",
//     style: {
//       normal: {
//         markerRadius: 3,
//         //marker点颜色,为空或null则默认取线条颜色
//         markerColor: 'rgba(0,0,0,1)',
//         //线条类型 solid、dashed、dotted
//         lineType: 'solid',
//         //线条宽度
//         lineWidth: 1,
//         //线条颜色
//         //移动点半径
//         moveRadius: 2,
//         //移动点颜色
//         fillColor: 'rgba(255,0,0,1)',
//         //移动点阴影颜色
//         shadowColor: 'rgba(255,0,0,1)',
//         //移动点阴影大小
//         shadowBlur: 10,
//       }
//     }
//   });
// }, 2000);
