import * as React from 'react';
import { FC, memo, useContext } from 'react';
import { PopupContext } from '../../context/PopupContext';
import { IPlanet } from '../../interface/IPlanet';
import { PlanetDetails } from './PlanetDetails';

export type PlanetCardProps = {
    planet : IPlanet;
}
export const PlanetCard : FC<PlanetCardProps> = memo(props => {
    const { planet } = props;
    const { popup } = useContext(PopupContext);

    const onCardClick = () => {
        popup.show(
            'details de la planète',
            <PlanetDetails planet={ planet }/>
        );
    }

    return (
        <div className="card" onClick={ onCardClick }>
            <p>{ planet.name }</p>
        </div>
    )
});
