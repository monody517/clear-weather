<template>

</template>

<script>
import { Image } from '@tarojs/components'
import dizhi from '../../images/dizhi.png'
import ChooseCityModal from "../../../core/components/ChooseCityModal";
import {useCityStore} from "../../../stores/city";

export default {
  setup() {

    const store = useCityStore()

    function change() {
      store.click()
    }

    return () => {
      return (
        <view>
          <Image
            onTouchstart={()=>change()}
            src={dizhi} style="width: 16px;height: 16px;marginLeft: 8px"
          />
          {<ChooseCityModal />}
        </view>
      )

    }
  }
}
</script>

<style>
</style>
