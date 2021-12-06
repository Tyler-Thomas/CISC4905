import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Character from './Character';
import Selector from './Selector';

function App() {
  let chars=[['Lyn',0],['Hector',1],['Eliwood',2],['Florina',3],['Hawkeye',4]];
  return (
    <div className="App">
      
     
      {chars.map(char=>{ return <Selector character={char}/>})}
      
    </div>
  );
      }

export default App;
