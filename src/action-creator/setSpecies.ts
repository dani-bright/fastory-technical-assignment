import { ISpecie } from '../interface/ISpecie';

export const SetSpecies = 'specie/set-species';

export const setSpecies = (species : ISpecie[]) => {
    return {
        type : SetSpecies,
        payload : { species }
    };
};