<template>
  <view class="index">
    <HomeTab :currentCity="currentCity"/>
    <Content/>
    <Weather :latitude="latitude" :longitude="longitude"/>
  </view>
</template>

<script>
import './index.scss'
import Content from '../home/components/Content.vue'
import HomeTab from '../home/components/homeTab.vue'
import Weather from './components/weather'
import {ref,onMounted} from 'vue'
import Taro from '@tarojs/taro'

const QQMapWX = require('../../utils/qqmap-wx-jssdk.js')

export default {
  name: 'Index',

  components: {Content,HomeTab,Weather},

  methods: {

  },

  setup() {
    
    let currentCity = ref('')
    let latitude = ref('')
    let longitude = ref('')

    onMounted(()=>{
      const qqmapsdk = new QQMapWX({
          key: 'GZOBZ-STL3J-WXOFV-FDSNH-UPDKV-DQFCH'
      });

    // 获取用户经纬度
      Taro.getLocation({
        type: 'wgs84',
        success: function (result) {
              // 获取用户城市
          qqmapsdk.reverseGeocoder({
            location: {
            latitude: result.latitude.toString(),
            longitude: result.longitude.toString()
            },
            success: async function (res) {
              let city = res.result.ad_info.city 
              currentCity.value = city
              latitude.value = result.latitude
              longitude.value = result.longitude
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
    currentCity,
    latitude,
    longitude
  }
}

}
</script>
