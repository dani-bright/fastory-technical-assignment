import axios from 'axios';
import * as React from 'react';
import { FC, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setStarships } from '../action-creator/setStarships';
import { StarshipCard } from '../component/starship/StarshipCard';
import { HOCSearchable } from '../hoc/HOCSearchable';
import { IStarship } from '../interface/IStarship';

export interface IStarshipListProps {
    data : IStarship[];
}

export const StarshipList : FC<IStarshipListProps> = (props) : ReactElement => {
    const { data } = props;

    return (
        <section>
            <div className="list">
                { data.map((starship, index) => <StarshipCard key={ index } starship={ starship }/>) }
            </div>
        </section>
    )
};

interface IStoreState {
    starships : IStarship[]
}

const mapStateToProps = (state : IStoreState) => ({
    data : state.starships,
    property : 'name'
})


export const SmartStarshipList = connect(mapStateToProps)(HOCSearchable(StarshipList));
