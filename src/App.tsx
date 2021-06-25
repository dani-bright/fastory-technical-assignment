import * as  React from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';
import './App.css';
import { PopupProvider } from './context/PopupContext';
import { SmartFilmList } from './page/FilmList';
import { SmartPeopleList } from './page/PeopleList';
import { SmartPlanetList } from './page/PlanetList';
import { SmartSpecieList } from './page/SpecieList';
import { SmartStarshipList } from './page/StarshipList';
import { SmartVehicleList } from './page/VehicleList';

function App() {

    return (
        <HashRouter>
            <PopupProvider>
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

export default App;
