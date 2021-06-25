import axios from 'axios';
import * as React from 'react';
import { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setSpecies } from '../action-creator/setSpecies';
import { SpecieCard } from '../component/specie/SpecieCard';
import { HOCSearchable } from '../hoc/HOCSearchable';
import { ISpecie } from '../interface/ISpecie';

export interface ISpecieListProps {
    data : ISpecie[];
}

export const SpecieList : FC<ISpecieListProps> = (props) : ReactElement => {
    const { data } = props;

    return (
        <section>
            <div className="list">
                { data.map((specie, index) => <SpecieCard key={ index } specie={ specie }/>) }
            </div>
        </section>
    )
};

interface IStoreState {
    species : ISpecie[]
}

const mapStateToProps = (state : IStoreState) => ({
    data : state.species,
    property : 'name'
})


export const SmartSpecieList = connect(mapStateToProps)(HOCSearchable(SpecieList));
