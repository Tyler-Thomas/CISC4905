import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';


class Character extends Component{
    constructor(props){
        super(props)
        this.state={
        character: this.props.character
        }
        }
render(){ 
  return (
    <div className="Char">
    {this.state.character} 
    </div>
  );
}
}

export default Character;
