import '../Assets/Sass/Base.scss'
import './Hotel.scss'
import './Home.scss'
import PinIcons from '../Assets/Img/pin.png'
import OurHotels from '../Compenents/OurHotels'
import {useState} from 'react'

function Home() {

    const [NumberHotel,SetNumberHotel] = useState(10)

  return (
    <>
        <div className="HotelPage">
                <div className="HotelPage__hero">
                        <h1>We can help u to find a beautiful Hotel</h1>
                        <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès </p>
                        <div className="container">
                            <input type="text" placeholder="Search city" />
                            <svg viewBox="-2 -2 103 103"><path  d="M78.11,69.76c-1.21-1.12-2.69-1.5-3.29-.85s-2.1.27-3.32-.83L70.3,67a3.75,3.75,0,0,1-.64-4.56S78,49,78,39A39,39,0,1,0,39,78c9,0,21.17-6.67,21.17-6.67A4.51,4.51,0,0,1,65,71.9l1.61,1.46c1.22,1.11,1.82,2.44,1.34,3s.11,1.87,1.33,3L90.89,99.24a3,3,0,0,0,4.24-.17l4.74-5.14a3,3,0,0,0-.17-4.24ZM39,71A32,32,0,1,1,71,39,32,32,0,0,1,39,71Z"/></svg>
                        </div>
                        
                        <button>Search</button>
                </div>
                <div className="HotelPage__BestLodging  mt-20">
                    <h1>find the best lodging</h1>
                    
                    <div className="HotelPage__Item">
                        <h2>Appartement</h2>
                        <h2>Hotels</h2>
                        <h2>Villa</h2>
                        <h2>Boarding house</h2>

                    </div>
                </div>
                <div className="HotelPage__OurSeelection mt-20">
                    <h1>curious ? browse our selection new</h1>     
                    <div className="HotelPage__Hotels mt-20">
                        <OurHotels NumberHotels={NumberHotel} />
                    </div>
                </div>
                <div className="BtnZone">
                    <button className="SeeMore" onClick={()=>{SetNumberHotel(prevState =>{return prevState+10})}}>See More</button>
                </div>
                <div className="CardFinal  mt-20">

                    <div className="CardFinal_Card">
                    <h1>Prepare yourself & let's explore our beauty hotels of the words</h1>
                    <img src={PinIcons} alt="" />
                    <p>we have many special hotels for you</p>
                    <button>Start business</button>
                </div>

                 </div>  
        </div>

    </>
  );
}

export default Home;
