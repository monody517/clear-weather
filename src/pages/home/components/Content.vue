<template>
  <view>
    <view v-if="contentArr.length!==0" class="title-content">
      <view style="display:flex;flex-direction: column;">
        <view v-for="(item,index) of matchTags" :key="index" class="tags">
          {{item}}
        </view>
      </view>
      <view
      class="title"
      v-for="(item,index) of contentArr"
      :key="index"
      :style="{color: '#606266',marginTop: `${50*index}px`}"
      >
      {{ item }}
      </view>
    </view>
  </view>
</template>

<script>

import Taro from '@tarojs/taro';
import {ref, onMounted, watch} from 'vue';
import {toRaw} from "@vue/reactivity";
import {storeToRefs} from "pinia";
import {useCityStore} from "../../../stores/city";

const jinrishici = require('../../../utils/jinrishici');



export default {
  setup() {
    const contentRef = ref('');
    const contentArr = ref([]);
    const matchTags = ref([])
    const cityStore = useCityStore()
    const {currCity} = storeToRefs(cityStore)

    function getContent() {
      jinrishici.load((result) => {
        console.log('result', result);
        contentRef.value = result.data.content;
        contentArr.value = contentRef.value.split('，');
        matchTags.value = result.data.matchTags
      }, (err) => {
        console.log('err', err);
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
    }

    watch(currCity,()=> {
      getContent()
    })

    return {
      contentRef,
      contentArr,
      matchTags
    };
  },
};

</script>

<style>
.title-content{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 350px;
  margin-top: 250px;
}
.title {
  font-family: 'yingqu';
  font-size: 50px;
  writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
  writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
  letter-spacing:14px;
  margin-right: 3px;
}
.tags{
  font-family: 'yingqu';
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  background-color: rgb(219, 1, 1);
  border-radius: 30px;
  color: #fff;
  width: 40px;
  padding-left: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 10px;
}
</style>
