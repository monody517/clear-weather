import { defineStore } from 'pinia';

interface city {
  code: string,
  name: string,
  province: string,
  city: string
}

interface cityStoreType{
  showModal:boolean,
  currCity: any,
  cityList: Array<any>
}

export const useCityStore = defineStore("city", {
  state:():cityStoreType => {
    return {
      showModal: false,
      currCity: {} as city,
      cityList: [] as Array<city>
    }
  },
  actions: {
    click() {
      this.showModal = !this.showModal
    }
  }
})

