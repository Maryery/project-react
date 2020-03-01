import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect } from "react-router-dom";
import './register.css';

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
        const requestOptions ={
            method:'POST',
            body: JSON.stringify ({
                username:this.state.email,
                password: this.state.password
            }),
            headers:{
                'Content-Type': 'application/json'
            },
        };
        fetch('http://34.89.93.186:8080/apiv1/register', requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    window.location= 'filter'
                } else {
                    alert(result.error)
                }
        })
            .catch(error=> alert(`error: ${error}`));
    }

    render = () => {
        const { email, password } = this.state;
        return (
            <div className='register-container'>
                <h2>CREA TU CUENTA</h2>
                <form onSubmit = {this.submitForm}>
                    <input className='email' type="text" value={email} placeholder="Introduce tu nombre de usuario" onChange={this.handleEmail} />
                    <input className='password' type="password" value={password} placeholder="Introduce tu contraseña" onChange={this.handlePassword} />
                    <input className='submit' type="submit" value="Registrarse" />
                </form>
                <Link to='/login'><div className='login'>¿Tienes cuenta? Login aqui!</div></Link>
            </div>
        );
    };
}