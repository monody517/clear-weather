import { defineStore } from 'pinia';

export const useWeatherStore = defineStore("weather", {
    state:() => {
        return {
            textCode: 100,
        }
    },
})