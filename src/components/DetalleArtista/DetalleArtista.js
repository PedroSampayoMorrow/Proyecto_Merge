import React, { Component } from 'react'

export default class DetalleArtista extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
        <React.Fragment>
        <div className='detalleCancionContainer'>
            <div className='detalleCancion1'>
                <img src={this.props.info.picture_medium} alt= {this.props.info.name}></img>
            </div>
            <div className='detalleCancion2'>
                <h1>Nombre:{this.props.info.name} </h1>
                <h2>Cantidad de Fans: {this.props.info.nb_fan}</h2>
                <h2>Cantidad de albumes: {this.props.info.nb_album}</h2>
            </div>
        </div>
    </React.Fragment>
    )
  }
}
