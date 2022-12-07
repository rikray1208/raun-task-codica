import {createAsyncThunk} from "@reduxjs/toolkit";
import WeatherService from "../../api/WeatherService";
import {IWeatherDetailResponse} from "../../types/IWeatherDetailResponse";

export const fetchForecast = createAsyncThunk<IWeatherDetailResponse, string>(
    'city/fetchForeCast',
    async (city) => {

        const response = await WeatherService.getDetailWeather(city);
        return response.data
    }
)