import '../Assets/Sass/Base.scss'
import './Inscription.scss'
import '../Views/Dashboard/client.scss'

import Remove from '../Assets/Img/remove.png'
import { Input } from 'antd';
const { TextArea } = Input;
import { Select } from 'antd';
import React, { useState } from "react";

function RoomPopup(props) {

  return (
    <div className="ConnexionZone reservationpopup">
        <div className="Inscription">
                    <img className="Remove" src={Remove} alt="" onClick={()=>{props.close()}}  />
                    <div >
                        <span>Name </span>
                        <div className="Inscription__Faild">
                            <input type="text" value='faical bahsis'/>
                        </div>
                        <span>Room </span>
                        <div className="Inscription__Faild">
                            <input type="text" value='Room number 15 block b' />
                        </div>
                        <span>Date start </span>
                        <div className="Inscription__Faild">
                            <input type="text" value='15/07/2022' />
                        </div>
                        <span>Date end </span>
                        <div className="Inscription__Faild">
                            <input type="text" value='23/07/2022' />
                        </div>
                        <span>Total </span>
                        <div className="Inscription__Faild">
                            <input type="text" value='400$' />
                        </div>
                        <button className="btnPayeed">Payed</button>

                        <button className="btnInvoice">Download invoice</button>
                    </div>
        </div>
    </div>
  );
}

export default (RoomPopup);


