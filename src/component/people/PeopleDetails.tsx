import * as React from 'react';
import { FC, memo } from 'react';
import { IPeople } from '../../interface/IPeople';

export type PeopleDetailsProps = {
    people : IPeople;
}
export const PeopleDetails : FC<PeopleDetailsProps> = memo(props => {
    const { people } = props;

    return (
        <div className="card">
            <p>{ people.name }</p>
            <p>{ people.height }</p>
            <p>{ people.birth_year }</p>
            <p>{ people.eye_color }</p>
            <p>{ people.gender }</p>
        </div>
    )
});


