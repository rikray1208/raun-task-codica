import React, {FC, useEffect} from 'react';
import classes from './ForecastDetail.module.scss';
import {useActions, useAppSelector} from "../../hooks/reduxHooks";
import {useParams} from "react-router-dom";
import {LinkButton} from "../../components/ui";
import {InfoList, InfoListSkeleton, ForecastChart, ForecastChartSkeleton} from "../../components";

const ForecastDetail: FC = () => {
    const {isLoading} = useAppSelector(state => state.City)
    const { fetchForecast } = useActions();
    const { id } = useParams();

    useEffect(() => {
        if( id ) {
            fetchForecast(id)
        }
    }, []);

    if (isLoading) {
        return (
            <div data-testid='ForecastDetail' className={classes.wrapper}>
                <InfoListSkeleton/>
                <div className={classes.chartContainer}>
                    <ForecastChartSkeleton/>
                </div>
                <LinkButton route={'/'}>На головну</LinkButton>
            </div>
        )
    }

    return (
        <div data-testid='ForecastDetail' className={classes.wrapper}>
            <InfoList/>
            <div className={classes.chartContainer}>
                <ForecastChart/>
            </div>
            <LinkButton route={'/'}>На головну</LinkButton>
        </div>
    );
};

export default ForecastDetail;