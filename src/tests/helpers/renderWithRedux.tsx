import {store} from "../../store/store";
import {Provider} from "react-redux";
import React from "react";
import {render} from "@testing-library/react";

export const renderWithRedux = (component: React.ReactNode, initialState?: string) => {
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    )
}