import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header(props) {
    return (
        <nav style={{marginBottom:'2%'}}>
        <ul className="main-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favoritos">Favoritos</Link></li>
            <li><Link to="/canciones">Canciones</Link></li>
            <li><Link to="/cantantes">Cantantes</Link></li>
        </ul>
        <ul className="user">
            <li>{props.usuario} <img src="./img/user.jpg" alt=""></img></li>
        </ul>
    </nav>)
}

export default Header;