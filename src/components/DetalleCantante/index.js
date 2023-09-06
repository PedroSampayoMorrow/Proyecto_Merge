import React, { Component } from 'react'
import './index.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class DetalleCantante extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props:props.values,
            data:null
        }
    }
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/artist/${this.props.id}`)
        .then(res => res.json())
        .then(data => this.setState({data:data}))
        .catch(err=> console.log(err))
    }
    render() { 
        let info = this.state.data
        if (info === null) {
            return <h1>Toy cargando</h1>
        }else{
        return (
            <React.Fragment>
            <div className='detalleCantanteContainer'>
                <div className='detalleCantante1'>
                    <img src={info.picture} alt={info.name}></img>
                </div>
                <div className='detalleCantante2'>
                    <h1>Artista: {info.name}</h1>                    
                    <h2>Cantidad de Albumes: {info.nb_album}</h2>
                    <h2>Fans: {info.nb_fan}</h2>
                    <h2>Donde Escuchar sus Canciones: <Link to={info.tracklist}>{info.tracklist}</Link></h2>
                    
                </div>
            </div>
        </React.Fragment>

        );}
    }
}
 
export default DetalleCantante;