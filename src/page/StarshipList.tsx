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
    setStarships : (starships : IStarship[]) => any;
}

export const StarshipList : FC<IStarshipListProps> = (props) : ReactElement => {
    const { data, setStarships } = props;
    useEffect(() => {
        (async () => {
            const peoples = await axios.get('http://localhost:3001/starship');
            console.log(peoples)
            setStarships(peoples.data)
        })()
    }, []);

    const speakWookie = async () => {
        const peoples = await axios.get('http://localhost:3001/starship?wookie=true');
        setStarships(peoples.data);
    }

    return (
        <section>
            <button onClick={ speakWookie }>wookie</button>
            <div style={ { display : 'flex', flexWrap : 'wrap' } }>
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

const mapDispatchToProps = (dispatch : Dispatch) => ({
    setStarships : (starships : IStarship[]) => dispatch(setStarships(starships)),
})

export const SmartStarshipList = connect(mapStateToProps, mapDispatchToProps)(HOCSearchable(StarshipList));
