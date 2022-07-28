<template>
  <view class="modal">
    <view class="modal-content">
      <view class="content-title">选择地址</view>
      <view class="content1">
        <view
          class="content-province"
          v-for="item of province"
          :key="item.code"
          @click="console.log('1111')"
        >
          {{ item.name }}
        </view>
<!--        <view-->
<!--          class="content-province"-->
<!--          v-for="item of city"-->
<!--          :key="item.code">-->
<!--          {{ item.name }}-->
<!--        </view>-->
      </view>
    </view>
  </view>
</template>

<script>
import {ref} from "vue";

const { province, city } = require('province-city-china/data');
export default {
  name: "ChooseCityModal",

  setup() {
    const currProvince = ref('11')
    const currProCity = ref([])
    const currCity = ref({})

    function getCity(allCity) {

    }

    return {
      province,city,currProvince,currProCity,currCity
    }
  }

}
</script>

<style>
.modal{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5000;
  background-color: rgba(0,0,0,0.65);
}
.modal-content{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.content-title{
  padding-top: 32px;
  padding-bottom: 32px;
  font-size: 32px;
}
.content1{
  height: 500px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-province{
  padding-top: 16px;
  padding-bottom: 16px;

}
</style>
