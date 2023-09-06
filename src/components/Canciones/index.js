import React, {Component} from "react";
import Cancion from "../Cancion";
import "./index.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { toHaveFocus } from "@testing-library/jest-dom/matchers";
class Canciones extends Component{
    constructor(props){
        super(props)
        this.state = {props:props.value, data:null}
    }

    render(){
        
            return(
                <React.Fragment>
                    <div className="divCanciones">
                        { this.props.info.length === 0 ?
                        <h1>Ta cargando</h1> : 
                        this.props.info.map((info,idx) => 
                        <Cancion 
                            key={info+idx} 
                            img={info.album.cover} 
                            name={info.title} 
                            id={info.id} 
                            expl = {info.explicit_lyrics} 
                            actualizarEstadoCanciones = {this.props.actualizarEstadoCanciones ? (id)=>this.props.actualizarEstadoCanciones(id):false}/>)}
                    </div>
                </React.Fragment>
            )
        }
    }
export default Canciones;
