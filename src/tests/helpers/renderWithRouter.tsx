import React from 'react';
import {MemoryRouter} from "react-router-dom";
import {AppRouter} from "../../components";
import {render} from "@testing-library/react";


const RenderWithRouter = (component: React.ReactNode, initialRoute:string)  => {

    return render(
                <MemoryRouter initialEntries={[initialRoute]}>
                    <AppRouter/>
                    {component}
                </MemoryRouter>
    )
};

export default RenderWithRouter;