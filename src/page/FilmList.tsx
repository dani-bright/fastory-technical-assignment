import * as React from 'react';
import { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { FilmCard } from '../component/film/FilmCard';
import { HOCSearchable } from '../hoc/HOCSearchable';
import { IFilm } from '../interface/IFilm';

export interface IFilmListProps {
    data : IFilm[];
}

export const FilmList : FC<IFilmListProps> = (props) : ReactElement => {
    const { data } = props;

    return (
        <section>
            <div className="list">
                { data.map((film, index) => <FilmCard key={ index } film={ film }/>) }
            </div>
        </section>
    )
};

interface IStoreState {
    films : IFilm[]
}

const mapStateToProps = (state : IStoreState) => ({
    data : state.films,
    property : 'title'
})

export const SmartFilmList = connect(mapStateToProps)(HOCSearchable(FilmList));
