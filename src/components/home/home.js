import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect } from "react-router-dom";
import './home.css'

let Home = (props) => {
    return (
        <div className="container">
            <h1>BIENVENIDO A NODEPOP</h1>
            <h2>¿Tienes cuenta?</h2>
            <Link to='/login'><div className="login">LOGIN</div></Link>
            <h2>¿No tienes cuenta?</h2>
            <Link to="/register"><div className="register">REGISTRATE</div></Link>
        </div>
    );
}

export default Home;