import axios from 'axios';
import * as React from 'react';
import { FC, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setVehicles } from '../action-creator/setVehicles';
import { VehicleCard } from '../component/vehicle/VehicleCard';
import { HOCSearchable } from '../hoc/HOCSearchable';
import { IVehicle } from '../interface/IVehicle';

export interface IVehicleListProps {
    data : IVehicle[];
    setVehicles : (vehicles : IVehicle[]) => any;
}

export const VehicleList : FC<IVehicleListProps> = (props) : ReactElement => {
    const { data, setVehicles } = props;
    useEffect(() => {
        (async () => {
            const peoples = await axios.get('http://localhost:3001/vehicle');
            console.log(peoples)
            setVehicles(peoples.data)
        })()
    }, []);

    const speakWookie = async () => {
        const peoples = await axios.get('http://localhost:3001/vehicle?wookie=true');
        setVehicles(peoples.data);
    }

    return (
        <section>
            <button onClick={ speakWookie }>wookie</button>
            <div style={ { display : 'flex', flexWrap : 'wrap' } }>
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

const mapDispatchToProps = (dispatch : Dispatch) => ({
    setVehicles : (vehicles : IVehicle[]) => dispatch(setVehicles(vehicles)),
})

export const SmartVehicleList = connect(mapStateToProps, mapDispatchToProps)(HOCSearchable(VehicleList));
