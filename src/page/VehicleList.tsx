import * as React from 'react';
import { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { VehicleCard } from '../component/vehicle/VehicleCard';
import { HOCSearchable } from '../hoc/HOCSearchable';
import { IVehicle } from '../interface/IVehicle';

export interface IVehicleListProps {
    data : IVehicle[];
}

export const VehicleList : FC<IVehicleListProps> = (props) : ReactElement => {
    const { data } = props;

    return (
        <section>
            <div className="list">
                { data.map((vehicle, index) => <VehicleCard key={ index } vehicle={ vehicle }/>) }
            </div>
        </section>
    )
};

interface IStoreState {
    vehicles : IVehicle[]
}

const mapStateToProps = (state : IStoreState) => ({
    data : state.vehicles,
    property : 'name'
})

export const SmartVehicleList = connect(mapStateToProps)(HOCSearchable(VehicleList));
