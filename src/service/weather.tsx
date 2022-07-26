import Taro, { request } from '@tarojs/taro';

export interface WeatherInfo {
    tempMax: string;
    tempMin: string;
    windDirDay: string;
    windSpeedDay: string;
    humidity: string;
    vis: string;
}

const WeatherService = {
    // 首页获取当前城市
    getCurrentCity(cityStr) {
        return request({
            url: `https://devapi.qweather.com/v7/weather/3d?location=${cityStr}&key=f92436e214ca428eb79f1a9cf8dade98`,
            method: 'GET',
        })
    }
}

export default WeatherService