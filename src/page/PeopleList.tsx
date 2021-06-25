import axios from 'axios';
import * as React from 'react';
import { FC, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setPeoples } from '../action-creator/setPeoples';
import { PeopleCard } from '../component/people/PeopleCard';
import { HOCSearchable } from '../hoc/HOCSearchable';
import { IPeople } from '../interface/IPeople';

export interface IPeopleListProps {
    data : IPeople[];
    setPeoples : (peoples : IPeople[]) => any;
}

export const PeopleList : FC<IPeopleListProps> = (props) : ReactElement => {
    const { data, setPeoples } = props;
    useEffect(() => {
        (async () => {
            const peoples = await axios.get('http://localhost:3001/people');
            console.log(peoples)
            setPeoples(peoples.data)
        })()
    }, []);

    const speakWookie = async () => {
        const peoples = await axios.get('http://localhost:3001/people?wookie=true');
        setPeoples(peoples.data);
    }

    return (
        <section>
            <button onClick={ speakWookie }>wookie</button>
            <div style={ { display : 'flex', flexWrap : 'wrap' } }>
                { data.map((people, index) => <PeopleCard key={ index } people={ people }/>) }
            </div>
        </section>
    )
};

interface IStoreState {
    peoples : IPeople[]
}

const mapStateToProps = (state : IStoreState) => ({
    data : state.peoples,
    property : 'name'
})

const mapDispatchToProps = (dispatch : Dispatch) => ({
    setPeoples : (peoples : IPeople[]) => dispatch(setPeoples(peoples)),
})

export const SmartPeopleList = connect(mapStateToProps, mapDispatchToProps)(HOCSearchable(PeopleList));
