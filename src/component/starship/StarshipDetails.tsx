import * as React from 'react';
import { FC, memo } from 'react';
import { IStarship } from '../../interface/IStarship';

export type StarshipDetailsProps = {
    starship : IStarship;
}
export const StarshipDetails : FC<StarshipDetailsProps> = memo(props => {
    const { starship } = props;

    return (
        <div className="card">
            <p>Nom : { starship.name }</p>
            <p>Taille : { starship.length }</p>
            <p>Capacité : { starship.cargo_capacity }</p>
            <p>Coût : { starship.cost_in_credits }</p>
            <p>Classe : { starship.starship_class }</p>
        </div>
    )
});


