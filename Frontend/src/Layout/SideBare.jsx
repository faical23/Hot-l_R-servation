import '../Assets/Sass/Base.scss'
import './SideBare.scss'
import Chart from '../Assets/Img/Chart.png'
import Booking from '../Assets/Img/bookingSideBar.png'
import Setting from '../Assets/Img/setting.png'
import Logout from '../Assets/Img/logout.png'
import RoomsIcons from '../Assets/Img/RoomsIcons.png'
import customer from '../Assets/Img/customer.png'
import HotelIcon from '../Assets/Img/HotelSideBar.png'

import { Link } from 'react-router-dom';



function SideBar() {
  return (
    <div className="SideBare">
        <h1>Dashboard</h1>
        <ul>
            <Link to="/Dashboard/profil">
              <li><img src={HotelIcon} alt="" /> Profile</li>
            </Link>
            <Link to="/Dashboard/Statistique">
              <li>
                <img src={Chart} alt="" /> Statistique
              </li>
            </Link>
            <Link to="/Dashboard/Rooms">
                <li><img src={RoomsIcons} alt="" />Rooms</li>
            </Link>
            <Link to="/Dashboard/Clients">
                <li><img src={customer} alt="" />Clients</li>
            </Link>
            <Link to="/Dashboard/Reservations">
                <li><img src={Booking} alt="" />Réservations</li>
            </Link>
            <Link to="/Dashboard/Settings">
                <li><img src={Setting} alt="" />Settings</li>
            </Link>
        </ul>
        <li><img src={Logout} alt="" />Logout</li>
    </div>
  );
}

export default SideBar;
