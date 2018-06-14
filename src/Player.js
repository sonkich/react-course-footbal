import React from 'react';

const player = (props) => {
    return (
        <div className="player-container">
            <p>{props.name}</p>
            <p>{props.position}</p>
            <p>{props.team}</p>
        </div>
    );
};

export default player;