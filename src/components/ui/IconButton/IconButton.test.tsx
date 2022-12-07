import {render} from "@testing-library/react";
import IconButton from "./index";
import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('IconButton test', () => {
    const onClick = jest.fn();

    test('render IconButton with icon"', () => {
        render(<IconButton type='reload'/>);
        expect(screen.getByTestId("test-icon-button")).toBeInTheDocument();
    })

    test('render IconButton disable', () => {
        render(<IconButton type='reload' disabled={true}/>);
        expect(screen.getByTestId("test-icon-button")).toBeInTheDocument();
        expect(screen.getByTestId("test-icon-button")).toBeDisabled();
    })

    test('test IconButton click', () => {
        render(<IconButton click={onClick} type='reload'/>);
        userEvent.click(screen.getByTestId("test-icon-button"));
        expect(screen.getByTestId("test-icon-button")).not.toBeDisabled();
        expect(onClick).toHaveBeenCalledTimes(1);
    })
})