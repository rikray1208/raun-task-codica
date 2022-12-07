import React, {FC} from 'react';
import {MyColors} from "./LinkButton";

interface DividerProps {
    color?: MyColors
}

const Divider: FC<DividerProps> = ({ color = MyColors.TERTIARY }) => {
    return (
        <div className={'w-full h-px rounded-2xl bg-' + color}/>
    );
};

export default Divider;