import './Navbar.scss';
import { Link } from 'react-router-dom';
import Inscription from '../Compenents/Inscription'
import Login from '../Compenents/Login'
import { connect } from "react-redux";

const Navbar = (Store)=>{
    return (
        <div className="navbar">
            {Store.Inscription && <Inscription />}
            {Store.Login && <Login/>}
            <div className="navbar__Logo">
                <h1>MyLogo</h1>
            </div>
            <div className="navbar__Menu">
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Hotels">
                            Hotels
                            </Link>
                        </li>
                        <li>
                            <Link to="/About">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/Hotel/1635">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/Dashboard/Statistique">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className="Connexion"  onClick={()=>Store.ToggleConnexion()} >Connexion</li>
                        <li>{Store.Name}</li>
                    </ul>
            </div>
        </div>
    )
}

//// DATA WANT TO GET FROM STORE redux

const GetState = (state) =>{
    return {
        Inscription:state?.Inscription,
        Login:state?.Login,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      ToggleConnexion: () => dispatch({ type: 'OPEN_CONNEXION'}),
    }
  }
export default connect(GetState,mapDispatchToProps)(Navbar)