import HotelImg from '../Assets/Img/HotelImg.jpg'
import {useEffect,useState} from 'react'
import API_URL from '../Config.js'
import Star from '../Assets/Img/star.png'
import { Link } from 'react-router-dom';



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


function ExploreHotels(Number) {
    console.log(Number.NumberHotels)
    const [Hotels,SetHotels] = useState([])
    useEffect(async() => {
            const res = await fetch(`${API_URL}/api/v1/Hotel?limit=70`);
            const ParseRes = await res.json();
            SetHotels(ParseRes)
    },[]); 
    // console.log(Hotels);
    
    const OurHotels =  Hotels.map(SingleHotel => {
        return (<Hotel key={SingleHotel._id} SingleHotel={SingleHotel} />)
    })
  return (
      <>
        {OurHotels}
      </>
  );
}


export default ExploreHotels;
