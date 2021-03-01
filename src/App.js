
import './App.css';
import Player from './component/Player/Player';
import playerData from './fakeData/data.json';
import { useEffect, useState } from 'react';
import Salary from './component/Salary/Salary';

function App() {
  const [data, setData] = useState([]);
  const [player, setPlayer] = useState([]);
  
    useEffect(() => {
      // fetch('api.mocki.io/v1/e20c8986')
      // .then(res => res.json())
      // .then(data=> setData(data))
      setData(playerData);
      console.log(playerData);
      const names = data.map(data => data.name)
      // console.log(names)
    }, [])

    const handleAddPlayer = (handleAddPlayer) => {
      const newSelect = [...player, data];
      setPlayer(newSelect)
  }

  return (
    <div className="App">
      
      <h1>Player loaded:{data.length}</h1>
      <h3>Player Added:{player.length}</h3>
      <Salary player={player}></Salary>
      <ul>
        {
          data.map(data => <Player data={data.name} salary={data.salary} email={data.email} img={data.img} key={data.name} handleAddPlayer={handleAddPlayer}></Player>)
        }
      </ul>
    </div>
  );
}

export default App;
