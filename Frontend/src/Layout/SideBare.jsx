import '../Assets/Sass/Base.scss'
import './SideBare.scss'
import Chart from '../Assets/Img/Chart.png'
import Booking from '../Assets/Img/bookingSideBar.png'
import Setting from '../Assets/Img/setting.png'
import Logout from '../Assets/Img/logout.png'
import RoomsIcons from '../Assets/Img/RoomsIcons.png'
import customer from '../Assets/Img/customer.png'




function SideBar() {
  return (
    <div className="SideBare">
        <h1>Dashboard</h1>
        <ul>
          <li><img src={Chart} alt="" /> Statistique</li>
          <li><img src={RoomsIcons} alt="" />Rooms</li>
          <li><img src={customer} alt="" />Clients</li>
          <li><img src={Booking} alt="" />Réservations</li>
          <li><img src={Setting} alt="" />Settings</li>
        </ul>
        <li><img src={Logout} alt="" />Logout</li>
    </div>
  );
}

export default SideBar;
