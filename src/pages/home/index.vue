<template>
  <view class="index">
    <HomeTab :currentCity="currentCity"/>
    <Content/>
  </view>
</template>

<script>
import './index.scss'
import Content from '../home/components/Content.vue'
import HomeTab from '../home/components/homeTab.vue'
import {ref,onMounted} from 'vue'
import Taro from '@tarojs/taro'

const QQMapWX = require('../../utils/qqmap-wx-jssdk.js')

export default {
  name: 'Index',

  components: {Content,HomeTab},

  data() {
    latitude: ''
    longitude: ''
  },

  methods: {

  },

  setup() {
    let currentCity = ref('')
    onMounted(()=>{
      const qqmapsdk = new QQMapWX({
          key: 'GZOBZ-STL3J-WXOFV-FDSNH-UPDKV-DQFCH'
      });

    // 获取用户经纬度
      Taro.getLocation({
        type: 'wgs84',
        success: function (res) {
              // 获取用户城市
          qqmapsdk.reverseGeocoder({
            location: {
            latitude: res.latitude.toString(),
            longitude: res.longitude.toString()
            },
            success: function (res) {
              let province = res.result.ad_info.province
              let city = res.result.ad_info.city
              let district = res.result.ad_info.district
              currentCity.value = city
            },
            fail: function (res) {
              console.log(res);
            },
            complete: function (res) {
              // console.log(res);
            }
          });  
        }
      })
  })
  return {
    currentCity
  }
}

}
</script>
