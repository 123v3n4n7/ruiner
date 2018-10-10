import React, {Component} from "react";
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import MainPage from "./MainPage";
import Products from './Products';
import VideoPage from './VideoPage';
import mainReducers from '../reducers/index';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


let store = createStore(mainReducers, applyMiddleware(thunk));


class Bar extends Component {
    constructor(props){
        super(props);
        this.state = {dropdownOpen: false};
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.toggle =this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    onMouseEnter()  {
        this.setState({dropdownOpen: true})
    };

    onMouseLeave() {
        this.setState({dropdownOpen: false})
    };
    render() {
        return (
      <div>
        <Navbar className="color1" light expand="md" fixed="top">
            <Nav navbar>
              <NavItem className="divBlock">
                  <NavLink href="/about/"><h5>Главная</h5></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="divBlock color1" onMouseOver={this.onMouseEnter}
              onMouseLeave = {this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav className="color1">
                  <h5>Меню</h5>
                </DropdownToggle>
                <DropdownMenu right className="sliderButton">
                  <DropdownItem href="/products/1">
                    <h5>Галерея</h5>
                  </DropdownItem>
                  <DropdownItem href="/video/">
                    <h5>Видео</h5>
                  </DropdownItem>
                  <DropdownItem href="/products/3">
                    <h5>Музыка</h5>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
        </Navbar>
      </div>
    );
    }
}

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <header >
                           <Bar/>
                        </header>
                        <div className="divMenu container">
                            <Switch>
                                <Route exact path="/" component = {MainPage}/>
                                <Route exact path="/products/:product_id/" component={Products}/>
                                <Route exact path="/about/" component={MainPage}/>
                                <Route exact path="/video/" component={VideoPage}/>
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>

            </Provider>
        )
    }
}


export default App;