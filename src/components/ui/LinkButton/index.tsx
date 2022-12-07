import React, {FC, PropsWithChildren} from 'react';
import {Link} from "react-router-dom";

interface LinkBtnProps {
    color?: MyColors,
    route?: string
}

export enum MyColors {
    PRIMARY = 'myPrimary',
    SECONDARY = 'mySecondary',
    TERTIARY = 'myTertiary'
}

const LinkButton: FC<PropsWithChildren<LinkBtnProps>> = ({color= MyColors.PRIMARY, route= '/', children}) => {
    return (
        <Link
            to={route}
            className={'rounded-lg text-white px-4 py-1 transition-all active:scale-95 bg-' + color}
        >
            {children}
        </Link>
    );
};

export default LinkButton;