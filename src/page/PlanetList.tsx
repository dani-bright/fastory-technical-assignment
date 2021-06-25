import * as React from 'react';
import { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { PlanetCard } from '../component/planet/PlanetCard';
import { HOCSearchable } from '../hoc/HOCSearchable';
import { IPlanet } from '../interface/IPlanet';

export interface IPlanetListProps {
    data : IPlanet[];
}

export const PlanetList : FC<IPlanetListProps> = (props) : ReactElement => {
    const { data,  } = props;
    return (
        <section>
            <div className="list">
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



export const SmartPlanetList = connect(mapStateToProps)(HOCSearchable(PlanetList));
