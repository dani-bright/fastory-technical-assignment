import * as React from 'react';
import { FC, memo } from 'react';
import { IFilm } from '../../interface/IFilm';

export type FilmDetailsProps = {
    film : IFilm;
}
export const FilmDetails : FC<FilmDetailsProps> = memo(props => {
    const { film } = props;

    return (
        <div className="card">
            <p>{ film.title }</p>
            <p>{ film.director }</p>
            <p>{ film.producer }</p>
            <p>{ film.episode_id }</p>
            <p>{ film.release_date }</p>
        </div>
    )
});


