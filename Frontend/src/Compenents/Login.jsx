import '../Assets/Sass/Base.scss'
import './Inscription.scss'

import Remove from '../Assets/Img/remove.png'
import { connect } from "react-redux";

function Login(Store) {
  return (
    
        <div className="Inscription">
                    <img className="Remove" src={Remove} alt="" onClick={()=>Store.CloseConnexion()}  />
                    <p className="RaedyHave">I don't have account? <span onClick={()=>Store.SwitchToInscription()} >Sign up</span></p>
                    <h2>Welcome again</h2>
                    <div >
                        <div className="Inscription__Faild">
                            <img src="https://img.icons8.com/material-outlined/24/000000/filled-message.png"/>            
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="Inscription__Faild">
                              <img src="https://img.icons8.com/material-outlined/24/000000/lock--v1.png"/>
                            <input type="text" placeholder="Password" />
                        </div>
                        <button>Sign in</button>
                    </div>

        </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    CloseConnexion: () => dispatch({ type: 'CLOSE_CONNEXION'}),
    SwitchToInscription: () => dispatch({ type: 'OPEN_CONNEXION'}),
  }
}


export default connect(null,mapDispatchToProps)(Login);
