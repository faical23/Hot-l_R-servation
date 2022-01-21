import '../Assets/Sass/Base.scss'
import './Inscription.scss'

import Remove from '../Assets/Img/remove.png'
import { connect } from "react-redux";

function Inscription(Store) {
    console.log(Store)
  return (
      <div className="ConnexionZone">
        <div className="Inscription">
                    <img className="Remove" src={Remove} alt="" onClick={()=>Store.CloseConnexion()} />
                    <p className="RaedyHave">Already have account? <span onClick={()=>Store.SwitchToLogin()}>Sign in</span></p>
                    <h2>Create account</h2>
                    <div  >
                        <p>Please start with your Email</p>
                        <div className="Inscription__Faild">
                            <img src="https://img.icons8.com/material-outlined/24/000000/filled-message.png"/>            
                            <input type="text" placeholder="Email" />
                        </div>
                        <button>continue with this email</button>
                    </div>
                    <div hidden>
                        <p>Please enter your information</p>
                        <div className="Inscription__Faild">
                              <img src="https://img.icons8.com/material-outlined/24/000000/lock--v1.png"/>
                            <input type="text" placeholder="Password" />
                        </div>
                        <div className="Inscription__Faild">
                            <img src="https://img.icons8.com/material-outlined/24/000000/dog-house.png"/>
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="Inscription__Faild">
                            <img src="https://img.icons8.com/material-outlined/24/000000/marker.png"/>
                            <input type="text" placeholder="City" />
                        </div>
                        <div className="Inscription__Faild">
                            <img src="https://img.icons8.com/material-outlined/24/000000/phone.png"/>
                            <input type="text" placeholder="Phone" />
                        </div>
                        <button className="Valide">Sign up</button>
                    </div>
        </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
    return {
      CloseConnexion: () => dispatch({ type: 'CLOSE_CONNEXION'}),
      SwitchToLogin: () => dispatch({ type: 'OPEN_LOGIN'}),
    }
  }


export default connect(null,mapDispatchToProps)(Inscription);
