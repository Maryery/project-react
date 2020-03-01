import React, { Component } from "react";
import './filter.css';

class Result extends Component {
    
    render = () => {
        return (
        <li>
            <h3>{this.props.name}</h3>
            <p>Precio: {this.props.price}€</p>
            <a href={`ad/${this.props.id}`}><img className= "image" alt="" src={this.props.photo} /></a>
            <div>Tag: {this.props.tags}</div>
            <p>Descripción: {this.props.description}</p> 
        </li>
        )
    }
}

export default class Filter extends Component {
    constructor (props){
        super(props);
        this.state = {
            name:"",
            priceMin:"",
            priceMax:"",
            tags:"",
            results:[]
        };
    };

    handleName = (event) =>{
        this.setState({
            name:event.target.value
        });
    };

    handlePriceMin = (event) =>{
        this.setState({
            priceMin:event.target.value
        });
    };

    handlePriceMax = (event) =>{
        this.setState({
            priceMax:event.target.value
        });
    };

    handleTags = (event) =>{
        this.setState({
            tags:event.target.value
        });
    };

    componentDidMount = async (event) =>{
        const requestOptions ={
            method:'GET',
            credentials:'include',
            headers:{
                'Content-Type': 'application/json'
            },
        };  
      fetch("http://34.89.93.186:8080/apiv1/anuncios",requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                this.setState({
                    results: data.results
                })
            } else {
                alert(data.error)
            }
        })
         
            .catch(error=> alert(`error: ${error}`));
    }

    submitForm =  async (event) =>{
        event.preventDefault();
        let priceFilter="";
        let nameFilter="";
        let tagFilter="";
        if (this.state.name!="") {
            nameFilter= `name=${this.state.name}&`
        }
        if (this.state.tags!="") {
            tagFilter= `tag=${this.state.tags}`
        }
        if (this.state.priceMin!="" & this.state.priceMax!="" ) {
            priceFilter= `price=${this.state.priceMin}-${this.state.priceMax}&`
        }

        const requestOptions ={
            method:'GET',
            credentials:'include',
            headers:{
                'Content-Type': 'application/json'
            },
        };
        fetch(`http://34.89.93.186:8080/apiv1/anuncios?${nameFilter}${priceFilter}${tagFilter}`,requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    this.setState({
                        results: data.results
                    })
                } else {
                    alert(data.error)
                }
            })
             
                .catch(error=> alert(`error: ${error}`));
        }

    render = () => {
        const { name, priceMin, priceMax, tags, results } = this.state;
        return (
            <div>
                <form className="form" onSubmit={this.submitForm}>
                    <div>
                        <input className="input" type="text" value={name} placeholder="Introduce un termino de busqueda" onChange={this.handleName}/>
                    </div>
                    <div>
                        <input className="input" type="text" value={priceMin} placeholder="Busqueda por precio mínimo" onChange={this.handlePriceMin}/> 
                    </div>
                    <div>
                        <input className="input" type="text" value={priceMax} placeholder="Busqueda por precio máximo" onChange={this.handlePriceMax}/> 
                    </div>
                    <div>
                        <input className="input" type="text" value={tags} placeholder="Busca por lifestyle, work or mobile" onChange={this.handleTags}/>
                    </div>
                    <button className="btn">Buscar</button>
                </form>
                <h3>Crea tu anuncio</h3>
                <button className="btn">Crear!</button>
                <div>
                    <h2>ANUNCIOS</h2>
                    <ul>
                        {
                            results.map(result=>{
                                return(
                                    <Result name={result.name} photo= {result.photo} description={result.description} price={result.price} tags={result.tags} id={result._id} ></Result>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    };
}