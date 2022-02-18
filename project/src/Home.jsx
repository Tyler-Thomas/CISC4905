import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Selector from './Selector';

const Home = ({ chars }) => {
    return (
        <div className="Home">
            <h1>Hello from Home</h1>
            {chars.map(char => <div key={char}><Selector character={char.name} /></div>)}
        </div>
    );
}

export default Home;