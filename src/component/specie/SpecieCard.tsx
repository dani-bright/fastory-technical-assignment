import * as React from 'react';
import { FC, memo, useContext } from 'react';
import { PopupContext } from '../../context/PopupContext';
import { ISpecie } from '../../interface/ISpecie';
import { SpecieDetails } from './SpecieDetails';

export type SpecieCardProps = {
    specie : ISpecie;
}
export const SpecieCard : FC<SpecieCardProps> = memo(props => {
    const { specie } = props;
    const { popup } = useContext(PopupContext);

    const onCardClick = () => {
        popup.show(
            'details de l\'espèce',
            <SpecieDetails specie={ specie }/>
        );
    }

    return (
        <div className="card" onClick={ onCardClick }>
            <p>{ specie.name }</p>
        </div>
    )
});
