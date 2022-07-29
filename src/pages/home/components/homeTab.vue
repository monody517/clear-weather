<template>
    <view class="dizhi" :style="{width: width}">
        <choose-city />
        <view class="city">{{currCity[0]?.name}}</view>
        <view style="width: 16px;height: 16px;marginRight: 16px">{{''}}</view>
    </view>
</template>

<script lang="ts">
import Taro from '@tarojs/taro';
import ChooseCity from '../components/ChooseCity.vue'
import {useCityStore} from "../../../stores/city";
import {ref, watch, watchEffect} from "vue";
import {storeToRefs} from "pinia";
import { toRaw } from '@vue/reactivity';

const { province, city } = require('province-city-china/data');

export default ({
  props: ['currentCity'],

  components:{ChooseCity},

  setup(props) {
    city.push(
      {
        "code": "110100",
        "name": "北京市",
        "province": "11",
        "city": "01"
      },
      {
        "code": "120100",
        "name": "天津市",
        "province": "12",
        "city": "01"
      },
      {
        "code": "310100",
        "name": "上海市",
        "province": "31",
        "city": "01"
      },
      {
        "code": "500100",
        "name": "重庆市",
        "province": "50",
        "city": "01"
      },
      {
        "code": "710100",
        "name": "台湾省",
        "province": "71",
        "city": "01"
      },
      {
        "code": "810100",
        "name": "香港特别行政区",
        "province": "81",
        "city": "01"
      },
      {
        "code": "820100",
        "name": "澳门特别行政区",
        "province": "82",
        "city": "01"
      },
    )

    const width = Taro.pxTransform(750);
    const store = useCityStore()

    const {currCity} = storeToRefs(store)

    watch(currCity,(currCity,prev)=> {
      console.log('currCity',toRaw(currCity));
      console.log('prev',toRaw(prev));
    })

    watch(props, ( newProps )=>{
      const currCityObj = city.filter(item=>item.name === newProps.currentCity)
      console.log('currCityObj',currCityObj);
      store.currCity = currCityObj
    })
    return {
      width,currCity
    };
  },
});
</script>

<style lang="stylus">
.dizhi{
    position absolute;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    margin-top: 16px;
    left: 0
}
.city{
  font-size: 40px;
}
</style>
