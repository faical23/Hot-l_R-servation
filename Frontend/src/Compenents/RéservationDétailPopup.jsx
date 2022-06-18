import '../Assets/Sass/Base.scss'
import './Inscription.scss'
import '../Views/Dashboard/client.scss'

import Remove from '../Assets/Img/remove.png'
import { Input } from 'antd';
import React, { useState } from "react";
import ReactDOMServer from 'react-dom/server';
import { connect } from "react-redux";
import hotel_logo from '../Assets/Img/hotel_logo.png'
import moment from 'moment'





function RoomPopup(props) {
    console.log("props.reservation",props.User.data.User)
    const date = new Date()

    const GeneratePdf = () =>{
        var makepdf = document.getElementById("makepdf");
      
            var mywindow = window.open("", "PRINT", "height=400,width=600");
      
            mywindow.document.write(makepdf.innerHTML);
      
            mywindow.document.close();
            mywindow.focus();
      
            mywindow.print();
            mywindow.close();
      
            return true;
    }

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
                        <button className="btnInvoice" onClick={()=>{GeneratePdf()}}>Download invoice</button>
                    </div>
                    <div class="container" hidden>
                        <div class="card" id="makepdf" style={{padding:'100px'}}>
                            <h1>Invoice</h1>
                            <div className="InvoiceHead" 
                                style={{display: "flex",justifyContent:"space-between",backgroundColor:"#f4f4f4",boxShadow:"0px 0px 11px -9px black",borderRadius: "10px",padding:"50px 20px",margin: "40px 0px"}}>
                                <div  className="InvoiceHead_left">
                                    <h1 style={{fontSize:"25px"}}>{props.User.data.User.Name}</h1>
                                    <h1 style={{fontSize:"25px"}}>{props.User.data.User.City}</h1>
                                    <h1 style={{fontSize:"25px"}}>{props.User.data.User.Localisation}</h1>
                                </div>
                                <div  className="InvoiceHead_right">
                                        <img src={hotel_logo} alt="" style={{width: "100px"}} />
                                </div>
                            </div>
                            <div className="Invoice_Number">
                                    <h5>P-73542</h5>
                            </div>
                            <div className="Invoice_Body" style={{margin:"100px 0px"}}>
                                    <table style={{borderCollapse: "collapse",width: "100%"}}>
                                        <tr>
                                            <th style={{fontSize: "18px",
                padding: "12px",
                border: "1px solid #eeeeee",
                textAlign: "left",
                backgroundColor: "rgba(217, 221, 146, 0.2)"}}>Room</th>
                                            <th style={{fontSize: "18px",
                padding: "12px",
                border: "1px solid #eeeeee",
                textAlign: "left",
                backgroundColor: "rgba(217, 221, 146, 0.2)"}}>Date Start</th>
                                            <th style={{fontSize: "18px",
                padding: "12px",
                border: "1px solid #eeeeee",
                textAlign: "left",
                backgroundColor: "rgba(217, 221, 146, 0.2)"}}>Date end</th>
                                            <th style={{fontSize: "18px",
                padding: "12px",
                border: "1px solid #eeeeee",
                textAlign: "left",
                backgroundColor: "rgba(217, 221, 146, 0.2)"}}>Total</th>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                                border: "1px solid #eeeeee",
                                                                textAlign:"left",
                                                                padding: "12px",
                                                                fontSize: "18px"
                                            }}>{props.reservation.Room} </td>
                                            <td style={{
                                                                                                                border: "1px solid #eeeeee",
                                                                                                                textAlign:"left",
                                                                                                                padding: "12px",
                                                                                                                fontSize: "18px"
                                            }}>{props.reservation.DateStart.slice(0,10)}</td>
                                            <td style={{
                                                                                                                border: "1px solid #eeeeee",
                                                                                                                textAlign:"left",
                                                                                                                padding: "12px",
                                                                                                                fontSize: "18px"
                                            }}>{props.reservation.DateEnd.slice(0,10)}</td>
                                            <td style={{
                                                                                                                border: "1px solid #eeeeee",
                                                                                                                textAlign:"left",
                                                                                                                padding: "12px",
                                                                                                                fontSize: "18px"
                                            }}>{`${props.reservation.Total}$`}</td>
                                        </tr>
                                    </table>
                            </div>
                            <div className="Invoice_Footer">
                                    <div className="Invoice_Footer_Left">
                                            <h2 style={{fontSize: "20px",padding:"5px 0px"}}>Client Name : {props.reservation.Client}</h2>
                                            <h2 style={{fontSize: "20px",padding:"5px 0px"}}>Date : {moment(date).format("MMM Do YY")}</h2>
                                            
                                    </div>
                            </div>
                        </div>
                    </div>
        </div>
    </div>
  );
}

const GetState = (state) =>{
    return {
        User:state?.UserData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      UserData:(data) => dispatch({ type: 'SET_USERDATA',payload: data })
    }
  }
  export default connect(GetState,mapDispatchToProps)(RoomPopup);


