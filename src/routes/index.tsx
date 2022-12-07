import React from "react";
import Forecast from "../pages/Forecast";
import ForecastDetail from "../pages/ForecastDetail";
import ErrorPage from "../pages/PageNotFound";

export interface IRoute {
    path: RouteNames,
    element: React.ReactNode
}

export enum RouteNames {
    FORECAST = "/",
    DETAIL = "/forecast/:id",
    ERROR = '/error'
}

export const AppRoutes: IRoute[] = [
    {path: RouteNames.FORECAST, element: <Forecast/>},
    {path: RouteNames.DETAIL, element: <ForecastDetail/>},
    {path: RouteNames.ERROR, element: <ErrorPage/>},
]
