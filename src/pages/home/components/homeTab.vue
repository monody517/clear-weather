<template>
    <view class="dizhi" :style="{width: width}">
        <choose-city />
        <view class="city">{{store.currCity?.name}}</view>
        <view style="width: 16px;height: 16px;marginRight: 16px">{{''}}</view>
    </view>
</template>

<script lang="ts">
import Taro from '@tarojs/taro';
import ChooseCity from '../../../core/components/ChooseCity.vue'
import {useCityStore} from "../../../stores/city";
import {onMounted, watch} from "vue";
import {storeToRefs} from "pinia";

export default ({
  props: ['currentCity'],

  components:{ChooseCity},

  setup(props) {

    const width = Taro.pxTransform(750);
    const store = useCityStore()

    const {currCity} = storeToRefs(store)

    onMounted(()=>{
      store.getCityData()
    })

    watch(props, ( newProps )=>{
      store.currCity = {name:newProps.currentCity}
      console.log('store.currCity',store.currCity);
    })
    return {
      width,currCity,store
    };

    return {
      width,
      store
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
