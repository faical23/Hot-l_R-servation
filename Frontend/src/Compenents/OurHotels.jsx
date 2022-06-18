import HotelImg from '../Assets/Img/HotelImg.jpg'
import {useEffect,useState} from 'react'
import Star from '../Assets/Img/star.png'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {useFetch} from "../Helpers"






const Hotel = (Hotel) =>{
    const Rate = Hotel.SingleHotel.Comment

    return (
        <div className="HotelPage__Hotels__Item">
            <img style={{width:'100%',height: '320px',objectFit: 'cover'}} className="HotelImg" src={`${process.env.REACT_APP_API_PUBLIC}/${Hotel.SingleHotel.CoverImg}`} alt="" />
            <h2>{Hotel.SingleHotel.Name}</h2>
            <div className="HotelPage__Hotel__Local">
                <h6>{Hotel.SingleHotel.Adress},{Hotel.SingleHotel.City}</h6>
            </div>
            <h3>{Hotel.SingleHotel.StartPrice}DH<span>/Night</span></h3>
                <Link to={`/Hotel/${Hotel.SingleHotel._id}`}>
                    <button>Visit profil</button>
                </Link>
        </div>
    )

}


function ExploreHotels(Store) {
    const [Hotels,SetHotels] =useState(Store.HotelsStore)
    useEffect(async() => {
            const Data = await useFetch('GET',`/api/v1/Hotel`)
            Store.SetHotelsData(Data)
    },[]); 

    useEffect(async() => {
        if(Store.SearchByCity !== ""){
            Store.GetByType('')
            const FilterByName = Store.HotelsStore.filter(Item => Item.City == Store.SearchByCity)
            SetHotels(FilterByName)
        }
    },[Store.SearchByCity])

    useEffect(async() => {
        if(Store.SearchByType !== ""){
            Store.GetByCity('')
            const FilterByType = Store.HotelsStore.filter(Item => Item.TypeHotel == Store.SearchByType)
            SetHotels(FilterByType)
        }
    },[Store.SearchByType])

    const OurHotels =  Hotels.slice(0,Store.NumberHotels).map(SingleHotel => {
        return (<Hotel key={SingleHotel._id} SingleHotel={SingleHotel} />)
    })
  return (
        <div className="HotelPage__OurSeelection mt-20">
            <h1>curious ? browse our selection new</h1>

            {Store.SearchByCity && <h1>{Store.SearchByCity}({Hotels.length})</h1>}
            {Store.SearchByType && <h1>{Store.SearchByType}({Hotels.length})</h1>}
            <div className="HotelPage__Hotels mt-20">
                {OurHotels}
            </div>
        </div>
  );
}
const GetState = (state) =>{
    return {
        HotelsStore:state?.Hotels?.hotels,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      SetHotelsData: (data) => dispatch({ type: 'SET_HOTELS',payload:data}),
    }
  }
export default  connect(GetState,mapDispatchToProps)(ExploreHotels);
