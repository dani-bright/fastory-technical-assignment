import { SetPlanets } from '../action-creator/setPlanets';

const initialState : [] = [];

const planets = (state = initialState, action : any) => {
    switch (action.type) {
        case SetPlanets:
            return action.payload.planets;

        default:
            return state;
    }
};

export default planets;