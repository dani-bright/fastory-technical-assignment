import * as React from 'react';
import { FC, ReactElement } from 'react';
import spinner from '../asset/spinner.gif';

export const Loader : FC = () : ReactElement => {
    return (
        <div className="loader">
            <img src={ spinner } alt="spinner"/>
        </div>
    )
};
