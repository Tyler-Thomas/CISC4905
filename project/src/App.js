import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Character from './Character.jsx';
import Home from './Home.jsx';
import ChangeVote from './ChangeVote';
import Signup from './Signup';
import Login from './Login.jsx';

function App(props) {
  console.log('hello from App!')
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/chars")
      .then((res) => res.json())
      .then((data) =>{ 
        setData(data.source.characters)
        console.log('hello there!', {data})
      });
  }, []);
  console.log(data)
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home chars={data} />} />

          {data.map(char => 
            <Route exact path={"/" + char.name} key={char.name} render={(props)=>
              <Character character={char} />
            } />
          )}
          {data.map(char => <Route exact path={"/vote/" + char.index} key={char.index} render={(props)=><ChangeVote character={char.index} />} />)}
          <Route exact path= "/signup" render={routeProps => <Signup{...props}{...routeProps}/>}/>
          <Route exact path= "/login" render={routeProps => <Login{...props}{...routeProps}/>}/>
        </Switch>
      
      </Router>
    
    </div>
  );
}

export default App;
