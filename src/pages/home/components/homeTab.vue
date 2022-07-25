<template>
    <view class="dizhi">
        <image src="../../images/dizhi.png" style="width: 16px;height: 16px;marginLeft: 16px"/>
        <view>{{currentCity}}</view>
        <view style="width: 16px;height: 16px;marginRight: 16px">{{''}}</view>
    </view>
</template>

<script lang="ts">

export default ({
    props: ['currentCity']
})
</script>

<style lang="stylus">
.dizhi{
    width:100%;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between
}
</style>