export default {
  pages: [
    'pages/home/index',
    'pages/me/index'
  ],
  requiredPrivateInfos: [
    'getLocation',
    'chooseAddress',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#A0A4AD',
    selectedColor: '#2386FF',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [
      {
        text: '主页',
        pagePath: 'pages/home/index',
        // iconPath: 'assets/tab-bar/jing_xuan.png',
        // selectedIconPath: 'assets/tab-bar/jing_xuan_select.png',
      },
      {
        text: '我的',
        pagePath: 'pages/me/index',
        // iconPath: 'assets/tab-bar/wo_de.png',
        // selectedIconPath: 'assets/tab-bar/wo_de_select.png',
      },
    ],
  },
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示', // 高速公路行驶持续后台定位
    },
  },
};
