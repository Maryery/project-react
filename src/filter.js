import React, { Component } from "react";

export default class Filter extends Component {
    constructor (props){
        super(props);
        this.state = {
            name:"",
            price:"",
            tag:"",
            venta:"",
        };
    };

    handleName = (event) =>{
        this.setState({
            name:event.target.value
        });
    };

    handlePrice = (event) =>{
        this.setState({
            price:event.target.value
        });
    };

    handleTag = (event) =>{
        this.setState({
            tag:event.target.value
        });
    };

    handleType = (event) =>{
        this.setState({
            type:event.target.value
        });
    };

    submitForm =  async (event) =>{
        
        event.preventDefault();
        var requestOptions ={
            method:'PUT',
            body: JSON.stringify ({
                name:this.state.name,
                price: this.state.price,
                tag: this.state.tag,
                type: this.state.type
            }),
            headers:{
                'content-Type': 'application/json'
            },
        };
        fetch("http://34.89.93.186:8080/apiv1/anuncios?tag=",requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error=>console.log('error', error));
    }

    render = () => {
        const { name, price, tag, type } = this.state;

        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <div>
                        <input type="text" value={name} placeholder="introduce un termino de busqueda" onChange={this.handleName}/>
                    </div>
                    <div>
                        <input type="texto" value={price} placeholder="Busqueda por precio" onChange={this.handlePrice}/> 
                    </div>
                    <div>
                        <input type="texto" value={tag} placeholder="Busqueda por tags" onChange={this.handleTag}/>
                    </div>
                    <div>
                        <input type="texto" value={type} placeholder="oferta o demanda" onChange={this.handleType}/>
                    </div>
                    <button>Buscar</button>
                </form>
            </div>
        );
    };
}