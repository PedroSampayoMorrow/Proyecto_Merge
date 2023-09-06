import React, { Component } from 'react'
import "./index.css"
class notFound extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
                <h1 className='notFound'>404 Pagina no encontrada</h1>
            </React.Fragment>
          );
    }
}
 
export default notFound;