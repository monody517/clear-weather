<template>
  <view class="index">
  <Content/>
  </view>
</template>

<script>
import './index.scss'
import Content from '../../components/Content.vue'
import {ref,onMounted} from 'vue'
import Taro from '@tarojs/taro'

export default {
  name: 'Index',

  components: {Content},

  setup() {
    onMounted(()=>{
      Taro.getLocation({
        type: 'wgs84',
        success: function (res) {
          const latitude = res.latitude
          const longitude = res.longitude
          const speed = res.speed
          const accuracy = res.accuracy
        }
      })
    }) 
  }

}
</script>
