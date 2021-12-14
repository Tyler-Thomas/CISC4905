import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


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
        <div className='backbutton'>
        <Link className='back' to='/'>
        <button className="backb">Back</button>
        </Link>
        </div>
        <div>
    {this.state.character} 
    </div>
    </div>
  );
}
}

export default Character;
