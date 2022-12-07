import React, {FC} from 'react';
import errorImage from '../../assets/error.png'
import {LinkButton} from "../../components/ui";
import classes from "./PageNotFound.module.scss"

const PageNotFound: FC = () => {

    return (
        <div className={classes.container}>
            <img
                className={classes.container__image}
                src={errorImage}
                alt='error'
            />
            <h1 className={classes.container__title}>Такої сторінки не існує!</h1>
            <LinkButton route={'/'}>На головну</LinkButton>
        </div>
    );
};

export default PageNotFound;