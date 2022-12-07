import {createAsyncThunk} from "@reduxjs/toolkit";
import WeatherService from "../../api/WeatherService";
import {ICity} from "./types";
import {isAxiosError} from "axios";
import {transformToICity} from "../../utils/helpers";

export const addCity = createAsyncThunk<ICity, string>(
    'cities/addCity',
    async (param, {rejectWithValue}) => {
        try {
            const res = await WeatherService.getCurrentWeather(param);
            return transformToICity(res.data)

        }  catch (err) {

            if (isAxiosError(err)) {
                return rejectWithValue(err.response!.data.message)
            }
            throw err
        }
    }
)

export const updateCity = createAsyncThunk<ICity, string>(
    'cities/updateCity',
    async (param) => {
        const response = await WeatherService.getCurrentWeather(param);
        return transformToICity(response.data)
    }
)