import { SetStarships } from '../action-creator/setStarships';

const initialState : [] = [];

const starships = (state = initialState, action : any) => {
    switch (action.type) {
        case SetStarships:
            return action.payload.starships;

        default:
            return state;
    }
};

export default starships;