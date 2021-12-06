import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import {BrowserRouter, Switch, Route, Navigate} from 'react-router-dom';
import {NavLink, Link} from 'react-router-dom';
import {render} from 'react-dom'
import Character from './Character';
import App from './App';


class Selector extends Component{
    constructor(props){
        super(props)
        this.state={
        charName: this.props.character
        }
        }
render(){ 
    const Char = ()=> (<Character character={this.state.charName[1]}/>)
  return (
     
      <div>
   <BrowserRouter>
    <div className="Char">
    <Link to={"/"+this.state.charName[1]}>{this.state.charName[0]}</Link>

    </div>
   
        <Switch>
            //<Route exact path="/" component={App}/>

            {//<Route exact path={"/"+this.state.charName[1]} component={Char}/>
}
            </Switch>       
   
  </BrowserRouter>
  
 </div>
  );
}
}

export default Selector;
