import React from 'react';
import './card.css';
export const Card = props => {
    return (
        <div className='card-container'>
            <img src={'https://robohash.org/' + props.monster.id + '?set=set2&size=180x180'} alt='Seems like we encountered a problem :/' />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    );
}