import NavBar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import { Outlet } from 'react-router-dom';



 const  MainLayout = () => {
    return (
        <>
            <div className="App"> 
                <NavBar/>
                    <Outlet/>
                <Footer/>
            </div>
        </>
    )
}
export default MainLayout