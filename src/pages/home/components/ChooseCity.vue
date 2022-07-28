<template>

</template>

<script>
import { ref } from 'vue';
import { Image } from '@tarojs/components'
import dizhi from '../../images/dizhi.png'
import ChooseCityModal from "../../../core/components/ChooseCityModal";

export default {
  setup() {
    let modalOpen = ref(false)

    function change() {
      modalOpen.value = !modalOpen.value
    }

    return () => {
      return (
        <view>
          <Image
            onTouchstart={()=>change()}
            src={dizhi} style="width: 16px;height: 16px;marginLeft: 8px"
          />
          {modalOpen.value === true && <ChooseCityModal/>}
        </view>
      )

    }
  }
}


</script>

<style>
</style>
