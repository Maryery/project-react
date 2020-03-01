import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect } from "react-router-dom";
import './login.css'
export default class Login extends Component {
    constructor (props){
        super(props);
        this.state = {
            email:"",
            password:"",
        };
    };

    handleEmail = (event) =>{
        this.setState({
            email:event.target.value
        });
    };

    handlePassword = (event) =>{
        this.setState({
            password:event.target.value
        });
    };

    submitForm =  async (event) =>{
        
        event.preventDefault();
        const requestOptions ={
            method:'POST',
            credentials:'include',
            body: JSON.stringify ({
                username:this.state.email,
                password: this.state.password
            }),
            headers:{
                'Content-Type': 'application/json'
            },
        };
        fetch("http://34.89.93.186:8080/apiv1/login?username="+"&password=",requestOptions)
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
            <div className='login-container'>
                <h2>INICIAR SESIÓN</h2>
                <form onSubmit={this.submitForm}>
                    <input className='email'  type="text" value={email} placeholder="Introduce nombre de usuario" onChange={this.handleEmail} />
                    <input className='password' type="password" value={password} placeholder="Introduce tu contraseña" onChange={this.handlePassword} />
                    <input className='login' type="submit" value="Login" />
                </form>
               
                <Link to='/register'><div className='register'>REGISTRATE</div></Link>
            </div>
        );
    };
}

