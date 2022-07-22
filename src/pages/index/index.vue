<template>
  <view class="index">
  <view class="content">{{contentRef}}</view>
  <view @click="loadFont">dianji</view>
  </view>
</template>

<script>
import './index.scss'
import Counter from '../../components/Counter.vue'
import {ref,onMounted} from 'vue'
import Taro from '@tarojs/taro'

const jinrishici = require('../../utils/jinrishici.js')

export default {
  name: 'Index',

  components: {},

  setup(){
    const contentRef = ref('')
    onMounted(()=>{
      jinrishici.load(result => {
        contentRef.value = result.data.content
      })
    })
    return {
        contentRef
    }
  },

  methods: {
    loadFont() {
      console.log('111');
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
    }
  }
}
</script>
