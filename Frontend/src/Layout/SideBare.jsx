import '../Assets/Sass/Base.scss'
import './SideBare.scss'
import Chart from '../Assets/Img/Chart.png'
import Booking from '../Assets/Img/bookingSideBar.png'
import Setting from '../Assets/Img/setting.png'
import Logout from '../Assets/Img/logout.png'
import RoomsIcons from '../Assets/Img/RoomsIcons.png'
import customer from '../Assets/Img/customer.png'
import HotelIcon from '../Assets/Img/HotelSideBar.png'
import { connect } from "react-redux";


import { Link } from 'react-router-dom';



function SideBar(props) {
  return (
    <div className="SideBare">
        <h1>Dashboard</h1>
        <ul>
          <Link to="/">
              <li><img src={HotelIcon} alt="" /> Home</li>
            </Link>
            <Link to="/Dashboard/profil">
              <li><img src={HotelIcon} alt="" /> Profile</li>
            </Link>
            {/* <Link to="/Dashboard/Statistique">
              <li>
                <img src={Chart} alt="" /> Statistique
              </li>
            </Link> */}
            <Link to="/Dashboard/Rooms">
                <li><img src={RoomsIcons} alt="" />Rooms</li>
            </Link>
            <Link to="/Dashboard/profit">
                <li><img src={customer} alt="" />profit</li>
            </Link>
            {/* <Link to="/Dashboard/Clients">
                <li><img src={customer} alt="" />Clients</li>
            </Link> */}
            <Link to="/Dashboard/Reservations">
                <li><img src={Booking} alt="" />Réservations</li>
            </Link>
        </ul>
            <Link to="/"  onClick={()=>{localStorage.clear();Store.UserData(userData)}}>
                <li><img src={Logout} alt="" />Logout</li>
            </Link>
        </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    UserData:(data) => dispatch({ type: 'SET_USERDATA',payload: data })
  }
}


export default connect(null,mapDispatchToProps)(SideBar);
