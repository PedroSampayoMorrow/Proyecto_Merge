import React, { Component } from 'react'
import DetalleArtista from '../../components/DetalleArtista/DetalleArtista'
class DetalleCantante extends Component {
    constructor(props) {
        super(props);
        this.state = { data : [],
        canciones:[] }
    }
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/artist/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({data:data},()=>console.log(data)))
        .catch(err => console.log(err))
    }
    render() { 
        return (
            <>
            <DetalleArtista info = {this.state.data} canciones = {this.state.canciones}/>
            </>
        
        );
    }
}
export default DetalleCantante;