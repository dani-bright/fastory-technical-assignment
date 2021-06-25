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
            <p>{ starship.name }</p>
            <p>{ starship.length }</p>
            <p>{ starship.cargo_capacity }</p>
            <p>{ starship.cost_in_credits }</p>
            <p>{ starship.starship_class }</p>
        </div>
    )
});


