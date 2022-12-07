import axios, {AxiosResponse} from "axios";
import {IWeatherResponse} from "../types/IWeatherResponse";
import {IWeatherDetailResponse} from "../types/IWeatherDetailResponse";

const API_KEY = '15c7e188828502812f36cdd0d5f31753';


export default class WeatherService {
    static async getCurrentWeather(city: string): Promise<AxiosResponse<IWeatherResponse>> {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    }

    static async getDetailWeather(city: string): Promise<AxiosResponse<IWeatherDetailResponse>> {
        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
    }
}
