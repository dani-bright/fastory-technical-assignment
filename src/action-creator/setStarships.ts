import { IStarship } from '../interface/IStarship';

export const SetStarships = 'starship/set-starships';

export const setStarships = (starships : IStarship[]) => {
    return {
        type : SetStarships,
        payload : { starships }
    };
};