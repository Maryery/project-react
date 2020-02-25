import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect } from "react-router-dom";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
        };
    };

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    handlePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
    };

    submitForm = async (event) => {
        event.preventDefault();
        fetch('http://34.89.93.186:8080/apiv1/register',{
            method: 'POST',
            body: JSON.stringify ({
                username:this.state.email,
                password: this.state.password
            }),
            headers:{
                'content-Type': 'application/json'
            },
        });
    }
    render = () => {
        const { email, password } = this.state;
        return (
            <div>
                <h2>Registrate</h2>
                <form onSubmit = {this.submitForm}>
                    <input type="text" value={email} placeholder="Introduce tu email" onChange={this.handleEmail} />
                    <input type="password" value={password} placeholder="introduce tu contraseña" onChange={this.handlePassword} />
                    <input type="submit" value="Registrarse" />
                </form>
                <Link to='/home'>Back</Link>
            </div>
        );
    };
}