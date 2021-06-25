import { IPeople } from '../interface/IPeople';

export const SetPeoples = 'people/set-peoples';

export const setPeoples = (peoples : IPeople[]) => {
    return {
        type : SetPeoples,
        payload : { peoples }
    };
};