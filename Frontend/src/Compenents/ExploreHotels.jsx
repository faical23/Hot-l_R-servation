import HotelIcons from '../Assets/Img/HotelIcons.png'
import HotelImg from '../Assets/Img/HotelImg.jpg'
import RateIcon from '../Assets/Img/star.png'
import {useEffect,useState} from 'react'
import API_URL from '../Config.js'

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
        <div  className="Tophotels__hotels__single">
            <img className="HotelImg" src={HotelImg} alt="" />
            <h2>enjoy to the beauty {Hotel.SingleHotel.Name}</h2>
            <p>{Hotel.SingleHotel.Adress} , {Hotel.SingleHotel.City}</p>
            <div className="ReviewsHotel">
                <button>
                    <img src={RateIcon} alt="" />
                    4/5
                </button>
                <p>({Rate.length} reviews)</p>
            </div>
    </div>
    )

}

function ExploreHotels() {
    const [Hotels,SetHotels] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${API_URL}/api/v1/Hotel?limit=10`)
            const ParseRes = await res.json();
            SetHotels(ParseRes)
        }
        fetchData()
        .catch(console.error);
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
