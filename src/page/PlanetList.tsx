import axios from 'axios';
import * as React from 'react';
import { FC, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setPlanets } from '../action-creator/setPlanets';
import { PlanetCard } from '../component/planet/PlanetCard';
import { HOCSearchable } from '../hoc/HOCSearchable';
import { IPlanet } from '../interface/IPlanet';

export interface IPlanetListProps {
    data : IPlanet[];
    setPlanets : (planets : IPlanet[]) => any;
}

export const PlanetList : FC<IPlanetListProps> = (props) : ReactElement => {
    const { data, setPlanets } = props;
    useEffect(() => {
        (async () => {
            const peoples = await axios.get('http://localhost:3001/planet');
            console.log(peoples)
            setPlanets(peoples.data)
        })()
    }, []);

    const speakWookie = async () => {
        const peoples = await axios.get('http://localhost:3001/planet?wookie=true');
        setPlanets(peoples.data);
    }

    return (
        <section>
            <button onClick={ speakWookie }>wookie</button>
            <div style={ { display : 'flex', flexWrap : 'wrap' } }>
                { data.map((planet, index) => <PlanetCard key={ index } planet={ planet }/>) }
            </div>
        </section>
    )
};

interface IStoreState {
    planets : IPlanet[]
}

const mapStateToProps = (state : IStoreState) => ({
    data : state.planets,
    property : 'name'
})

const mapDispatchToProps = (dispatch : Dispatch) => ({
    setPlanets : (planets : IPlanet[]) => dispatch(setPlanets(planets)),
})

export const SmartPlanetList = connect(mapStateToProps, mapDispatchToProps)(HOCSearchable(PlanetList));
