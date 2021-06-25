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
            <p>Titre : { film.title }</p>
            <p>Directeur : { film.director }</p>
            <p>producteur : { film.producer }</p>
            <p>Episode : { film.episode_id }</p>
            <p>date de sortie : { film.release_date }</p>
        </div>
    )
});


