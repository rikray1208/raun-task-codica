import React, {FC} from 'react';
import {AddCity} from '../../components';
import classes from './Forecast.module.scss';
import CardList from "../../components/CardsList";

const Forecast: FC = () => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.containerInput}>
                <AddCity/>
            </div>
            <div className={classes.cardsList}>
                <CardList/>
            </div>
        </div>
    );
};

export default Forecast;