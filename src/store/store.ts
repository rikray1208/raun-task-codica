import {configureStore} from "@reduxjs/toolkit";
import Cities from "./Cities/slice";
import City from "./City/slice"


export const store = configureStore({
    reducer: {
        Cities,
        City
    }
})

export type RootState = ReturnType<typeof store.getState>;