import SideBar from '../Layout/SideBare'
import Header from '../Layout/HeaderDashboard'
import { Outlet } from 'react-router-dom';


const  DashboardLayout = ({ children }) => {
  return (
    <>
        <div className="Dashborad" style={{padding:'30px'}}>
                    <SideBar/>
                    <div className="Dashboard__Centent">
                        <Header/>
                        <Outlet/>
                    </div>
        </div>

    </>
  );
}

export default DashboardLayout;