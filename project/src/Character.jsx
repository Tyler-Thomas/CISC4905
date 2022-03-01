import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';


const Character=({character})=> {
  const [votes,setVotes]=React.useState({charVotes:[]});
  const [distr, setDistr]=React.useState([0,0,0,0,0,0]);
  let stats=[0,0,0,0,0,0];
  let sum=0;
  React.useEffect(() => {
    fetch('/votes')
      .then((res) => res.json())
      .then((data) =>({ 
            votes:data.source.votes,
            charVotes:data.source.chars[character.index-1].charVotes,
             }))
            .then(data=>{
        console.log(data);
        for(let i=0;i<data.charVotes.length;i++){
            stats[data.votes[data.charVotes[i]].value-1]++;
            sum+=data.votes[data.charVotes[i]].value;
            console.log(sum);
        }
        if(data.charVotes.length!==0)
        stats[5]=sum/data.charVotes.length;
        console.log(stats)
        setDistr(stats);
        setVotes(data);
        console.log(stats);
        
      });
  },[]);

    return (
      <div className="Char">
        <Navigation />
        <div className='backbutton'>
          <Link className='back' to='/'>
            <button className="backb">Back</button>
          </Link>
        </div>
        <div>
          {character.name}
        </div>
        <div className='histogram'>
          <div className='histobox' style={{ height: `${distr[0]/votes.charVotes.length*50}%`, backgroundColor: 'red' }}>1</div>
          <div className='histobox' style={{ height: `${distr[1]/votes.charVotes.length*50}%`, backgroundColor: 'orange' }}>2</div>
          <div className='histobox' style={{ height: `${distr[2]/votes.charVotes.length*50}%`, backgroundColor: 'yellow' }}>3</div>
          <div className='histobox' style={{ height: `${distr[3]/votes.charVotes.length*50}%`, backgroundColor: 'green' }}>4</div>
          <div className='histobox' style={{ height: `${distr[4]/votes.charVotes.length*50}%`, backgroundColor: 'blue' }}>5</div>
          <div>Average: {distr[5]}</div>
        </div>
        <div>
          <Link to={'/vote/' + character.index}>
            Your Vote
          </Link>
        </div>
      </div>
    );
  }


export default Character;
