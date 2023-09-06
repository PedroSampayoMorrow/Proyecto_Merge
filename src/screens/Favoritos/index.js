import React, { Component } from 'react'
import Cantantes from '../../components/Cantantes/'
import CancionesContainter from '../../components/Canciones'
class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = { favoritosCanciones:[] }
    }
    componentDidMount(){
        let storageCanciones = localStorage.getItem('favoritosCanciones')
        if (storageCanciones !== null) {
            let cancionesParseadas = JSON.parse(storageCanciones)
            Promise.all(
                cancionesParseadas.map( id => 
                    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`)
                    .then( resp => resp.json())
                  )
              )
              .then(data => this.setState({favoritosCanciones: data}))
              .catch(err => console.log(err))        
        }
    }
    actualizarEstadoCanciones(id){
        let nuevoState = this.state.favoritosCanciones.filter(e=> e.id !== id)
        this.setState({
            favoritosCanciones : nuevoState
        })
    }
    render() { 
        return (
        <>
        <h2>Favoritos Canciones</h2>
        {<CancionesContainter info = {this.state.favoritosCanciones} actualizarEstadoCanciones = {(id)=>this.actualizarEstadoCanciones(id)}/>}
        <h2>Favoritos Cantantes</h2>
        </>
        )
    }
}
 
export default Favoritos;