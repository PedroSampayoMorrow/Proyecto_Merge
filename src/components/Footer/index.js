import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <React.Fragment>
                <footer className='footer'>
                    <ul className="ulFooter">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/favoritos">Favoritos</Link></li>
                        <li><Link to="/canciones">Canciones</Link></li>
                        <li><Link to="/cantantes">Cantantes</Link></li>
                    </ul>
                    <div className='autores'>
                    <h6>Tomas Giovana</h6>
                    <h6>Santino Soto Acebal</h6>
                    <h6>Pedro Sampayo(perdon si lo escribo mal, despues corregilo)</h6>
                    </div>
                </footer>
            </React.Fragment>
        )
    }    
}
export default Footer