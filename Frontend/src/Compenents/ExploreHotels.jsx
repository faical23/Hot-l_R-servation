import HotelIcons from '../Assets/Img/HotelIcons.png'
import HotelImg from '../Assets/Img/HotelImg.jpg'
import RateIcon from '../Assets/Img/star.png'
import {useEffect,useState} from 'react'
import API_URL from '../Config.js'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


const Hotel = (Hotel) =>{
    console.log("hotel",Hotel.SingleHotel.CoverImg)
    return (
        <div  className="Tophotels__hotels__single">
            <Link to={`/Hotel/${Hotel.SingleHotel._id}`}>
                <img className="HotelImg" src={`${process.env.REACT_APP_API_PUBLIC}/${Hotel.SingleHotel.CoverImg}`} alt="" />
            </Link>

            <h2>enjoy to the beauty {Hotel.SingleHotel.Name}</h2>
            <p>{Hotel.SingleHotel.Adress} , {Hotel.SingleHotel.City}</p>
    </div>
    )

}

function ExploreHotels(props) {
    const [Hotels,SetHotels] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${API_URL}/api/v1/Hotel`)
            const ParseRes = await res.json();
            props.SetHotelsData(ParseRes)
            SetHotels(ParseRes)
        }
        fetchData()
        .catch(console.error);
    },[]); 
    
    const OurHotels =  Hotels.map(SingleHotel => {
        return (<Hotel key={SingleHotel._id} SingleHotel={SingleHotel} />)
    })
  return (
        <>
            <div className="Tophotels__Title">
                 <h6>Top hotels</h6>
                  <h1>Explore our hotels</h1>
                  <img src={HotelIcons} alt="" />
            </div>
            <div className="Tophotels__hotels">
                {OurHotels}
            </div>
        </>
  );
}

const GetState = (state) =>{
    return {
        HotelsStore:state?.Hotels,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      SetHotelsData: (data) => dispatch({ type: 'SET_HOTELS',payload:data}),
    }
  }
export default  connect(GetState,mapDispatchToProps)(ExploreHotels);
