<template>
  <view class="weather-content" :style="{width: width}">
      <view>
        <view class="textday">{{getAliasWeather(weatherInfo.textDay)}}</view>
        <view>{{weatherInfo.temp+'℃'}}</view>
      </view>
      <view>
        <view>{{weatherInfo.windDirDay+weatherInfo.windScaleDay+'级'}}</view>
        <view>{{'湿度'+weatherInfo.humidity+ '%'}}</view>
        <view>{{'能见度'+weatherInfo.vis+'公里'}}</view>
      </view>
  </view>
</template>

<script lang="ts">
import { ref, watch } from 'vue';
import Taro from '@tarojs/taro';
import WeatherService from '../../../service/weather';
import UtilService from '../../../service/util';
import { useWeatherStore } from '../../../stores/weatherStore'
import {useCityStore} from "../../../stores/city";
import {storeToRefs} from "pinia";
import {toRaw} from "@vue/reactivity";

const QQMapWX = require('../../../utils/qqmap-wx-jssdk');

export default {
  props: ['latitude', 'longitude'],
  setup(props) {
    const width = Taro.pxTransform(638);
    const weatherStore = useWeatherStore()
    const cityStore = useCityStore()
    const {currCity} = storeToRefs(cityStore)
    const qqmapsdk = new QQMapWX({
      key: 'GZOBZ-STL3J-WXOFV-FDSNH-UPDKV-DQFCH',
    });

    Taro.loadFontFace({
      family: 'yingqu',
      source: 'https://qingyu-1313022355.cos.ap-chengdu.myqcloud.com/LXGWWenKai-Bold.ttf',

      success(res) {
        console.log('res', res);
      },
      fail(err) {
        console.log('err', err);
      },
    });

    const weatherInfo = ref({
      textDay: '',
      temp: '',
      windDirDay: '',
      windScaleDay: '',
      humidity: '',
      vis: '',
    });

    function getocoder(city) {
      const _this = this;
      //调用地址解析接口
      qqmapsdk.geocoder({
        //获取表单传入地址
        address: city, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
        success: function(res) {//成功后的回调
          console.log(res);
          const result = res.result;
          const latitude = result.location.lat;
          const longitude = result.location.lng;
          //根据地址解析在地图上标记解析地址位置
          getWeather(longitude,latitude)
        },
        fail: function(error) {
          console.error(error);
        },
        complete: function(res) {
          console.log(res);
        }
      })
    }

    async function getWeather(longitude, latitude) {
      console.log(longitude);
      console.log(latitude);
      const response = await WeatherService.getCurrentCity(`${longitude.toFixed(2).toString()},${latitude.toFixed(2).toString()}`);
      const data = await UtilService.responseHandle(response);
      const daily = data?.now;
      weatherStore.textCode = daily?.icon
      weatherInfo.value = {
        textDay: daily?.text,
        temp: daily?.temp,
        windDirDay: daily?.windDir,
        windScaleDay: daily?.windScale,
        humidity: daily?.humidity,
        vis: daily?.vis,
      };
    }

    watch(currCity,()=> {
      getocoder(toRaw(toRaw(cityStore.currCity)[0]).name)
    })

    watch(props, (newProps) => {
      getWeather(
        newProps.longitude,
        newProps.latitude
      )
    });

    function getAliasWeather(textDay){
      let alias = ''
      switch (textDay){
        case '晴':
          alias = '阳光明媚'
          break
        case '多云':
          alias = '阴云密布'
          break
        case '小雨':
          alias = '和风细雨'
          break
        case '大雨':
          alias = '倾盆大雨'
          break
        case '雪':
          alias = '白雪皑皑'
          break
      }
      return alias
    }

    return {
      weatherInfo,
      width,
      weatherStore,
      getAliasWeather
    };
  },
};
</script>

<style>
.weather-content{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    background-color:rgba(255, 255, 255, 0.4);
    height: 250px;
    bottom: 32px;
    left: 32px;
    border-radius: 16px;
    padding-left: 32px;
    padding-right: 32px;
    font-family: 'yingqu';
}
.textday{
    font-size: 80px;
}
</style>
