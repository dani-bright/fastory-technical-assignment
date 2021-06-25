import * as React from 'react';
import { FC, memo } from 'react';
import { IVehicle } from '../../interface/IVehicle';

export type VehicleDetailsProps = {
    vehicle : IVehicle;
}
export const VehicleDetails : FC<VehicleDetailsProps> = memo(props => {
    const { vehicle } = props;

    return (
        <div className="card">
            <p>Nom : { vehicle.name }</p>
            <p>Taille : { vehicle.length }</p>
            <p>Capacité : { vehicle.cargo_capacity }</p>
            <p>Coût : { vehicle.cost_in_credits }</p>
            <p>Classe : { vehicle.vehicle_class }</p>
        </div>
    )
});


