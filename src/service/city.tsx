import { request } from '@tarojs/taro';

const CityService = {
  // 首页获取当前城市
  getCity() {
    return request({
      url: `https://www.mxnzp.com/api/address/list?app_id=mwoerqgekceavwsi&app_secret=S2VzbTdxQktmWWcrRGJsYnlZOGQ0QT09`,
      method: 'GET',
    })
  }
}

export default CityService
