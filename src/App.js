import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Route,Switch,NavLink} from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Timer from './Timer';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap';


class NavigationBar extends Component{
  render(){
    return(
      <div>
        <Breadcrumb className="Bread" >
        <BreadcrumbItem ><NavLink to='/'>Home</NavLink></BreadcrumbItem>
        <BreadcrumbItem ><NavLink to='/Calculator'>Calculator</NavLink></BreadcrumbItem>
        <BreadcrumbItem><NavLink to='Timer'>Timer</NavLink></BreadcrumbItem>
        </Breadcrumb>
      </div>
    )
  }
}

class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <NavigationBar/>
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Calculator' component={Calculator}/>
          <Route path='/Timer' component={Timer}/>
          </Switch>
          


        </div>
      </Router>
    )
  }
}

export default App;

