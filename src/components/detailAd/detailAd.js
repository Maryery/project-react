import React, { Component } from "react";

class Result extends Component {
    
    render = () => {
        return (
        <div>
            <h3>{this.props.name}</h3>
            <h3>{this.props.id}</h3>
            <p>Precio: {this.props.price}€</p>
            <img className= "image" alt="" src={this.props.photo} />
            <div>Tag: {this.props.tags}</div>
            <p>Descripción: {this.props.description}</p> 
        </div>
        )
    }
}

export default class DetailAd extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ad:""
      };
    }
  
    componentDidMount = async (event) =>{
      const { match: { params } } = this.props;
      const requestOptions ={
        method:'GET',
        credentials:'include',
        headers:{
            'Content-Type': 'application/json'
        },
    };
    fetch(`http://34.89.93.186:8080/apiv1/anuncios/${params.id}`,requestOptions)
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            this.setState({
                ad: data.result,
              })
        } else {
            alert(data.error)
        }
    })
    
    .catch(error=>console.log('error', error));
}
    render = () => {
        const { ad } = this.state;
        if (ad===""){
            return (
                <div></div>
            )
        }
        const tag = ad.tags.join(', ');
        return (
            <div>
                <h2>Detalle</h2>
                    <Result name={ad.name} price={ad.price} description={ad.description} photo={ad.photo} tags={ad.tags}></Result>     
            </div>
        );
    }
}



