import React, { Component } from 'react';
import Register from './register';

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
        })
    };

    submitForm =  async (event) =>{
        
        event.preventDefault();
        var requestOptions ={
            method:'POST',
        };
        fetch("http//34.89.93.186:8080/apiv1/login?username="+this.state.email+"$password="+this.state.password,requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error=>console.log('error', error));
    }

    render = () => {
        const { email, password } = this.state;

        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.submitForm}>
                    <input type="text" value={email} onChange={this.handleEmail} />
                    <input type="password" value={password} onChange={this.handlePassword} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    };
}