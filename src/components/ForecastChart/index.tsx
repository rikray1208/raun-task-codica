import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {useAppSelector} from "../../hooks/reduxHooks";
import {formatTemp} from "../../utils/helpers";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },

    },
};

const ForecastChart = () => {
    const {list, city} = useAppSelector(state => state.City);

    const labels = list.map((el) => el.dt_txt).slice(0, 6);
    const temp = list.map(el => formatTemp(el.main.temp)).slice(0, 6);

    const data = {
        labels,
        datasets: [
            {
                label: city,
                data: temp,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return <Line options={options} data={data}/>;
};

export default ForecastChart;