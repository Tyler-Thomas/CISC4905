import React, {Component} from 'react';
import Navigation from './Navigation';


class ChangeVote extends Component{
    constructor(props){
        super(props)
        this.state={
        character: this.props.character
        }
        }
    render(){
        return(
            <div>
            <Navigation/>
            {this.state.character}
            </div>
        )
    }
}

export default ChangeVote;