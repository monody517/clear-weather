<template>
    <view class="dizhi" :style="{width: width}">
        <image src="../../images/dizhi.png" style="width: 16px;height: 16px;marginLeft: 8px"/>
        <view>{{currentCity}}</view>
        <view style="width: 16px;height: 16px;marginRight: 16px">{{''}}</view>
    </view>
</template>

<script lang="ts">
import Taro from '@tarojs/taro';

export default ({
  props: ['currentCity'],

  setup() {
    const width = Taro.pxTransform(750);

    return {
      width,
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
</style>
