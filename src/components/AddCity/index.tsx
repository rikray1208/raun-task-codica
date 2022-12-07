import React, {FC, useEffect, useState} from 'react';
import classes from './AddCity.module.scss';
import {useActions, useAppSelector} from "../../hooks/reduxHooks";
import {IconButton} from "../ui";


const AddCity: FC = () => {
    const [value, setValue] = useState("");
    const {addCity: addCityAction, setError} = useActions();
    const {cities, error} = useAppSelector(state => state.Cities);

    function addCity(e:  React.MouseEvent) {
        e.preventDefault();

        if(cities.find(el => el.name === value)) {
            return setError('Таке місто вже є!');
        }
        addCityAction(value)
    }

    useEffect(() => {
        if(cities.length === 4) {
            setError('Додано максимальну кількість міст!');
            const interval = setTimeout(() => {
                setError('')
            }, 3000)

            return () => {
                clearInterval(interval);
            }
        }
    }, [cities.length]);

    return (
        <form className={classes.container}>
            <input
                disabled={cities.length === 4}
                role='input'
                className={classes.container__input}
                placeholder='Введіть назву' value={value}
                onChange={(e) => setValue(e.target.value)} type="text"
            />
            <IconButton
                disabled={cities.length === 4}
                type='add'
                click={(event) => addCity(event)}
            />
            {error &&
                <p data-testid="test-error-block" className={classes.error}>
                    {error}
                </p>
            }
        </form>
    );
};

export default AddCity;