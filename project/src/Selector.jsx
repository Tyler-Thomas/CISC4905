import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Navigate } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { render } from 'react-dom'
import Character from './Character';
import App from './App';
import Home from './Home';




const Selector = ({ character }) =>  {       
    const charImage= `./4905images/${character}.png`

    console.log(charImage)
    return (
        <div className='Select'>
                <div className="Chars">
                    <Link to={"/" + character}>{character}</Link>
                </div>

                <div className='img'>
                    <img className='Portrait' id="imgs" src={charImage} alt='No portrait'/>
                </div>
        </div>
    );
}


export default Selector;
