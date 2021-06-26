import * as React from 'react';
import { FC, ReactElement } from 'react';
import spinner from '../asset/spinner.gif';

export interface ILoaderProps {
    percentage : number
}

export const Loader : FC<ILoaderProps> = ({ percentage }) : ReactElement => {
    return (
        <div className="loader">
            <img src={ spinner } alt="spinner"/>
            <p>{ percentage }%</p>
        </div>
    )
};
