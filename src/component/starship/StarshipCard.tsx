import * as React from 'react';
import { FC, memo, useContext } from 'react';
import { PopupContext } from '../../context/PopupContext';
import { IStarship } from '../../interface/IStarship';
import { StarshipDetails } from './StarshipDetails';

export type StarshipCardProps = {
    starship : IStarship;
}
export const StarshipCard : FC<StarshipCardProps> = memo(props => {
    const { starship } = props;
    const { popup } = useContext(PopupContext);

    const onCardClick = () => {
        popup.show(
            'details du vaisseau',
            <StarshipDetails starship={ starship }/>
        );
    }

    return (
        <div className="card" onClick={ onCardClick }>
            <p>{ starship.name }</p>
        </div>
    )
});
