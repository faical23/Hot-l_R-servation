import Notifications from '../Assets/Img/Notification.png'
import './SideBare.scss'
import moment from 'moment'
import {useState} from 'react'
import { connect } from "react-redux";



function DashboradStatistique(props) {
  const today = new Date()
  const convertdate = moment(today).format("MMM Do YY");  
  console.log("props ==>",props.User.data.User.Name) 
  return (
    <>
        <div className="Dashborad__Haeder" style={{display:'flex',justifyContent: 'space-between'}}>
            <h5>{props.User.data.User.Name}</h5>
            <h5>{convertdate}</h5>
      </div>
    </>
  );
}
const GetState = (state) =>{
  return {
      User:state?.UserData
  }
}
export default connect(GetState,"")(DashboradStatistique);

