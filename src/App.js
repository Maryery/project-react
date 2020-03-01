import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect } from "react-router-dom";
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import Filter from './components/filter/filter';
import DetailAd from './components/detailAd/detailAd';

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Registrarte</Link>
            </li>
          </ul>
        
        <hr />

          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/filter" component={Filter} />
            <Route path="/ad/:id" component={DetailAd} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </Router>
    );
  }
}
