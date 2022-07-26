<template>
  <view>
      <view>{{weatherInfo.tempMax}}</view>
      <view>{{weatherInfo.tempMin}}</view>
  </view>
</template>

<script lang="ts">
import WeatherService from "../../../service/weather"
import UtilService from "../../../service/util"
// import { WeatherInfo } from '../../../service/weather'
import { ref, watch } from 'vue'

export default {
    props:['latitude','longitude'],
    setup(props) {
        let weatherInfo = ref({
            tempMax: '',
            tempMin: '',
            windDirDay: '',
            windSpeedDay: '',
            humidity: '',
            vis: '',
        })

        watch(props,async (old,newProps)=>{
            console.log(old);
            const response = await WeatherService.getCurrentCity(newProps.longitude.toFixed(2).toString()+','+newProps.latitude.toFixed(2).toString())
            const data = await UtilService.responseHandle(response)
            const daily = data.daily[0]
            weatherInfo.value = {
                tempMax: daily.tempMax,
                tempMin: daily.tempMin,
                windDirDay: daily.windDirDay,
                windSpeedDay: daily.windSpeedDay,
                humidity: daily.humidity,
                vis: daily.vis,
            }
            console.log(weatherInfo.value);
        })
        return {
            weatherInfo
        }
    }
}
</script>

<style>

</style>