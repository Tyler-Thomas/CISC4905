import React, {Component, useContext, useState} from 'react';
import { useStorageState, login } from './login';

const  Signup = () =>{

    const[usr, setUser]=React.useState('horse');
    const[pwd,setPwd]=React.useState('horse');
    const addUser = (user,pawd) =>{
        
        try{
        fetch("/users", {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({usr:user, pwd:pawd}),
          })
          .then((response) => response.json())
          .then((data) => {console.log({data})})
        }
        
        catch(err){console.log(err.message)}
    }
    
    const handleUserChange=(event)=>{
        setUser(event.target.value);
    }
    const handlePassChange=(event)=>{
        setPwd(event.target.value);
    }
    return(
        <form onSubmit={()=>addUser(usr,pwd)}>
        <label>
            Username:
          <textarea value={usr} onChange={(handleUserChange)} />
        </label>
        <label>
            Password:
            <textarea value={pwd} onChange={handlePassChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );

};

export default Signup;