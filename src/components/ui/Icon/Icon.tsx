import React, {FC} from 'react';
import {IconType, IconTypes} from "./IconTypes";


interface IconProps {
    type: IconType
}

const Icon: FC<IconProps> = ({type}) => {

    function getIcon(IType: IconType): JSX.Element {
        return  IconTypes.get(IType) as JSX.Element;
    }

    return (
        <>
            {getIcon(type)}
        </>
    );
};

export default Icon;