import React, {Component} from "react";
import {connect} from 'react-redux';
import {dataAction} from '../actions/index';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, DropdownButton, NavItem, NavDropdown} from 'react-bootstrap';

class DataProvider extends Component {
    componentDidMount(){
        this.props.fetchCatalog();
    }
    render() {
        return(<div>
                {this.props.data.map((test, id) => (
                <div key = {id}>
                    <Link to = {`products/${test.id}`}>{test.name}</Link>
                </div>
        ))}
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        data: state.dataReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCatalog: () => {
            dispatch(dataAction.fetchCatalog());
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(DataProvider);