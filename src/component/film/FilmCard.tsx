import * as React from 'react';
import { FC, memo, useContext } from 'react';
import { PopupContext } from '../../context/PopupContext';
import { IFilm } from '../../interface/IFilm';
import { FilmDetails } from './FilmDetails';

export type FilmCardProps = {
    film : IFilm;
}
export const FilmCard : FC<FilmCardProps> = memo(props => {
    const { film } = props;
    const { popup } = useContext(PopupContext);

    const onCardClick = () => {
        popup.show(
            'details du film',
            <FilmDetails film={ film }/>
        );
    }

    return (
        <div className="card" onClick={ onCardClick }>
            <p>{ film.title }</p>
        </div>
    )
});
