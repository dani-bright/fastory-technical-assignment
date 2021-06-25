import axios from 'axios';
import * as React from 'react';
import { FC, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setFilms } from '../action-creator/setFilms';
import { FilmCard } from '../component/film/FilmCard';
import { HOCSearchable } from '../hoc/HOCSearchable';
import { IFilm } from '../interface/IFilm';

export interface IFilmListProps {
    data : IFilm[];
    setFilms : (films : IFilm[]) => any;
}

export const FilmList : FC<IFilmListProps> = (props) : ReactElement => {
    const { data, setFilms } = props;
    useEffect(() => {
        (async () => {
            const peoples = await axios.get('http://localhost:3001/film');
            console.log(peoples)
            setFilms(peoples.data)
        })()
    }, []);

    const speakWookie = async () => {
        const peoples = await axios.get('http://localhost:3001/film?wookie=true');
        setFilms(peoples.data);
    }

    return (
        <section>
            <button onClick={ speakWookie }>wookie</button>
            <div style={ { display : 'flex', flexWrap : 'wrap' } }>
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

const mapDispatchToProps = (dispatch : Dispatch) => ({
    setFilms : (films : IFilm[]) => dispatch(setFilms(films)),
})

export const SmartFilmList = connect(mapStateToProps, mapDispatchToProps)(HOCSearchable(FilmList));
