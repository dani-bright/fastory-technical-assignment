import * as React from 'react';
import { FC, memo, useContext } from 'react';
import { PopupContext } from '../../context/PopupContext';
import { IPeople } from '../../interface/IPeople';
import { PeopleDetails } from './PeopleDetails';

export type UserCardProps = {
    people : IPeople;
}
export const PeopleCard : FC<UserCardProps> = memo(props => {
    const { people } = props;
    const { popup } = useContext(PopupContext);

    const onCardClick = () => {
        popup.show(
            'details de la personne',
            <PeopleDetails people={ people }/>
        );
    }

    return (
        <div className="card" onClick={ onCardClick }>
            <p>{ people.name }</p>
        </div>
    )
});
