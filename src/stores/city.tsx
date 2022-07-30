import { defineStore } from 'pinia';
import cityService from "../service/city";
import UtilService from "../service/util";

export const useCityStore = defineStore("city", {
  state:() => {
    return {
      cityData: [],
      showModal: false,
      currCity: {},
      cityList: []
    }
  },
  actions: {
    click() {
      this.showModal = !this.showModal
    },
    async getCityData() {
      const response = await cityService.getCity()
      const data = await UtilService.responseHandle(response)
      this.cityData = data.data
    }
  }
})

