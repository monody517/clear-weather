<template>
  <view class="modal" v-if="store.showModal">
    <view class="modal-content">
      <view class="content-title">选择地址</view>
      <view class="content1">
        <view class="scroll">
          <view
            class="content-province"
            v-for="item of store.cityData"
            :key="item.code"
            @tap="getCity(item)"
            :class="{active: item === currProvince}"
            >
            {{item.name}}
          </view>
        </view>
        <view class="scroll">
          <view
            class="content-province"
            v-for="item of currProCity"
            :key="item.code"
            @tap="clickCity(item)"
            >
            {{item.name}}
          </view>

        </view>
      </view>
    </view>
  </view>
</template>

<script>
import {onMounted, ref} from 'vue'
import {useCityStore} from "../../stores/city";
import cityService from "../../service/city";
import UtilService from "../../service/util";

export default {
  name: "ChooseCityModal",

  setup() {
    const currProvince = ref('11')
    const currProCity = ref([])
    const currCity = ref()
    const store = useCityStore()

    function getCity(pro){
      currProvince.value = pro
      currProCity.value = pro?.pchilds
    }

    function clickCity(item) {
      store.currCity = item
      store.click()
    }

    return {
      currProvince,currProCity,currCity,getCity,clickCity,store
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
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.scroll {
  height: 500px;
  overflow: scroll;
  width: 50%;
  text-align: center;
}
.content-province{
  padding-top: 16px;
  padding-bottom: 16px;
}
.active{
  color: #2386FF
}
</style>
