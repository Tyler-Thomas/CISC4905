import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Character from './Character.jsx';
import Home from './Home.jsx';

function App() {
  console.log('hello from App!')
  let chars=[['Lyn',0],['Hector',1],['Eliwood',2],['Florina',3],['Hawkeye',4]];
  
  return (
    <div className="App">
    <Router>
    
      <Switch>
        <Route exact path="/" component={Home}/>
        {chars.map(char=>{ return <div key={char}><Route exact path={"/" + char[1]} component={<Character character={char[1]} />} /></div>})}

      </Switch>
    
    </Router>
    
    </div>
  );
}

export default App;
