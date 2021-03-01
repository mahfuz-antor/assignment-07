import React from 'react';
const Player = (props) => {
    return (
        <div>
            <h1>The player name is: {props.data}</h1>
        </div>
    );
};

export default Player;