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
  <view id="modal-wrapper"></view>
</template>

<script setup>
import './index.scss';
import { ref, onMounted, reactive } from 'vue';
import Taro from '@tarojs/taro';
import Content1 from './components/Content.vue';
import HomeTab from './components/homeTab.vue';
import Weather from './components/weather.vue';
import { useWeatherStore } from '../../stores/weatherStore';

const QQMapWX = require('../../utils/qqmap-wx-jssdk');

  // components: { Content1, HomeTab, Weather}


    const currentCity = ref('');
    const latitude = ref();
    const longitude = ref();
    const imgList = reactive([
      {
        imgUrl: 'qing.jpg',
        key: 'qing',
      },
      {
        imgUrl: 'yu.jpg',
        key: 'yu',
      },
      {
        imgUrl: 'yun.jpg',
        key: 'yun',
      },
      {
        imgUrl: 'xue.jpg',
        key: 'xue',
      },
    ]);

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
        case '101', '151':
          imgUrl = 'yun.jpg';
          break
        case '300','301','302','303','304','305','306','307','350','399':
          imgUrl = 'yu.jpg';
          break
        case '400','401','402','403','499':
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
