import '../Assets/Sass/Base.scss'
import './Hotel.scss'
import './Home.scss'
import PinIcons from '../Assets/Img/pin.png'
import OurHotels from '../Compenents/OurHotels'
import {useState} from 'react'
import SearchHotel from '../Compenents/SearchHotels'

function Home() {

    const [NumberHotel,SetNumberHotel] = useState(10)

  return (
    <>
        <div className="HotelPage">
                <div className="HotelPage__hero">
                    <SearchHotel/>
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
