<template>
  <view v-if="contentArr.length!==0" class="title-content">
    <view 
    class="title" 
    v-for="(item,index) of contentArr" 
    :key="index"
    :style="{color: '#606266',marginTop: `${50*index}px`}"
    >
    {{ item }}
    </view>
  </view>
</template>

<script>

import Taro from '@tarojs/taro'
import {ref,onMounted} from 'vue'

const jinrishici = require('../utils/jinrishici.js')

export default {
  setup() {
    const contentRef = ref('')
    let contentArr = ref([])

    onMounted(()=>{
      jinrishici.load(result => {
        contentRef.value = result.data.content
        contentArr.value = contentRef.value.split('，')
        console.log('contentArr',result.data);
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
      contentArr,
    }
  }
}


</script>

<style>
.title-content{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 150px;
  margin-top: 50px;
}
.title {
  font-family: 'yingqu';
  font-size: 50px;
  writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/  
  writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
}
</style>





