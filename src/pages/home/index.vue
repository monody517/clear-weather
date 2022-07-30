<template>
  <view class="index">
    <image
    class="bg"
    :src="`https://qingyu-1313022355.cos.ap-chengdu.myqcloud.com/${getImgUrl(store.textCode)}`"
    alt=""
    />
    <view class="content">
      <HomeTab :currentCity="currentCity" />
      <Content1 />
      <Weather :latitude="latitude" :longitude="longitude" />
    </view>
  </view>
</template>

<script setup>
import './index.scss';
import { ref, onMounted } from 'vue';
import Taro from '@tarojs/taro';
import Content1 from './components/Content.vue';
import HomeTab from './components/homeTab.vue';
import Weather from './components/weather.vue';
import { useWeatherStore } from '../../stores/weatherStore';

const QQMapWX = require('../../utils/qqmap-wx-jssdk');

    const currentCity = ref('');
    const latitude = ref();
    const longitude = ref();

    const store = useWeatherStore()

    function getImgUrl(weather) {
      let imgUrl = ''
      switch(weather){
        case '100':
          imgUrl = 'qing.jpg';
          break
        case '150':
          imgUrl = 'qing-ye.jpg';
          break
        case '101':
        case '151':
        case'104':
          imgUrl = 'yun.jpg';
          break
        case '300':case '301':case '302':case '303':case '304':case '305':case '306':case '307':case '350':case '399':
          imgUrl = 'yu.jpg';
          break
        case '400':case '401':case '402':case '403':case '499':
          imgUrl = 'xue.jpg';
          break
      }
      return imgUrl
    }

    onMounted(() => {
      const qqmapsdk = new QQMapWX({
        key: 'GZOBZ-STL3J-WXOFV-FDSNH-UPDKV-DQFCH',
      });

      // 获取用户经纬度
      Taro.getLocation({
        type: 'wgs84',
        success(result) {
          // 获取用户城市
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: result.latitude.toString(),
              longitude: result.longitude.toString(),
            },
            async success(res) {
              const { city } = res.result.ad_info;
              currentCity.value = city;
              latitude.value = result.latitude;
              longitude.value = result.longitude;
            },
            fail(res) {
              console.log(res);
            },
          });
        },
      });
    });

</script>
