import AddCity from "./index";
import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {renderWithRedux} from "../../tests/helpers/renderWithRedux";

describe('AddCity tests', () => {
    test('input data entry', () => {
       renderWithRedux(<AddCity/>)
        const testValue = 'test value';
        expect(screen.getByRole('input')).toContainHTML('');
        userEvent.type(screen.getByRole('input'), testValue);
        expect(screen.getByRole('input')).toContainHTML(testValue);
    })
})