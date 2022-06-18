import '../Assets/Sass/Base.scss'
import './Inscription.scss'

import Remove from '../Assets/Img/remove.png'
import Phone from '../Assets/Img/phone-call.png'
import User from '../Assets/Img/user.png'
import Email from '../Assets/Img/email.png'
import { connect } from "react-redux";
import {useState,useEffect} from 'react'
import axios from 'axios'
import {ReservationPath} from '../AppCall';
import {SwalAlert} from '../Helpers/Alert'


function reservationcpm(Props) {
    console.log("==>" , Props.room.Hotel)
    const [reservationData,SetreservationData] = useState({
        Name:'',
        Email:'',
        Phone:'',
        DateStart:'',
        DateEnd:'',
        hotel:Props.room.Hotel,
        RoomsType:Props.room.Type
    })
    const ChangeState = (key,e) =>{
        const newstate = {...reservationData}
        newstate[key]=e
        SetreservationData(newstate)
    }

    const MakeReservation = () =>{
        if(reservationData.Email !== ""){
            axios.post(`${process.env.REACT_APP_API_URL+ReservationPath}`,reservationData)
            .then((res)=>{               
              res.status === 201 && SwalAlert("Resérvation successfully ",'success')
              Props.ClosePopup()
            })
            .catch(err=>{
                SwalAlert("this Chambe is not avaible ",'error')
            })
          }
    }
  return (
    <div className="ConnexionZone">   
        <div className="Inscription">
                    <img className="Remove" src={Remove} alt="" onClick={()=>Props.ClosePopup()}  />
                    <div >
                        <div className="Inscription__Faild">
                              <img src={User}/>
                            <input type="text" placeholder="Name" onChange={(e)=>{ChangeState('Name',e.target.value)}} />
                        </div>
                        <div className="Inscription__Faild">
                            <img src={Email}/>            
                            <input type="text" placeholder="Email"  onChange={(e)=>{ChangeState('Email',e.target.value)}}  />
                        </div>
                        <div className="Inscription__Faild">
                            <img src={Phone}/>            
                            <input type="text" placeholder="Phone"  onChange={(e)=>{ChangeState('Phone',e.target.value)}}  />
                        </div>
                        <div className="Date">
                            <div>
                                <h6>Check in</h6>
                                <input type="date"  onChange={(e)=>{ChangeState('DateStart',e.target.value)}}  />
                            </div>
                            <div>
                                <h6>Check out</h6>
                                <input type="date"  onChange={(e)=>{ChangeState('DateEnd',e.target.value)}}  />
                            </div>
                        </div>

                        <button onClick={() =>{MakeReservation()}}>Book now</button>
                    </div>

        </div>
    </div>
  );
}
const GetState = (state) =>{
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(GetState,mapDispatchToProps)(reservationcpm);
