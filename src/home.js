import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect } from "react-router-dom";


let Home = (props) => {
    return (
        <div>
            <h1>BIENVENIDOS A MIL ANUNCIOS</h1>
            <h2>¿Tienes cuenta?</h2>
            <Link to='/login'>LOGIN</Link>
            <h2>¿No tienes cuenta?</h2>
            <Link to="/register">REGISTRATE</Link>
        </div>
    );
}

export default Home;