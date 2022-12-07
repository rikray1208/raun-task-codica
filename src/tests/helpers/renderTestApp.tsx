import React from 'react';
import {Provider} from "react-redux";
import {store} from "../../store/store";
import {MemoryRouter} from "react-router-dom";
import {render} from "@testing-library/react";
import {AppRouter} from "../../components";

interface Options {
    initialroute?: string,
    route: string
}

const RenderTestApp = (component: React.ReactNode, options: Options) => {
    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[options.route]}>
                <AppRouter/>
                {component}
            </MemoryRouter>
        </Provider>
    );
};

export default RenderTestApp;