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
            <p>{ vehicle.name }</p>
            <p>{ vehicle.length }</p>
            <p>{ vehicle.cargo_capacity }</p>
            <p>{ vehicle.cost_in_credits }</p>
            <p>{ vehicle.vehicle_class }</p>
        </div>
    )
});


