import '../Assets/Sass/Base.scss'
import './Hotel.scss'
import './Home.scss'
import PinIcons from '../Assets/Img/pin.png'
import OurHotels from '../Compenents/OurHotels'
import {useState} from 'react'
import SearchHotel from '../Compenents/SearchHotels'
import { connect } from "react-redux";
import HotelTypes from "../Compenents/HotlesType"

function Home() {

    const [NumberHotel,SetNumberHotel] = useState(10)
    const [SearchByCity,SetSearchByCity] = useState('')
    const [SearchByType,SetSearchByType] = useState('')

    const GetByCity = (City) =>{SetSearchByCity(City)}
    const GetByType = (Type) =>{SetSearchByType(Type)}


    

  return (
    <>
        <div className="HotelPage">
                <div className="HotelPage__hero">
                    <SearchHotel GetByCity={GetByCity}/>
                </div>
                <div className="HotelPage__BestLodging  mt-20">
                    <h1>find the best lodging</h1>
                    <div className="HotelPage__Item">
                        <HotelTypes GetByType={GetByType}/>
                    </div>
                </div>
                <OurHotels NumberHotels={NumberHotel}  GetByCity={GetByCity} GetByType={GetByType} SearchByType={SearchByType}   SearchByCity={SearchByCity}/>
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

const GetState = (state) =>{
    return {
        CityHotels:state?.CityHotels,
    }
}
export default connect(GetState)(Home);
