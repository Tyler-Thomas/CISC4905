import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Selector from './Selector';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={ chars:this.props.chars }
    }

render(){
    console.log('Home')
    return(
        <div className="Home">
        
            {(this.state.chars).map(char=>{ return <div key={char}><Selector character={char}/></div>})}
            
            
        </div>
    );
}

}

export default Home;