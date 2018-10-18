import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Route,Switch,NavLink} from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Timer from './Timer';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap';


class Nav extends Component{
  render(){
    return(
      <div>
        <Breadcrumb>
        <BreadcrumbItem><NavLink to='/'>Home</NavLink></BreadcrumbItem>
        <BreadcrumbItem><NavLink to='/Calculator'>Calculator</NavLink></BreadcrumbItem>
        <BreadcrumbItem><NavLink to='Timer'>Timer</NavLink></BreadcrumbItem>
        </Breadcrumb>
      </div>
    )
  }
}

class App extends Component{
  render(){
    return(
      <router>
        <div>
          <Nav/>
          <Switch>
          <Router exact path='/' component={Home}/>
          <Router path='/Calculator' component={Calculator}/>
          <Router path='/Timer' component={Timer}/>
          </Switch>
          


        </div>
      </router>
    )
  }
}

export default App;

