import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {RootState, store} from "../store/store";
import {citiesActions} from "../store/Cities/slice";
import {cityActions} from "../store/City/slice";

const actions = {
    ...citiesActions,
    ...cityActions
}

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch)
}

export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;