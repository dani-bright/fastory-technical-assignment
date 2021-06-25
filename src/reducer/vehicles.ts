import { SetVehicles } from '../action-creator/setVehicles';

const initialState : [] = [];

const vehicles = (state = initialState, action : any) => {
    switch (action.type) {
        case SetVehicles:
            return action.payload.vehicles;

        default:
            return state;
    }
};

export default vehicles;