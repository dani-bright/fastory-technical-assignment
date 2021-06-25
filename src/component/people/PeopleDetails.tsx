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
            <p>Nom : { people.name }</p>
            <p>Taille : { people.height }</p>
            <p>Année de naissance : { people.birth_year }</p>
            <p>Couleur des yeux : { people.eye_color }</p>
            <p>genre : { people.gender }</p>
            <p>Couleur des cheveux : { people.hair_color }</p>
            <p>Couleur de peau : { people.skin_color }</p>
            <p>Masse : { people.mass }</p>
        </div>
    )
});


