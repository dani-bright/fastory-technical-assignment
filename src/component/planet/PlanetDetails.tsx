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
            <p>Nom : { planet.name }</p>
            <p>Diamètre : { planet.diameter }</p>
            <p>Climat : { planet.climate }</p>
            <p>Gravité : { planet.gravity }</p>
            <p>population : { planet.population }</p>
            <p>Période orbitale : { planet.orbital_period }</p>
            <p>Terrain : { planet.terrain }</p>
            <p>Surface d'eau : { planet.surface_water }</p>
        </div>
    )
});


