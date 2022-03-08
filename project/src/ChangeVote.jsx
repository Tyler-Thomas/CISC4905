import React, {Component} from 'react';
import Navigation from './Navigation';
import { useStorageState, login } from './login';
import './App.css';


const ChangeVote=({character})=>{
    const [user, setUser] = useStorageState('User', 'user-context');
    const [vote, setVote]= React.useState(0);
    const [voteBase, setvoteBase]=React.useState({votes:[],charVotes:[],userVotes:[]});
    const includesArr=(arr1,arr2)=>{
        for(let i=0; i<arr1.length; i++){
            let arr= arr1[i]
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
                if(includesArr(data.userVotes,data.charVotes[i])){
                    setVote(data.votes[data.charVotes[i]].value);
                    i=data.charVotes.length;
                }
            }
            setvoteBase(data);
          });
      },[]);
      
    let msg2=vote===0?<p>You have not cast a vote for this character yet.</p>:<p>Your vote: {vote}</p>;
    let msg;
    const submitVote=(event)=>{
        event.preventDefault();
        try{
         fetch("/votes", {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              
            },
            body: JSON.stringify({usr:user, ch:character.index, vote:vote}),
          })
          .then((response) => response.text())
          .then((data)=>{
              console.log(data);
          })
        }
        catch(err){console.log(err.message)}
    }
    
    if(user==='User')
    msg=<p>You are not logged in. In order to cast or change your vote, you must be logged in.</p>;
    else
    msg=(
        <div>
        <form onSubmit={submitVote}>
            <label>
                1
                <input type='radio' value={1} checked={false} onChange={()=>setVote(1)}/>
            </label>
            <label>
                2
                <input type='radio' value={2} checked={false} onChange={()=>setVote(2)}/>
            </label>
            <label>
                3
                <input type='radio' value={3} checked={false} onChange={()=>setVote(3)}/>
            </label>
            <label>
                4
                <input type='radio' value={4} checked={false} onChange={()=>setVote(4)}/>
            </label>
            <label>
                5
                <input type='radio' value={5} checked={false} onChange={()=>setVote(5)}/>
            </label>
            <input type='submit' value='Submit'/>
            </form>
        {msg2}
        </div>
    )

    
        return(
            <div className='Char'>
            <Navigation/>
            <div className='charName'>
            {character.name}
            <div className='PorBox'>
            <img className='Portrait' id={`imgs2${character.name}`} src={`./4905images/${character.name}.png`} alt='No portrait'/>  
            </div>     
             </div>
            {msg}
            </div>
        )
    
}

export default ChangeVote;