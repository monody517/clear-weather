import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './app.scss'
import Taro from '@tarojs/taro'

const App = createApp({
  onShow(options) {
    Taro.loadFontFace({
      family: 'yingqu',
      source: 'https://qingyu-1313022355.cos.ap-chengdu.myqcloud.com/LXGWWenKai-Bold.ttf',

      success(res){
        console.log('res', res)
      },
      fail(err){
        console.log('err', err)
      },
      complete(res){
        console.log('complete', res)
      },
    })
  },
  
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})


App.use(createPinia())

export default App
