import { defineStore } from 'pinia';

export const useWeatherStore = defineStore("weather", {
    state:() => {
        return {
            textDay: '',
            count: 0
        }
    },
    actions: {
        add() { 
            console.log('11111');
            
            this.count++
        }
    }
})