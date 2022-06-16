import '../Assets/Sass/Base.scss'
import './Inscription.scss'
import '../Views/Dashboard/client.scss'

import Remove from '../Assets/Img/remove.png'
import { Input } from 'antd';
const { TextArea } = Input;
import { Select } from 'antd';
import React, { useState } from "react";

function RoomPopup(props) {
    console.log(props.reservation)

  return (
    <div className="ConnexionZone reservationpopup">
        <div className="Inscription">
                    <img className="Remove" src={Remove} alt="" onClick={()=>{props.close()}}  />
                    <div >
                        <span>Name </span>
                        <div className="Inscription__Faild">
                            <input type="text"  value={props.reservation.Client}/>
                        </div>
                        <span>Room </span>
                        <div className="Inscription__Faild">
                            <input type="text" value={props.reservation.Room} />
                        </div>
                        <span>Date start </span>
                        <div className="Inscription__Faild">
                            <input type="text" value={props.reservation.DateStart.slice(0,10)} />
                        </div>
                        <span>Date end </span>
                        <div className="Inscription__Faild">
                            <input type="text" value={props.reservation.DateEnd.slice(0,10)} />
                        </div>
                        <span>Total </span>
                        <div className="Inscription__Faild">
                            <input type="text" value={`${props.reservation.Total}$`} />
                        </div>
                        <button className="btnInvoice">Download invoice</button>
                    </div>
        </div>
    </div>
  );
}

export default (RoomPopup);


