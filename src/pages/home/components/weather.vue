<template>
  <view class="weather-content" :style="{width: width}">
      <view>
        <view class="textday">{{weatherInfo.textDay}}</view>
        <view>{{weatherInfo.tempMax+'℃'}}</view>
        <view>{{weatherInfo.tempMin+'℃'}}</view>
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
import WeatherService from '../../../service/weather.tsx';
import UtilService from '../../../service/util.tsx';
// import { WeatherInfo } from '../../../service/weather'

export default {
  props: ['latitude', 'longitude'],
  setup(props) {
    const width = Taro.pxTransform(638);

    const weatherInfo = ref({
      textDay: '',
      tempMax: '',
      tempMin: '',
      windDirDay: '',
      windScaleDay: '',
      humidity: '',
      vis: '',
    });

    watch(props, async (old, newProps) => {
      console.log(old);
      const response = await WeatherService.getCurrentCity(`${newProps.longitude.toFixed(2).toString()},${newProps.latitude.toFixed(2).toString()}`);
      const data = await UtilService.responseHandle(response);
      const daily = data.daily[0];
      weatherInfo.value = {
        textDay: daily.textDay,
        tempMax: daily.tempMax,
        tempMin: daily.tempMin,
        windDirDay: daily.windDirDay,
        windScaleDay: daily.windScaleDay,
        humidity: daily.humidity,
        vis: daily.vis,
      };
      console.log(weatherInfo.value);
    });
    return {
      weatherInfo,
      width,
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
}
.textday{
    font-size: 80px;
}
</style>
