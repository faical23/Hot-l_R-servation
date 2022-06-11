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
