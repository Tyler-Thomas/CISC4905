import React, {Component, useContext, useState} from 'react';

import { Link } from 'react-router-dom';
import {Navbar, NavbarBrand, Button} from 'react-bootstrap';
import { useStorageState, login } from './login';

function Navigation(){
    const [user, setUser] = useStorageState('User', 'user-context');
    const contextValue = { user, setUser };
        const loginLink=(user, setUser)=>{
            if(user==='User'){
                return <Navbar.Brand className="LoginLink" href="/login">Login</Navbar.Brand>
            }
            else{
                return (
                    
                    <NavbarBrand className="LoginLink">
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
                <Navbar className='Navs'>
                <Navbar.Brand className='NavHome' href="/">Home</Navbar.Brand>
                
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='NavText'>
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