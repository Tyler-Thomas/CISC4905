import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Character from './Character.jsx';
import Home from './Home.jsx';

function App() {
  console.log('hello from App!')
  let chars=[['Lyn',0],['Hector',1],['Eliwood',2],['Florina',3],['Hawkeye',4]];
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  console.log(data)
  return (
    <div className="App">
    <Router>
    
      <Switch>
        <Route exact path="/" render={(props)=><Home chars={chars}></Home>}/>
        {chars.map(char=>{ return <Route exact path={"/" + char[1]} key={char} render={(props)=><Character character={char[1]} />} />})}

      </Switch>
    
    </Router>
    
    </div>
  );
}

export default App;
