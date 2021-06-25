import * as React from 'react';
import { FC, memo, useContext } from 'react';
import { PopupContext } from '../../context/PopupContext';
import { IVehicle } from '../../interface/IVehicle';
import { VehicleDetails } from './VehicleDetails';

export type VehicleCardProps = {
    vehicle : IVehicle;
}
export const VehicleCard : FC<VehicleCardProps> = memo(props => {
    const { vehicle } = props;
    const { popup } = useContext(PopupContext);

    const onCardClick = () => {
        popup.show(
            'details du véhicule',
            <VehicleDetails vehicle={ vehicle }/>
        );
    }

    return (
        <div className="card" onClick={ onCardClick }>
            <p>{ vehicle.name }</p>
        </div>
    )
});
