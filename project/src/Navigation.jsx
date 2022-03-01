import React, {Component, useContext, useState} from 'react';

import { Link } from 'react-router-dom';
import {Navbar, NavbarBrand, Button} from 'react-bootstrap';
import { useStorageState, login } from './login';

function Navigation(){
    const [user, setUser] = useStorageState('User', 'user-context');
    const contextValue = { user, setUser };
        const loginLink=(user, setUser)=>{
            if(user==='User'){
                return <Navbar.Brand href="/login">Login</Navbar.Brand>
            }
            else{
                return (
                    
                    <NavbarBrand>
                    <Button onClick={()=>{setUser('User');}}>Logout</Button>
                    </NavbarBrand>
                )
            }
        }
        return(
            <login.Provider value={contextValue}>
            <login.Consumer>
               {({user,setUser})=>{
                    return (
            <div className='Nav'>
                <Navbar>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                           Hello {user}
                    </Navbar.Text>
                </Navbar.Collapse>
                {loginLink(user,setUser)}
                
                </Navbar>
            </div>
            )}}
            </login.Consumer>
            </login.Provider>
            
        )
    }


export default Navigation;