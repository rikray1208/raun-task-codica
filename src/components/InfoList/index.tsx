import React, {FC, useMemo} from 'react';
import {Divider} from "../ui";
import classes from './InfoList.module.scss';
import {useAppSelector} from "../../hooks/reduxHooks";
import {formatTemp} from "../../utils/helpers";
import {MyColors} from "../ui/LinkButton";

const ICON_WIDTH = 80;

const InfoList: FC = () => {
    const {city, list} = useAppSelector(state => state.City);
    const { main, wind, clouds } = list[0];

    const ITEMS = useMemo(() => {
        return [
            {name: 'Ощущается как:', value: formatTemp(main.feels_like) + '°C', isDivider: true},
            {name: 'Максимально:', value: formatTemp(main.temp_max) + '°C', isDivider: false},
            {name: 'Минимально:', value: formatTemp(main.temp_min) + '°C', isDivider: true},
            {name: 'Влажность:', value: main.humidity + '%', isDivider: false},
            {name: 'Облачность:', value: clouds.all + '%', isDivider: true},
            {name: 'Ветер:', value: wind.speed + 'км/ч', isDivider: false},
            {name: 'Направление:', value: wind.deg + '°', isDivider: false},
        ]
    }, [main, wind, clouds])


    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <h1> {city} <span className='ml-2'>{formatTemp(list[0].main.temp)} °C</span></h1>
                <img width={ICON_WIDTH} alt='icon' src={`http://openweathermap.org/img/wn/${list[0].weather[0].icon}@2x.png`}/>
            </div>
            {ITEMS.map(el =>
                <div key={el.name}>
                    <div className={classes.container__item}>
                        <h3>{el.name}</h3>
                        <span>{el.value}</span>
                    </div>
                    {el.isDivider &&
                        <Divider color={MyColors.SECONDARY}/>
                    }
                </div>
            )}
        </div>
    );
};

export default InfoList;