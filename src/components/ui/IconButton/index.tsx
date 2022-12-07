import React, {FC} from 'react';

import classes from "./IconButton.module.scss"
import Icon from "../Icon/Icon";
import {IconType} from "../Icon/IconTypes";


interface ImageButtonProps {
    type: IconType,
    disabled?: boolean,
    click?: (event: React.MouseEvent) => void,

}

const IconButton: FC<ImageButtonProps> = ({type, click, disabled }) => {

    return (
        <button
            data-testid="test-icon-button"
            disabled={disabled}
            className={classes.buttonStyle}
            onClick={click}
        >
            <Icon type={type}/>
        </button>
    );
};

export default IconButton;