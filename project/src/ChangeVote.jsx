import React, {Component} from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { useStorageState, login } from './login';
import './App.css';


const ChangeVote=({character})=>{
    const [user, setUser] = useStorageState('User', 'user-context');
    const [vote, setVote]= React.useState(0);
    const [comment, setComment]=React.useState('')
    const [voteBase, setvoteBase]=React.useState({votes:[],charVotes:[],userVotes:[]});
    /*const includesArr=(arr1,arr2)=>{
        for(let i=0; i<arr1.length; i++){
            let arr= arr1[i];
            if(arr.length!==arr2.length)
                continue;
            let a=true;
            for(let i=0;i<arr.length;i++){
                 if (arr[i]!==arr2[i])
                     a=false;
            }
             if(a)
                 return true;
        }
        return false;
    }
    */
    React.useEffect(() => {
        fetch('/votes')
          .then((res) => res.json())
          .then((data) =>({ 
                votes:data.source.votes,
                charVotes:data.source.chars[character.index-1].charVotes,
                userVotes:user==='User'?[]:data.source.users[data.source.userList.indexOf(user)].userVotes
                 }))
                .then(data=>{
            console.log(data);
            for(let i=0;i<data.charVotes.length;i++){
                if(data.userVotes.includes(data.charVotes[i])){
                    setVote(data.votes[data.charVotes[i]].value);
                    setComment(data.votes[data.charVotes[i]].comment);
                    i=data.charVotes.length;
                }
            }
            setvoteBase(data);
          });
      },[]);
      
    let msg2=vote===0?<p>You have not cast a vote for this character yet.</p>:<p>Your vote: {vote}</p>;
    let msg;
    const submitVote=(event)=>{
        //event.preventDefault();
        try{
         fetch("/votes", {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              
            },
            body: JSON.stringify({usr:user, ch:character.index, vote:vote, comm:comment}),
          })
          .then((response) => response.text())
          .then((data)=>{
              console.log(data);
          })
          
        }
        catch(err){console.log(err.message)}
    }
    const handleCommentChange=(event)=>{
        setComment(event.target.value);
    }
    if(user==='User')
    msg=<p>You are not logged in. In order to cast or change your vote, you must be logged in.</p>;
    else
    msg=(
        <div>
        <form onSubmit={submitVote}>
            <label>
                1
                <input type='radio' value={1} checked={vote===1} onChange={()=>setVote(1)}/>
            </label>
            <label>
                2
                <input type='radio' value={2} checked={vote===2} onChange={()=>setVote(2)}/>
            </label>
            <label>
                3
                <input type='radio' value={3} checked={vote===3} onChange={()=>setVote(3)}/>
            </label>
            <label>
                4
                <input type='radio' value={4} checked={vote===4} onChange={()=>setVote(4)}/>
            </label>
            <label>
                5
                <input type='radio' value={5} checked={vote===5} onChange={()=>setVote(5)}/>
            </label><br/>
            <label>
                Comment:
                <textarea value={comment} onChange={(handleCommentChange)} />
            </label>
            <input type='submit' value='Submit'/>
            </form>
        {msg2}
        </div>
    )

    
        return(
            <div className='Char'>
            <Navigation/>
            <div className='backbutton'>
           <Link className='back' to={`/${character.name}`}>
            <button className="backb">Back</button>
          </Link>
        </div>
            <div className='charName'>
            {character.name}
            <div className='PorBox'>
            <img className='Portrait' id={`imgs2${character.name}`} src={`./4905images/${character.name}.png`} alt='No portrait'/>  
            </div>     
             </div>
             <p>This page is where you will give this character a numerical rating based on their in-game performance.<br></br>
             You are free to rank them however you want, but it is encouraged that you use these criteria for your ratings:<br/>
             1: Among the worst units in the game <br/>
             2: Mediocre <br/>
             3: Average <br/>
             4: Above Average <br/>
             5: Among the best units in the game <br/></p>
            {msg}
            </div>
        )
    
}

export default ChangeVote;