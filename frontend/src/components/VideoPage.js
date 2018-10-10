import React, {Component} from "react";
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


class VideoPage extends Component {

    render() {
        return(
            <div>
                <div className ="card border-secondary mb-7 divBlock">
                    <iframe className="card-top" width="1040" height="315" src="https://www.youtube.com/embed/X7QdxkCnaTA"/>
                        <div className = "card-body">
                            <h5 className = "card-title">Ruiner gameplay</h5>
                        </div>
                </div>
            </div>)
    }
}


export default VideoPage;
