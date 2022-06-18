import '../Assets/Sass/Base.scss'
import './Inscription.scss'

import Remove from '../Assets/Img/remove.png'
import { connect } from "react-redux";
import {useState,useEffect} from 'react'
import axios from 'axios'
import {InscriptionPath,CheckEmailPath} from '../AppCall';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SwalAlert} from '../Helpers/Alert'



function Inscription(Store) {

  const [NextStep,SetNextStep] = useState(true)
  const [DataInscription,SetDataInscription] = useState({
    email:'',
    password:'',
    name:'',
    city:'',
    phone:''
  })

  const ChangeState = (key,e) =>{
      const newstate = {...DataInscription}
      newstate[key]=e.target.value
      SetDataInscription(newstate)
  }
  
  const CheckIfExistEmail = () =>{
    if(DataInscription.email !== ""){
      axios.post(`${process.env.REACT_APP_API_URL+CheckEmailPath}`,DataInscription)
      .then((res)=>{
        res.status === 200 && SwalAlert("Email existing.",'error')
      })
      .catch(err=>{
        err.response.status == 404 && SetNextStep(false) 
      })
    }
  }


  const InscriptionFunction = () =>{
    axios.post(`${process.env.REACT_APP_API_URL+InscriptionPath}`,DataInscription)
    .then((res)=>{
      res.status == 201 && SwalAlert("Succesfly inscription.",'success')
      const userData = {
        User:res.data.Hotel,
        token:res.data.token
      }
      // Store.UserData(userData)
      Store.ClosePopup()
    })
    .catch(err=>{
      console.log(err)
    })
  }

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
                            <input type="text" placeholder="Email" onChange={(e)=>{ChangeState("email",e)}} />
                        </div>
                        <button onClick={()=>{CheckIfExistEmail()}} >continue with this email</button>
                      </>
                      :
                      <>
                        <p>Please enter your information</p>
                        <div className="Inscription__Faild">
                            <img src="https://img.icons8.com/material-outlined/24/000000/filled-message.png"/>            
                            <input type="text" placeholder="Email" value={DataInscription.email} disabled />
                        </div>
                        <div className="Inscription__Faild">
                              <img src="https://img.icons8.com/material-outlined/24/000000/lock--v1.png"/>
                            <input type="text" placeholder="Password"  onChange={(e)=>{ChangeState("password",e)}}  />
                        </div>
                        <div className="Inscription__Faild">
                            <img src="https://img.icons8.com/material-outlined/24/000000/dog-house.png"/>
                            <input type="text" placeholder="Hotel Name"  onChange={(e)=>{ChangeState("name",e)}} />
                        </div>
                        <div className="Inscription__Faild">
                            <img src="https://img.icons8.com/material-outlined/24/000000/marker.png"/>
                            <input type="text" placeholder="City"  onChange={(e)=>{ChangeState("city",e)}} />
                        </div>
                        <div className="Inscription__Faild">
                            <img src="https://img.icons8.com/material-outlined/24/000000/phone.png"/>
                            <input type="text" placeholder="Phone"  onChange={(e)=>{ChangeState("phone",e)}} />
                        </div>
                        <button className="Valide" onClick={()=>{InscriptionFunction()}}>Sign up</button>
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
      UserData:(data) => dispatch({ type: 'SET_USERDATA',payload: data })
    }
  }


export default connect(null,mapDispatchToProps)(Inscription);
