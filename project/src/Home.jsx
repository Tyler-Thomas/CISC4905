import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';
import Selector from './Selector';

const Home = ({ chars }) => {
    return (
        <div className="Home">
            <Navigation/>
            {chars.map(char => <div key={char.index}><Selector character={char.name} /></div>)}
        </div>
    );
}

export default Home;