import { SetFilms } from '../action-creator/setFilms';

const initialState : [] = [];

const films = (state = initialState, action : any) => {
    switch (action.type) {
        case SetFilms:
            return action.payload.films;

        default:
            return state;
    }
};

export default films;