import './Navbar.scss';
import { Link } from 'react-router-dom';
import Inscription from '../Compenents/Inscription'
import Login from '../Compenents/Login'
import { connect } from "react-redux";
import {useEffect,useState} from 'react'

const Navbar = (Store)=>{
    const [user,Setuser] = useState()

    useEffect(() => {
        if(Store?.User?.data){
            Setuser(Store?.User?.data)
        }
    },[Store.User])
    
    return (
        <div className="navbar">
            {Store.Inscription && <Inscription />}
            {Store.Login && <Login/>}
            <div className="navbar__Logo">
                <h1>MYHOTEL</h1>
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
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>
                        {!user && <li className="Connexion"  onClick={()=>Store.ToggleConnexion()} >Connexion</li>} 
                        {user && 
                            <li className="Connexion">
                                <Link to="/Dashboard/profil">
                                    Dashboard
                                </Link>
                            </li> 
                        }

                    </ul>
            </div>
        </div>
    )
}

//// DATA WANT TO GET FROM STORE redux

const GetState = (state) =>{
    return {
        Inscription:state?.TogglePopup?.Inscription,
        Login:state?.TogglePopup?.Login,
        User:state?.UserData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      ToggleConnexion: () => dispatch({ type: 'OPEN_CONNEXION'}),
    }
  }
export default connect(GetState,mapDispatchToProps)(Navbar)