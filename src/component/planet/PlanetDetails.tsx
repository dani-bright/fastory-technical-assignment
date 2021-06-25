import * as React from 'react';
import { FC, memo } from 'react';
import { IPlanet } from '../../interface/IPlanet';

export type PlanetDetailsProps = {
    planet : IPlanet;
}
export const PlanetDetails : FC<PlanetDetailsProps> = memo(props => {
    const { planet } = props;

    return (
        <div className="card">
            <p>{ planet.name }</p>
            <p>{ planet.diameter }</p>
            <p>{ planet.climate }</p>
            <p>{ planet.gravity }</p>
            <p>{ planet.population }</p>
        </div>
    )
});


