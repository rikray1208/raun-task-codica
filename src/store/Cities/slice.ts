import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CitiesState} from "./types";
import {addCity, updateCity} from "./asyncActions";

const initialState: CitiesState = {
    cities: JSON.parse(localStorage.getItem('cities') ?? '[]'),
    isLoading: true,
    error: ''
}

const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        removeCity(state, action: PayloadAction<string>) {
            state.cities = state.cities.filter(el => el.name !== action.payload);
            localStorage.setItem('cities', JSON.stringify(state.cities));
        },

        setError(state, action: PayloadAction<string>){
            state.error = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(addCity.pending, state => {
            state.isLoading = true;
        })
        builder.addCase(addCity.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.cities = [...state.cities, action.payload]
            localStorage.setItem('cities', JSON.stringify(state.cities));
        })
        builder.addCase(addCity.rejected, (state, action    ) => {
            state.isLoading = false;
            state.error = action.payload as string
        })

        builder.addCase(updateCity.pending, state => {
            state.isLoading = true;
        })
        builder.addCase(updateCity.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cities = state.cities.map(el =>
                el.name === action.payload.name ? action.payload : el
            )
            localStorage.setItem('cities', JSON.stringify(state.cities));
        })
        builder.addCase(updateCity.rejected, (state, action) => {
            state.isLoading = false;
            if( action.error.message ) {
                state.error = action.error.message;
            }
        })
    }
})

export const citiesActions = {...citiesSlice.actions, addCity, updateCity};
export default  citiesSlice.reducer;
