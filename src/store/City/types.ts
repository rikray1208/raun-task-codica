import {List} from "../../types/IWeatherDetailResponse";

export interface CityState {
    city: string,
    list: List[] | []
    isLoading: boolean,
    error: string
}