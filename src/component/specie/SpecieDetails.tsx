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
            <p>Couleur des cheveux : { specie.hair_colors }</p>
            <p>Langue : { specie.language }</p>
            <p>Taille moyenne : { specie.average_height }</p>
            <p>Appelation : { specie.designation }</p>
            <p>couleurs de peau : { specie.skin_colors }</p>
        </div>
    )
});


