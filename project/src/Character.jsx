import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';


class Character extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: this.props.character
    }
  }
  render() {
    return (
      <div className="Char">
        <Navigation />
        <div className='backbutton'>
          <Link className='back' to='/'>
            <button className="backb">Back</button>
          </Link>
        </div>
        <div>
          {this.state.character.name}
        </div>
        <div className='histogram'>
          <div className='histobox' style={{ height: '10%', backgroundColor: 'red' }}>1</div>
          <div className='histobox' style={{ height: '20%', backgroundColor: 'orange' }}>2</div>
          <div className='histobox' style={{ height: '30%', backgroundColor: 'yellow' }}>3</div>
          <div className='histobox' style={{ height: '40%', backgroundColor: 'green' }}>4</div>
          <div className='histobox' style={{ height: '50%', backgroundColor: 'blue' }}>5</div>
        </div>
        <div>
          <Link to={'/vote/' + this.state.character}>
            Your Vote
          </Link>
        </div>
      </div>
    );
  }
}

export default Character;
