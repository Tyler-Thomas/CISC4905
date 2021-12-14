import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Navigate } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { render } from 'react-dom'
import Character from './Character';
import App from './App';
import Home from './Home';


class Selector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            charName: this.props.character,
            charImage: './4905images/'+this.props.character[0]+'.png'
        }
    }
    render() {
        console.log(this.state.charImage)
        return (

            <div className='Select'>
                
                    <div className="Chars">
                        <Link to={"/" + this.state.charName[1]}>{this.state.charName[0]}</Link>

                    </div>
                    <div className='img'>
                    <img className='Portrait' id="imgs" src={this.state.charImage} alt='No portrait'/>

                    </div>

                    

                

                
            </div>
        );
    }
}

export default Selector;
