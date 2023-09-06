import React, { Component } from 'react'
import DetalleCancion from '../../components/DetalleCancion'

class screenDetalleCancion extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <DetalleCancion id={this.props.match.params.id}/>
        );
    }
}
 
export default screenDetalleCancion;
