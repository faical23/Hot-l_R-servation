import HotelIcons from '../Assets/Img/HotelIcons.png'
import HotelImg from '../Assets/Img/HotelImg.jpg'
import RateIcon from '../Assets/Img/star.png'
import {useEffect,useState} from 'react'
import API_URL from '../Config.js'

const Hotel = (Hotel) =>{
    return (
        <div  className="Tophotels__hotels__single">
            <img className="HotelImg" src={HotelImg} alt="" />
            <h2>enjoy to the beauty hotel Agadir</h2>
            <p>Agadir , Morocco</p>
            <div className="ReviewsHotel">
                <button>
                        <img src={RateIcon} alt="" />
                        4.6
                </button>
                <p>(2.5K reviews)</p>
            </div>
    </div>
    )

}


function ExploreHotels() {

    const [Hotels,SetHotels] = useState([])
    useEffect(async() => {
            const res = await fetch(`${API_URL}/api/v1/Hotel`);
            const ParseRes = await res.json();
            SetHotels(ParseRes)
    },[]); 
    console.log(Hotels)

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


export default ExploreHotels;
