<template>
  <view class="modal">
    <view class="modal-content">
      <view class="content-title">选择地址</view>
      <view class="content1">
        <view class="scroll">
          <view
            class="content-province"
            v-for="item of province"
            :key="item.code"
            @tap="getCity(item)"
            :class="{active: item.province === currProvince}"
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
import {ref} from 'vue'
const { province, city } = require('province-city-china/data');
export default {
  name: "ChooseCityModal",

  setup() {
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
    const currProvince = ref('11')
    const currProCity = ref([])
    const currCity = ref()

    function getCity(selectPro) {
      console.log(selectPro)
      currProCity.value = []
      currProvince.value = selectPro.province
      city.map(item=>{
        if(item.province === selectPro.province){
          currProCity.value.push(item)
        }
      })
    }

    function clickCity(city){
      currCity
    }

    getCity({
        code: "110000",
      name: "北京市",
      province: "11"
      })

    return {
      province,city,currProvince,currProCity,currCity,getCity,clickCity
    }

    /*return () => {*/
    /*  return (*/
    /*    <view className="modal">*/
    /*      <view className="modal-content">*/
    /*        <view className="content-title">选择地址</view>*/
    /*        <view className="content1">*/
    /*          <ScrollView scrollY className="scroll">*/
    /*            {*/
    /*              province.map(item=> {*/
    /*                return (*/
    /*                  <view*/
    /*                    className="content-province"*/
    /*                    onClick={()=>{getCity('111')}}*/
    /*                  >*/
    /*                    {item.name}*/
    /*                  </view>*/
    /*                )*/
    /*              })*/
    /*            }*/
    /*          </ScrollView>*/
    /*          <ScrollView scrollY className="scroll">*/
    /*            {*/
    /*              city.map(item=> {*/
    /*                return (*/
    /*                  <view*/
    /*                    className="content-province"*/
    /*                    onClick={()=>getCity('111')}*/
    /*                  >*/
    /*                    {item.name}*/
    /*                  </view>*/
    //                 )
    //               })
    //             }
    //           </ScrollView>
    //       </view>
    //     </view>
    // </view>
    //   )
    // }
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
