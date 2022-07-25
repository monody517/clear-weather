<template>
  <view>
    <text class="title">{{contentRef }}</text>
  </view>
</template>

<script>

import Taro from '@tarojs/taro'
import {ref,onMounted} from 'vue'

const jinrishici = require('../../src/utils/jinrishici.js')

export default {
  setup() {
    const contentRef = ref('')

    onMounted(()=>{
      jinrishici.load(result => {
        contentRef.value = result.data.content
        const contentArr = contentRef.value.split('，')
      })
      Taro.loadFontFace({
        family: 'yingqu',
        source: 'https://qingyu-1313022355.cos.ap-chengdu.myqcloud.com/LXGWWenKai-Bold.ttf',

        success(res){
          console.log('res', res)
        },
        fail(err){
          console.log('err', err)
        },
      })
    })

    return {
      contentRef,
    }
  }
}


</script>

<style>
.title {
  font-family: 'yingqu';
  font-size: 50px;
  writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/  
  writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/  
}
.button {
  border: 1px solid lightgray;
  padding: 5px 10px;
}
</style>





