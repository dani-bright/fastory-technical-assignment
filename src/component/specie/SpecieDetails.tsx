import * as React from 'react';
import { FC, memo } from 'react';
import { ISpecie } from '../../interface/ISpecie';

export type SpecieDetailsProps = {
    specie : ISpecie;
}
export const SpecieDetails : FC<SpecieDetailsProps> = memo(props => {
    const { specie } = props;

    return (
        <div className="card">
            <p>Nom : { specie.name }</p>
            <p>Espérance de vie moyenne : { specie.average_lifespan }</p>
            <p>Classification : { specie.classification }</p>
            <p>Couleur des yeux : { specie.eye_colors }</p>
            <p>Langue : { specie.language }</p>
        </div>
    )
});


