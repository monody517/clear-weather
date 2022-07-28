<script>
import { ref } from 'vue';
import { View,Image } from '@tarojs/components'
import dizhi from '../../images/dizhi.png'

// const { province, city } = require('province-city-china/data');
export default {
  setup() {
    let modalOpen = ref(false)

    function change() {
      modalOpen.value = !modalOpen.value
      console.log('modalOpen.value',modalOpen.value);
    }

    console.log(modalOpen.value);

    return () => {
      return (
        <view>
          <Image
            onTouchstart={()=>change()}
            src={dizhi} style="width: 16px;height: 16px;marginLeft: 8px"
          />
          {
            modalOpen.value === true &&
            <View class="modal" onTouchstart={()=>change()}>
              <View>
                111
              </View>
            </View>
          }

        </view>
      )

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
