import { IFilm } from '../interface/IFilm';

export const SetFilms = 'film/set-films';

export const setFilms = (films : IFilm[]) => {
    return {
        type : SetFilms,
        payload : { films }
    };
};