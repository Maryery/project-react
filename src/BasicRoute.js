import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './register';

export default class BasicRoute extends React.Component {
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
          </Switch>
        </div>    
      </Router>
      
    );
  }
}  
