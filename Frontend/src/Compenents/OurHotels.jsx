import HotelImg from '../Assets/Img/HotelImg.jpg'
import {useEffect,useState} from 'react'
import Star from '../Assets/Img/star.png'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {useFetch} from "../Helpers"



const Hotel = (Hotel) =>{
    const Rate = Hotel.SingleHotel.Comment
    const CalculeAvgRate  = () =>{
        let CollectRate  = 0;
        if(Rate.length>0){
            Rate.map(Element =>{
                if(Element.Rate == 5) CollectRate+=(5*Element.Rate)
                if(Element.Rate == 4) CollectRate+=(4*Element.Rate)
                if(Element.Rate == 3) CollectRate+=(3*Element.Rate)
                if(Element.Rate == 2) CollectRate+=(2*Element.Rate)
                if(Element.Rate == 1) CollectRate+=(1*Element.Rate)
            })
            const Total = Number.parseFloat(CollectRate).toFixed(1);
            return Total 
        }
        else return 0

    }
    return (
        <div className="HotelPage__Hotels__Item">
            <img className="HotelPage__Hotel_Img" src={HotelImg} alt="" />
            <h2>{Hotel.SingleHotel.Name}</h2>
            <div className="HotelPage__Hotel__Local">
                <h6>{Hotel.SingleHotel.Adress},{Hotel.SingleHotel.City}</h6>
                <div className="Rate">
                        <img src={Star} alt="" />
                        <h5>{CalculeAvgRate()}</h5>
                </div>
            </div>
            <h3>{Hotel.SingleHotel.StartPrice}DH<span>/Night</span></h3>
                <Link to={`/Hotel/${Hotel.SingleHotel._id}`}>
                    <button>Visit profil</button>
                </Link>
        </div>
    )

}


function ExploreHotels(Store) {
    const [Hotels,SetHotels] = useState([])
    useEffect(async() => {
        if(!Store.CityHotels){
            const EndPoint = `/api/v1/Hotel?limit=${Store.NumberHotels}`
            const Data = await useFetch('GET',EndPoint)
            SetHotels(Data)
        }
        else
            SetHotels(Store.CityHotels)


    },[Store.NumberHotels,Store.CityHotels]); 
    const OurHotels =  Hotels.map(SingleHotel => {
        return (<Hotel key={SingleHotel._id} SingleHotel={SingleHotel} />)
    })
  return (
        <div className="HotelPage__OurSeelection mt-20">
            <h1>curious ? browse our selection new</h1>
            {!Store.CityHotels ? '' : <h2 className="Result">{Hotels[0].City} ({Hotels.length} Hotels)</h2> }
            <div className="HotelPage__Hotels mt-20">
            {OurHotels}
            </div>
        </div>
  );
}
const GetState = (state) =>{
    return {
        CityHotels:state?.CityHotels,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      GetHotelsData: () => dispatch({ type: 'GET_HOTELS_BY_CITY'}),
    }
  }
export default  connect(GetState,mapDispatchToProps)(ExploreHotels);
