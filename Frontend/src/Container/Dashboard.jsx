import SideBar from '../Layout/SideBare'
import Header from '../Layout/HeaderDashboard'


const  DashboardLayout = ({ children }) => {
  return (
    <>
        <div className="Dashborad" style={{padding:'30px'}}>
                    <SideBar/>
                    <div className="Dashboard__Centent">
                        <Header/>
                        {children}
                    </div>
        </div>

    </>
  );
}

export default DashboardLayout;