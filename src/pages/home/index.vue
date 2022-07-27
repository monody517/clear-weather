<template>
  <view class="index">
    <image
    class="bg"
    :src="`https://qingyu-1313022355.cos.ap-chengdu.myqcloud.com/${'yu.jpg'}`"
    alt=""
    />
    <view class="content">
      <HomeTab :currentCity="currentCity" />
      <Content1 />
      <Weather :latitude="latitude" :longitude="longitude" />
    </view>
  </view>
</template>

<script lang="ts">
import './index.scss';
import { ref, onMounted, reactive } from 'vue';
import Taro from '@tarojs/taro';
import Content1 from './components/Content.vue';
import HomeTab from './components/homeTab.vue';
import Weather from './components/weather.vue';

const QQMapWX = require('../../utils/qqmap-wx-jssdk');

export default {

  components: { Content1, HomeTab, Weather },

  setup() {
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
    return {
      currentCity,
      latitude,
      longitude,
      imgList,
    };
  },
};
</script>
