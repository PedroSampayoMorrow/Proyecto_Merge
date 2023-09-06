import React, {Component} from "react";
import Cantante from "../Cantante";
import "./index.css"
class Cantantes extends Component{
    constructor(props){
        super(props)
        this.state = {props:props.value, data:null}
    }
   
    render(){
            return(
                <React.Fragment>
                    <div className="divCantantes">
                        {
                            this.props.info.length === 0 ?
                            <h1>Ta cargando</h1> :
                        this.props.info.map((inf,idx) => 
                        <Cantante 
                            key={inf+idx} 
                            img={inf.picture} 
                            name={inf.name} 
                            id={inf.id} 
                            radio = {inf.radio}
                        />)
                        }
                    </div>
                </React.Fragment>
            )
    }
}
export default Cantantes;
