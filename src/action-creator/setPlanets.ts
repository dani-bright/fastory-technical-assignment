import { IPlanet } from '../interface/IPlanet';

export const SetPlanets = 'planet/set-planets';

export const setPlanets = (planets : IPlanet[]) => {
    return {
        type : SetPlanets,
        payload : { planets }
    };
};