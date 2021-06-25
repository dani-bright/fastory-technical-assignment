import { combineReducers } from 'redux';
import films from './films';
import peoples from './peoples';
import planets from './planets';
import species from './species';
import starships from './starships';
import vehicles from './vehicles';

export default combineReducers({
    films,
    peoples,
    vehicles,
    species,
    starships,
    planets,
});