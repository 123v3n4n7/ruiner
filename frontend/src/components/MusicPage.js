import React, {Component} from "react";
import {connect} from 'react-redux';
import {dataAction} from '../actions/index';

class Player extends Component {
    constructor(props){
        super(props);
        this.state={
            playing: false,
            indexOfTrack: 0
        }
    }
    render(){
        return(<div className="Player">
        </div>)
    }
}


export default MusicPage;
