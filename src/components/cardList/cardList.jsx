import React from 'react';
import './cardList.css';
import { Card } from './../card/card.jsx';
export const CardList = ({ monsters }) => {
    console.log(monsters);
    return (
        <div className='cardList'>
            {
                monsters.map((monster) =>
                    <Card key={monster.id} monster={monster} />)
            }
        </div>
    );

};

