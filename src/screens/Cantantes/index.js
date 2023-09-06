import React, { Component } from 'react'
import CantantesContainer from "../../components/Cantantes/index"
import Filtro from '../../components/Filtro/Filtro'
class Cantantes extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            index : 50,
            cantantes:[],
            backup:[]
        }
    }
    componentDidMount(){
        fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists?limit=50`)
        .then(res => res.json())
        .then(data => this.setState({
            cantantes : data.data,
            backup: data.data
        }))
        .catch(err => console.log(err))
    }
    buscarMas(){
        fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists?limit=${(this.state.index+30)}`)
        .then(res => res.json())
        .then(data => this.setState({
            cantantes : data.data,
            backup:data.data,
            index: this.state.index+30
        }))
        .catch(err => console.log(err))
    }
    filtrarResultados(texto){
        let resultadoFiltro = this.state.backup.filter((e) => e.name.toLowerCase().includes(texto.toLowerCase()))
        this.setState({
      cantantes: resultadoFiltro
    })

    }
    render() { 
        return (
            <React.Fragment>
                <h2>Filtrar Cantantes</h2>
                <Filtro filtrarResultados = {(texto)=>this.filtrarResultados(texto)} />
                <CantantesContainer info = {this.state.cantantes}/>
                <button onClick={()=>this.buscarMas()}>Traer Mas!</button>
           </React.Fragment>
         );
    }
}
 
export default Cantantes;