export interface ICity {
    name: string,
    icon: string
    temp: number,
    min: number,
    max: number
}

export interface CitiesState {
    cities: ICity[] | [],
    isLoading: boolean,
    error: string
}