import React, {Component} from "react";
import {connect} from 'react-redux';
import {dataAction} from '../actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: props.match.params.product_id,
        }
    }
    componentDidMount(){
        this.props.fetchProducts(this.state.productId);
    }
    render() {
        console.log(this.state.productId);
        console.log(this.props.data);
        return(<div>{this.props.data.map((product, id) => (
            <div className = "divBlock" key = {id}>
                <div className ="card border-secondary mb-3 divBlock">
                    <img className="card-img-top img-wrap" width = "25%" src={product.image}/>
                        <div className = "card-body">
                            <h5 className = "card-title">{product.name}</h5>
                            <p className = "card-text">{product.info}</p>
                        </div>
                </div>
            </div>
        ))}
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        data: state.productReducer,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (productId) => {
            dispatch(dataAction.fetchProducts(productId));
        }
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(Products);
