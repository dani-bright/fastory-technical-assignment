import { IVehicle } from '../interface/IVehicle';

export const SetVehicles = 'vehicle/set-vehicles';

export const setVehicles = (vehicles : IVehicle[]) => {
    return {
        type : SetVehicles,
        payload : { vehicles }
    };
};