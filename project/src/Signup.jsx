import React, {Component, useContext, useState, useEffect} from 'react';
import { Router, Redirect, withRouter } from 'react-router';
import { useStorageState, login } from './login';

const  Signup = ({history}) =>{

    const[usr, setUser]=React.useState('horse');
    const[pwd,setPwd]=React.useState('horse');
    const[msg,setMSG]=React.useState(<p/>)
    const addUser =  (event) =>{
        event.preventDefault();
        try{
         fetch("/users", {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              
            },
            body: JSON.stringify({usr:usr, pwd:pwd}),
          })
          .then((response) => response.text())
          .then((data) => {
              console.log(data);
              if(data==='-1')
              setMSG(<p>A user with that name already exists.<br/> Please try a different name, or try logging in.</p>)
              else if(data==='0'){
                  history.push("/login")
              }
        })
        
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
        <div>
        <form onSubmit={addUser}>
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
      {msg}
      </div>
    );

};

export default Signup;