import React from 'react';
import {Card} from "../index";
import CardSkeleton from "../Card/CardSkeleton";
import classes from './CardsList.module.scss';
import {useAppSelector} from "../../hooks/reduxHooks";

const CardsList = () => {
    const {cities} = useAppSelector(state => state.Cities)
    const colSkeleton = Math.abs(cities.length - 4);

    return (
            <div className={classes.list}>
                {cities.map(el =>
                    <Card key={el.name} max={el.max} min={el.min} city={el.name} icon={el.icon}/>
                )}
                { Array.from(Array(colSkeleton).keys()).map(el =>
                    <CardSkeleton key={el}/>
                )}
            </div>
    );
};

export default CardsList;