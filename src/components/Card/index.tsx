import React, {FC} from 'react';
import classes from "./Card.module.scss"
import {Divider, IconButton, LinkButton} from "../ui";
import {useActions} from "../../hooks/reduxHooks";
import {formatTemp} from "../../utils/helpers";

import {MyColors} from "../ui/LinkButton";

interface CardProps  {
    max: number,
    min: number,
    city: string
    icon: string
}

const ICON_WIDTH = 152;

const Card: FC<CardProps> = ({ max, city, min, icon}) => {
   const {updateCity, removeCity} = useActions();

    return (
        <div className={classes.card}>
            <div className={classes.cardButtons}>
                <IconButton click={() => updateCity(city)} type='reload' disabled={false}/>
                <IconButton data-testid='remove' click={() => removeCity(city)} type='delete'/>
                <LinkButton data-testid='link' route={`/forecast/${city}`}>Детальніше</LinkButton>
            </div>
            <img width={ICON_WIDTH} alt={'#'} src={`http://openweathermap.org/img/wn/${icon}@4x.png`}/>
            <div className={classes.content}>
                <h1 className={classes.content__header}>{city}</h1>
                <Divider color={MyColors.SECONDARY}/>
                <div className={classes.weatherInfo}>
                    <div className={classes.itemContainer}>
                        <p className={classes.itemContainer__item}>
                            {formatTemp(max)}
                            <span className='absolute'>°</span>
                        </p>
                        {/*magic string*/}
                        <span className={classes.itemContainer__span}>
                            max
                        </span>
                    </div>
                    <div className={classes.itemContainer}>
                        <p className={classes.itemContainer__item}>
                            {formatTemp(min)}
                            <span className='absolute'>°</span>
                        </p>
                        {/*magic string*/}
                        <span className={classes.itemContainer__span}>
                            min
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;