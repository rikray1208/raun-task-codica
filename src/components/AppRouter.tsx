import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AppRoutes} from "../routes";
import ErrorPage from "../pages/PageNotFound";


const AppRouter = () => {
    return (
        <Routes>
            {
                AppRoutes.map(route =>
                    <Route key={route.path} {...route} />
                )
            }
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    );
};

export default AppRouter;