import axios from 'axios';
import * as  React from 'react';
import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Link, Route } from 'react-router-dom';
import { Dispatch } from 'redux';
import { setFilms } from './action-creator/setFilms';
import { setPeoples } from './action-creator/setPeoples';
import { setPlanets } from './action-creator/setPlanets';
import { setSpecies } from './action-creator/setSpecies';
import { setStarships } from './action-creator/setStarships';
import { setVehicles } from './action-creator/setVehicles';
import './App.css';
import { Loader } from './component/Loader';
import { PopupProvider } from './context/PopupContext';
import { IFilm } from './interface/IFilm';
import { IPeople } from './interface/IPeople';
import { IPlanet } from './interface/IPlanet';
import { ISpecie } from './interface/ISpecie';
import { IStarship } from './interface/IStarship';
import { IVehicle } from './interface/IVehicle';
import { SmartFilmList } from './page/FilmList';
import { SmartPeopleList } from './page/PeopleList';
import { SmartPlanetList } from './page/PlanetList';
import { SmartSpecieList } from './page/SpecieList';
import { SmartStarshipList } from './page/StarshipList';
import { SmartVehicleList } from './page/VehicleList';

export interface IAppProps {
    setPeoples : (peoples : IPeople[]) => any;
    setFilms : (films : IFilm[]) => any;
    setPlanets : (planets : IPlanet[]) => any;
    setSpecies : (species : ISpecie[]) => any;
    setStarships : (starships : IStarship[]) => any;
    setVehicles : (vehicles : IVehicle[]) => any;
}

const App : FC<IAppProps> = (props) => {
    const { setVehicles, setPeoples, setFilms, setPlanets, setSpecies, setStarships } = props;
    const [showLoader, setShowLoader] = useState(true);
    const [percentage, setPercentage] = useState(0);
    useEffect(() => {
        (async () => {
            const peoples = await axios.get('http://localhost:3001/people');
            setPeoples(peoples.data);
            setPercentage(17)
            const films = await axios.get('http://localhost:3001/film');
            setFilms(films.data);
            setPercentage(34)
            const vehicles = await axios.get('http://localhost:3001/vehicle');
            setVehicles(vehicles.data);
            setPercentage(51)
            const species = await axios.get('http://localhost:3001/specie');
            setSpecies(species.data);
            setPercentage(68)
            const starships = await axios.get('http://localhost:3001/starship');
            setStarships(starships.data);
            setPercentage(85)
            const planets = await axios.get('http://localhost:3001/planet');
            setPlanets(planets.data);
            setPercentage(100)
            setShowLoader(false);
        })()
    }, [setFilms, setVehicles, setPeoples, setSpecies, setStarships, setPlanets]);
    return (
        <HashRouter>
            <PopupProvider>
                { showLoader ? <Loader percentage={ percentage }/> : null }
                <div className="menu">
                    <Link to="/">people</Link>
                    <Link to="/vehicules">vehicules</Link>
                    <Link to="/films">films</Link>
                    <Link to="/planets">planet</Link>
                    <Link to="/starships">starship</Link>
                    <Link to="/species">species</Link>
                </div>
                <Route exact path="/" component={ SmartPeopleList }/>
                <Route exact path="/vehicules" component={ SmartVehicleList }/>
                <Route exact path="/films" component={ SmartFilmList }/>
                <Route exact path="/planets" component={ SmartPlanetList }/>
                <Route exact path="/starships" component={ SmartStarshipList }/>
                <Route exact path="/species" component={ SmartSpecieList }/>
            </PopupProvider>
        </HashRouter>

    );
}

const mapDispatchToProps = (dispatch : Dispatch) => ({
    setFilms : (films : IFilm[]) => dispatch(setFilms(films)),
    setPeoples : (peoples : IPeople[]) => dispatch(setPeoples(peoples)),
    setPlanets : (planets : IPlanet[]) => dispatch(setPlanets(planets)),
    setSpecies : (species : ISpecie[]) => dispatch(setSpecies(species)),
    setStarships : (starships : IStarship[]) => dispatch(setStarships(starships)),
    setVehicles : (vehicles : IVehicle[]) => dispatch(setVehicles(vehicles)),
})

export const SmartApp = connect(undefined, mapDispatchToProps)(App);

export default App;
