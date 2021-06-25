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
            <p>Model : { starship.model }</p>
            <p>Taille : { starship.length }</p>
            <p>Capacité : { starship.cargo_capacity }</p>
            <p>Coût : { starship.cost_in_credits }</p>
            <p>Classe : { starship.starship_class }</p>
            <p>Consumables : { starship.consumables }</p>
            <p>Equipage : { starship.crew }</p>
            <p>Taux d'hyperdrive : { starship.hyperdrive_rating }</p>
            <p>Vitesse maximum : { starship.max_atmosphering_speed }</p>
            <p>Pilotes : { starship.pilots }</p>
            <p>Passagers : { starship.passengers }</p>
            <p>MGLT : { starship.MGLT }</p>
            <p>Fabricant : { starship.manufacturer }</p>
        </div>
    )
});


