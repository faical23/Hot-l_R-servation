import {useState,useEffect,useRef} from 'react'
import API_URL from '../Config'
import { connect } from "react-redux";

const ResultSearchCity = (Props) =>{
    const CityName = useRef()
    const GetThisCityHotels = () =>{
        const EndPoint = `/api/v1/Hotel?limit=10&city=${CityName.current.innerHTML}`
        Props.Store.GetHotelsData('GET',EndPoint)
    }
    return (
        <p ref={CityName} onClick={() =>GetThisCityHotels()}>{Props.Data.City}</p>
    );
}

const ResultSearchHotel = (Hotel) =>{
    return (
        <p>{Hotel.Data.Name}</p>
    );
}

function SearchHotels(Store) {
    const [OpenSearchCity,SetOpenSearchCity]=useState(false)
    const [OpenSearchHotel,SetOpenSearchHotel]=useState(false)
    const [ResultCitysSearch,SetResultCitysSearch] = useState([])
    const [ResultHotelsSearch,SetResultHotelsSearch] = useState([])
    const [InputSearchCity,SetInputSearchCity] = useState("")
    const [InoputSearchHotel,SetInoputSearchHotel] = useState("")
    useEffect(async() => {
        if(InputSearchCity != ""){
            const res = await fetch(`${API_URL}/api/v1/Hotel?limit=10&city=${InputSearchCity}`);
            const ParseRes = await res.json();
            SetResultCitysSearch(ParseRes)
            console.log(ParseRes)
        }
    },[InputSearchCity]);
    useEffect(async() => {
        const res = await fetch(`${API_URL}/api/v1/Hotel?limit=10&Name=${InoputSearchHotel}`);
        const ParseRes = await res.json();
        SetResultHotelsSearch(ParseRes)
    },[InoputSearchHotel]);
    const CityResultFetch = ResultCitysSearch.map(Element =>{
        return(<ResultSearchCity key={Element._id} Data={Element} Store={Store}/>)
    })
    const HotelResultFetch = ResultHotelsSearch.map(Element =>{
        return(<ResultSearchHotel key={Element._id} Data={Element} />)
    })

  return (
      <>
                <h1>We can help u to find a beautiful Hotel</h1>
                <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès </p>
                <div className="SearchContainer">
                    <div className="SearchContainerFlex">
                        <div className="container ByCity">
                            <input type="text" placeholder="Search city" onChange={(e)=>{SetInputSearchCity(e.target.value)}}  onClick={()=>{SetOpenSearchCity(true)}}  />
                            {
                                !OpenSearchCity ?
                                <svg viewBox="-2 -2 103 103"><path  d="M78.11,69.76c-1.21-1.12-2.69-1.5-3.29-.85s-2.1.27-3.32-.83L70.3,67a3.75,3.75,0,0,1-.64-4.56S78,49,78,39A39,39,0,1,0,39,78c9,0,21.17-6.67,21.17-6.67A4.51,4.51,0,0,1,65,71.9l1.61,1.46c1.22,1.11,1.82,2.44,1.34,3s.11,1.87,1.33,3L90.89,99.24a3,3,0,0,0,4.24-.17l4.74-5.14a3,3,0,0,0-.17-4.24ZM39,71A32,32,0,1,1,71,39,32,32,0,0,1,39,71Z"/></svg>
                                :
                                <svg onClick={()=>{SetOpenSearchCity(false)}}  className="RemoveInput" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="340px" height="340px">    <path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59 L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59z"/></svg>
                            }
                        </div>
                        <div className="container ByHotel">
                            <input type="text" placeholder="Search Hotel" onChange={(e)=>{SetInoputSearchHotel(e.target.value)}}  onClick={()=>{SetOpenSearchHotel(true)}}  />
                            {
                                !OpenSearchHotel ?
                                <svg viewBox="-2 -2 103 103"><path  d="M78.11,69.76c-1.21-1.12-2.69-1.5-3.29-.85s-2.1.27-3.32-.83L70.3,67a3.75,3.75,0,0,1-.64-4.56S78,49,78,39A39,39,0,1,0,39,78c9,0,21.17-6.67,21.17-6.67A4.51,4.51,0,0,1,65,71.9l1.61,1.46c1.22,1.11,1.82,2.44,1.34,3s.11,1.87,1.33,3L90.89,99.24a3,3,0,0,0,4.24-.17l4.74-5.14a3,3,0,0,0-.17-4.24ZM39,71A32,32,0,1,1,71,39,32,32,0,0,1,39,71Z"/></svg>
                                :
                                <svg onClick={()=>{SetOpenSearchHotel(false)}}  className="RemoveInput" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="340px" height="340px">    <path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59 L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59z"/></svg>
                            }
                        </div>
                    </div>
                        {
                          OpenSearchCity  && <div className="ResultSearch">
                                            {ResultCitysSearch.length > 0 ? CityResultFetch : <h4>Not Found</h4>}
                                        </div>
                        } 
                        {
                          OpenSearchHotel  && <div className="ResultSearch">
                                            {ResultHotelsSearch.length > 0 ? HotelResultFetch : <h4>Not Found</h4>}
                                        </div>
                        } 
x               </div>
      </>
  );
}

const mapDispatchToProps = (dispatch) => {
    return {
      GetHotelsData: (Méthode,EndPoint) => dispatch({ type: 'GET_HOTELS_BY_CITY',Méthode:Méthode,EndPoint:EndPoint}),
    }
}
const GetState = (state) =>{
    return {
        CityHotels:state?.CityHotels,
    }
}
export default connect(GetState,mapDispatchToProps)(SearchHotels);

