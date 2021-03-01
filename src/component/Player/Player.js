import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Player = (props) => {
    const playerStyle = {border: '1px solid red', margin: '10px', padding: '10px', width: '250px', height: '280px', float: 'left', backgroundColor: 'lightgray'}
    const imgStyle = {width: '200px', height: '155px'}
    const buttonStyle = {backgroundColor: 'lightblue', borderRadius: '5px'}
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div style={playerStyle}>
             <img style={imgStyle} src={props.img} roundedCircle/>
            <h5>{props.data}</h5>
            <h6>salary: ${props.salary}</h6>
            {/* <h5>email: {props.email}</h5> */}
            <button variant="warning" size="lg" style={buttonStyle}  onClick={() => handleAddPlayer(props.handleAddPlayer)}>Add Player</button>
            
        </div>
    );
};

export default Player;