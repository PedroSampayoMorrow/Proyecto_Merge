import React, { Component } from 'react'
import CancionesContainter from '../../components/Canciones/index'
import Filtro from '../../components/Filtro/Filtro'
class Canciones extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            index : 50,
            canciones:[],
            backup:[]
        }
    }
    componentDidMount(){
        fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks?limit=50`)
        .then(res => res.json())
        .then(data => this.setState({
            canciones : data.data,
            backup: data.data
        }))
        .catch(err => console.log(err))
    }
    buscarMas(){
        fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks?limit=${(this.state.index+30)}`)
        .then(res => res.json())
        .then(data => this.setState({
            canciones : data.data,
            backup: data.data,
            index: this.state.index+30
        }))
        .catch(err => console.log(err))
    }
    filtrarResultados(texto){
        let resultadoFiltro = this.state.backup.filter((e) => e.title.toLowerCase().includes(texto.toLowerCase()))
        this.setState({
        canciones: resultadoFiltro,
     })
    }
    render() { 
        return (
            <React.Fragment>
                <h2>Filtrar Canciones</h2>
                <Filtro filtrarResultados = {(texto)=>this.filtrarResultados(texto)} />
                <CancionesContainter info = {this.state.canciones}/>
                <button onClick={()=>this.buscarMas()}>Traer Mas!</button>
            </React.Fragment>
        );

    }
}
export default Canciones;
 