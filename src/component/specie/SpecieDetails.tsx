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
            <p>{ specie.name }</p>
            <p>{ specie.average_lifespan }</p>
            <p>{ specie.classification }</p>
            <p>{ specie.eye_colors }</p>
            <p>{ specie.language }</p>
        </div>
    )
});


