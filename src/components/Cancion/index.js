import React,{Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css"
class Cancion extends Component{
    constructor(props){
        super(props)
        this.state = {
            props: props.value,
            verMas:0,
            esFavorito:false
        }
    }
    componentDidMount(){
        let FavoritosStorage = JSON.parse(localStorage.getItem('favoritosCanciones'))
        if (FavoritosStorage !== null) {
            let EstaElC = FavoritosStorage.includes(this.props.id)
            if (EstaElC) {
                this.setState({
                    esFavorito:true
                })
            }
        }
    }
    agregarFav(id){
        let FavoritosStorage = JSON.parse(localStorage.getItem('favoritosCanciones'))
        if (FavoritosStorage !== null) {
            FavoritosStorage.push(id)
            localStorage.setItem('favoritosCanciones', JSON.stringify(FavoritosStorage))
        } else{
            let  IdAArray = [id]
            localStorage.setItem('favoritosCanciones',JSON.stringify(IdAArray))
        }

        this.setState({
            esFavorito:true
        })
    }
    borrarFav(idCancion){
        let FavoritosStorage = JSON.parse(localStorage.getItem('favoritosCanciones'))
        let FavoritosNuevos = FavoritosStorage.filter(ids=> ids!==idCancion)
        localStorage.setItem('favoritosCanciones', JSON.stringify(FavoritosNuevos))
        if (this.props.actualizarEstadoCanciones !== false) {
            this.props.actualizarEstadoCanciones(idCancion)
            return
        }
        this.setState({
            esFavorito:false
        })
    }
    verMas(){
        this.setState({verMas:1})
    }
    verMenos(){
        this.setState({verMas:0})
    }
    render(){
        return(
            <React.Fragment>
                <div className="divPelicula">
                <img src={this.props.img} alt={this.props.name}></img>
                <h4>{this.props.name}</h4>
                {this.state.verMas === 1 ? ( this.props.expl === true ? <p>Esta cancion contiene palabras explicitas</p> : <p>Esta cancion no contiene palabras explicitas</p> ) :   <p></p>}       
                {this.state.verMas === 0 ? 
                 <button onClick={()=>this.verMas()}>Ver Mas</button> :
                 <button onClick={()=>this.verMenos()}>Ver Menos</button>
                }
                <h5 className="boton"> <Link to ={`/detalle/cancion/${this.props.id}`}>Ir a detalle</Link></h5>
                <div className="estrellas">
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                </div>
                {this.state.esFavorito ? 
                <button onClick = {(id)=>this.borrarFav(this.props.id)}>Borrar de favoritos</button> :
                <button onClick = {(id)=>this.agregarFav(this.props.id)}>Agregar a Favoritos</button>
                }
                </div>
            </React.Fragment>
            )
    }
}

export default Cancion;



