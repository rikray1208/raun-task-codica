import reducerCities, {citiesActions} from './slice';
import {CitiesState} from "./types";
const {setError, removeCity} = citiesActions;

const defState: CitiesState = {
    cities: [{name: 'Kiev', icon: '10d', max: 10, min: 9, temp: 12}],
    isLoading: true,
    error: ''
}

describe('cities reduser test', () => {

    test('set error', () => {
        expect(reducerCities(defState, setError('errorText'))).toEqual({
            cities: [{name: 'Kiev', icon: '10d', max: 10, min: 9, temp: 12}],
            isLoading: true,
            error: 'errorText'
        })
    })

    test('remove city', () => {
        expect(reducerCities(defState, removeCity('Kiev'))).toEqual({
            cities: [],
            isLoading: true,
            error: ''
        })
    })

})