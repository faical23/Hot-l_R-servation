import '../Assets/Sass/Base.scss'
import './Inscription.scss'

import Remove from '../Assets/Img/remove.png'
import { connect } from "react-redux";
import {useState,useEffect} from 'react'
import axios from 'axios'
import {LoginPath} from '../AppCall';
import 'react-toastify/dist/ReactToastify.css';
import {SwalAlert} from '../Helpers/Alert'

function Login(Store) {
  const [DataInscription,SetDataInscription] = useState({
    email:'',
    password:'',
  })
  const ChangeState = (key,e) =>{
    const newstate = {...DataInscription}
    newstate[key]=e.target.value
    SetDataInscription(newstate)
  }

  const LoginFuntion =() =>{
    axios.post(`${process.env.REACT_APP_API_URL+LoginPath}`,DataInscription)
    .then((res)=>{
      res.status == 200 && SwalAlert("Succesfly Login.",'success')
      const userData = {
        User:res.data.Hotel,
        token:res.data.token
      }
      Store.UserData(userData)
      Store.ClosePopup()
    })
    .catch(err=>{
      SwalAlert(err.response.data.Message,'error')
    })
  }


  return (
    <div className="ConnexionZone">
        <div className="Inscription">
                    <img className="Remove" src={Remove} alt="" onClick={()=>Store.ClosePopup()}  />
                    <p className="RaedyHave">I don't have account? <span onClick={()=>Store.SwitchToInscription()} >Sign up</span></p>
                    <h2>Welcome again</h2>
                    <div >
                        <div className="Inscription__Faild">
                            <img src="https://img.icons8.com/material-outlined/24/000000/filled-message.png"/>            
                            <input type="text" placeholder="Email" onChange={(e)=>{ChangeState("email",e)}}  />
                        </div>
                        <div className="Inscription__Faild">
                              <img src="https://img.icons8.com/material-outlined/24/000000/lock--v1.png"/>
                            <input type="text" placeholder="Password" onChange={(e)=>{ChangeState("password",e)}}  />
                        </div>
                        <button onClick={() =>{LoginFuntion()}}>Sign in</button>
                    </div>
        </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    ClosePopup: () => dispatch({ type: 'CLOSE_POPUP'}),
    SwitchToInscription: () => dispatch({ type: 'OPEN_CONNEXION'}),
    UserData:(data) => dispatch({ type: 'SET_USERDATA',payload: data })
  }
}
export default connect(null,mapDispatchToProps)(Login);
