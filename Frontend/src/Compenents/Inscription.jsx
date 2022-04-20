import '../Assets/Sass/Base.scss'
import './Inscription.scss'

import Remove from '../Assets/Img/remove.png'
import { connect } from "react-redux";
import {useState,useEffect} from 'react'

function Inscription(Store) {

  const [NextStep,SetNextStep] = useState(false)
  


  return (
      <div className="ConnexionZone">
        <div className="Inscription">
                    <img className="Remove" src={Remove} alt="" onClick={()=>Store.ClosePopup()} />
                    <p className="RaedyHave">Already have account? <span onClick={()=>Store.SwitchToLogin()}>Sign in</span></p>
                    <h2>Create account</h2>
                    {
                      NextStep ?
                      <>
                        <p>Please start with your Email</p>
                        <div className="Inscription__Faild">
                            <img src="https://img.icons8.com/material-outlined/24/000000/filled-message.png"/>            
                            <input type="text" placeholder="Email" />
                        </div>
                        <button>continue with this email</button>
                      </>
                      :
                      <>
                        <p>Please enter your information</p>
                        <div className="Inscription__Faild">
                              <img src="https://img.icons8.com/material-outlined/24/000000/lock--v1.png"/>
                            <input type="text" placeholder="Password" />
                        </div>
                        <div className="Inscription__Faild">
                            <img src="https://img.icons8.com/material-outlined/24/000000/dog-house.png"/>
                            <input type="text" placeholder="Hotel Name" />
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
                      </>
                    }
        </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
    return {
      ClosePopup: () => dispatch({ type: 'CLOSE_POPUP'}),
      SwitchToLogin: () => dispatch({ type: 'OPEN_LOGIN'}),
    }
  }


export default connect(null,mapDispatchToProps)(Inscription);
