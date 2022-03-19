import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';
import Selector from './Selector';

const Home = ({ chars }) => {
    return (
        <div className="Home">
            <Navigation/>
            <p>Welcome to FE Community Rankings. The purpose of this site is to <br></br>
            be able to glean at a glance how the community views various Fire Emblem Characters.<br/>
            You can get started by clicking on any of the characters below.</p>
            {chars.map(char => <div key={char.index}><Selector character={char.name} /></div>)}
        </div>
    );
}

export default Home;