<template>

</template>

<script>
import { Image } from '@tarojs/components'
import dizhi from '../../assets/images/dizhi.png'
import ChooseCityModal from "./ChooseCityModal";
import {useCityStore} from "../../stores/city";
import {onMounted} from "vue";
import cityService from "../../service/city";
import UtilService from "../../service/util";

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
