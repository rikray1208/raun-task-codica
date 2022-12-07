import {IWeatherResponse} from "../types/IWeatherResponse";
import {ICity} from "../store/Cities/types";

export function transformToICity(data: IWeatherResponse ): ICity {

    return {
        name: data.name,
        icon: data.weather[0].icon,
        temp: data.main.temp,
        max: data.main.temp_max,
        min: data.main.temp_min
    }

}

export function formatTemp(value: number): number {
    return Math.round(value - 273.15)
}
