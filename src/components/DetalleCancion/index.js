import React, { Component } from 'react'
import './index.css'

class DetalleCancion extends Component {
    constructor(props) {
        super(props);
        this.state = {data:null}
    }
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.props.id}`)
        .then(res => res.json())
        .then(data => this.setState({data:data},()=>{
            let FavoritosStorage = JSON.parse(localStorage.getItem('favoritosCanciones'))
            if (FavoritosStorage !== null) {
                let EstaElC = FavoritosStorage.includes(this.state.data.id)
                if (EstaElC) {
                    this.setState({
                        esFavorito:true
                    })
                }
        }
        }))
        .catch(err => console.log(err))
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
    borrarFav(id){
        let FavoritosStorage = JSON.parse(localStorage.getItem('favoritosCanciones'))
        let FavoritosNuevos = FavoritosStorage.filter(ids=> ids!==id)
        localStorage.setItem('favoritosCanciones', JSON.stringify(FavoritosNuevos))
        this.setState({
            esFavorito:false
        })
    }
    render() { 
        console.log(this.props)
        let info = this.state.data
        if (info == null) {
            return <h1>Toy cargando</h1>
        }else{
            return (
                <React.Fragment>
                    <div className='detalleCancionContainer'>
                        <div className='detalleCancion1'>
                            <img src={info.album.cover} alt={info.title}></img>
                        </div>
                        <div className='detalleCancion2'>
                            <h1>Titulo: {info.title}</h1>
                            <h2>Artista: {info.artist.name}</h2>
                            <h2>Album: {info.album.title}</h2>
                            <iframe src={this.state.data.preview} width="500" height="70" frameborder="0" allowfullscreen></iframe>
                            {this.state.esFavorito ? 
                <button onClick = {(id)=>this.borrarFav(this.state.data.id)}>Borrar de favoritos</button> :
                <button onClick = {(id)=>this.agregarFav(this.state.data.id)}>Agregar a Favoritos</button>
                }
                {console.log(this.state.data)}
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
}
 
export default DetalleCancion;