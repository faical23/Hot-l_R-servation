import NavBar from '../Layout/Navbar'
import Footer from '../Layout/Footer'



 const  MainLayout = ({ children }) => {


    return (
        <>
            <div className="App"> 
                <NavBar/>
                    {children}
                <Footer/>
            </div>
        </>
    )
}
export default MainLayout