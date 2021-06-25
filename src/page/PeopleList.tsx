import * as React from 'react';
import { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { PeopleCard } from '../component/people/PeopleCard';
import { HOCSearchable } from '../hoc/HOCSearchable';
import { IPeople } from '../interface/IPeople';

export interface IPeopleListProps {
    data : IPeople[];
}

export const PeopleList : FC<IPeopleListProps> = (props) : ReactElement => {
    const { data } = props;

    return (
        <section>
            <div className="list">
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


export const SmartPeopleList = connect(mapStateToProps)(HOCSearchable(PeopleList));
