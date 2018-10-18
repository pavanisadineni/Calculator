import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './index.css';
import Home from './Home';
import Calculator from './Calculator';
import Timer from './Timer';
import App from './App';
import * as serviceWorker from './serviceWorker';


class Nav extends Component{
render(){
    return(
        <Router>
            <div>
                <App/>
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Calculator' component={Calculator}/>
            <Route path='/Timer' component={Timer}/>
            <Route component={Error}/>
            </Switch>
            </div>
            
            

        </Router>
    )

}

}
ReactDOM.render(<Nav/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
