import {CityState} from "./types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchForecast} from "./asyncActions";

const initialState: CityState = {
    city: '',
    list: [],
    isLoading: true,
    error: ''
}

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchForecast.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(fetchForecast.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.city = action.payload.city.name;
            state.list = action.payload.list;
        })
        builder.addCase(fetchForecast.rejected, (state, action) => {
            state.isLoading = false;
            if ( action.error.message ) {
                state.error = action.error.message
            }
        })

    }
})

export const cityActions = {fetchForecast};
export default citySlice.reducer