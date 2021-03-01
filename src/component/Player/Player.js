import React from 'react';
const Player = (props) => {
    const playerStyle = {border: '1px solid red', margin: '10px', padding: '10px', width: '210px', height: '300px', float: 'left', backgroundColor: 'lightgray'}
    const imgStyle = {width: '200px', height: '155px'}
    const buttonStyle = {backgroundColor: 'lightblue', borderRadius: '5px'}
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div style={playerStyle}>
             <img style={imgStyle} src={props.img} alt=""/>
            <h3>{props.data}</h3>
            <h5>salary: ${props.salary}</h5>
            {/* <h5>email: {props.email}</h5> */}
            <button style={buttonStyle}  onClick={() => handleAddPlayer(props.handleAddPlayer)}>Add Player</button>
            
        </div>
    );
};

export default Player;