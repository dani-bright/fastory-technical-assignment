import { SetPeoples } from '../action-creator/setPeoples';

const initialState : [] = [];

const peoples = (state = initialState, action : any) => {
    switch (action.type) {
        case SetPeoples:
            return action.payload.peoples;

        default:
            return state;
    }
};

export default peoples;