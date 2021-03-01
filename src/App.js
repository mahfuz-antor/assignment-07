import logo from './logo.svg';
import './App.css';
import Player from './component/Player/Player';
import playerData from './fakeData/data.json';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
    useEffect(() => {
      setData(playerData);
      console.log(playerData);
      const names = data.map(data => data.name)
      console.log(names)
    }, [])
  return (
    <div className="App">
      <h1>Player loaded:{data.length}</h1>
      <ul>
        {
          data.map(data => <Player data={data.name}></Player>)
        }
      </ul>
      <Player></Player>
    </div>
  );
}

export default App;
