import axios from 'axios';
import * as React from 'react';
import { FC, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setSpecies } from '../action-creator/setSpecies';
import { SpecieCard } from '../component/specie/SpecieCard';
import { HOCSearchable } from '../hoc/HOCSearchable';
import { ISpecie } from '../interface/ISpecie';

export interface ISpecieListProps {
    data : ISpecie[];
    setSpecies : (species : ISpecie[]) => any;
}

export const SpecieList : FC<ISpecieListProps> = (props) : ReactElement => {
    const { data, setSpecies } = props;
    useEffect(() => {
        (async () => {
            const peoples = await axios.get('http://localhost:3001/specie');
            console.log(peoples)
            setSpecies(peoples.data)
        })()
    }, []);

    const speakWookie = async () => {
        const peoples = await axios.get('http://localhost:3001/specie?wookie=true');
        setSpecies(peoples.data);
    }

    return (
        <section>
            <button onClick={ speakWookie }>wookie</button>
            <div style={ { display : 'flex', flexWrap : 'wrap' } }>
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

const mapDispatchToProps = (dispatch : Dispatch) => ({
    setSpecies : (species : ISpecie[]) => dispatch(setSpecies(species)),
})

export const SmartSpecieList = connect(mapStateToProps, mapDispatchToProps)(HOCSearchable(SpecieList));
