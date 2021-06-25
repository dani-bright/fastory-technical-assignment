import { SetSpecies } from '../action-creator/setSpecies';

const initialState : [] = [];

const species = (state = initialState, action : any) => {
    switch (action.type) {
        case SetSpecies:
            return action.payload.species;

        default:
            return state;
    }
};

export default species;