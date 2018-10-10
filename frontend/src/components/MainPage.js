import React, {Component} from "react";
import {connect} from 'react-redux';
import {dataAction} from '../actions/index';

class MainPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            images: {},
            id: 0,
        };
        this.rClick=this.rClick.bind(this);
        this.lClick=this.lClick.bind(this);
    }

    rClick =()=>{
        if(this.state.id<(this.state.images.length-1)){
            this.setState(prevState=>({id: prevState.id+1}));
        } else {
            this.setState(prevState=>({id: 0}));
        }
        console.log(this.state.id)
    };

    lClick =()=>{
       if(this.state.id == 0){
           this.setState(prevState=>({id: prevState.images.length-1}));
       }
       else{
           this.setState(prevState=>({id: prevState.id-1}));
       }
    };


    componentDidMount(){
        this.props.fetchContent();
        this.props.fetchContentImages();
    }

    render() {
        if(this.props.dataImages.length != 0){
            this.state.images=this.props.dataImages;
            return(<div>
                        <h3>
                            {this.props.data.MainPaige}
                        </h3>
                        <div>
                            <button className="sliderButton" onClick={this.lClick}><h5>Prev</h5></button>
                                <img src={this.state.images[this.state.id].image}/>
                            <button className="sliderButton" onClick={this.rClick}><h5>Next</h5></button>
                        </div>
                    </div>)}
        else {return('No data')}
    }
}

const mapStateToProps = state => {
    return{
        data: state.contentReducer,
        dataImages: state.contentImagesReducer,
    }
};

const mapDispatchToProps = dispatch => {
    return{
        fetchContent: () => {
            dispatch(dataAction.fetchContent());
        },
        fetchContentImages: () => {
            dispatch(dataAction.fetchContentImages())
        },
    }
};


export default connect (mapStateToProps, mapDispatchToProps)(MainPage);