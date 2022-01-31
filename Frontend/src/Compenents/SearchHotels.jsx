import {useState,useEffect,useRef} from 'react'
import API_URL from '../Config'

const ResultSearch = (Hotel) =>{
    return (
        <p>{Hotel.Data.Name} ({Hotel.Data.City})</p>
    );
}

function SearchHotels() {

    const [OpenSearch,SetOpenSearch]=useState(false)
    const [ResultHotelsSearch,SetResultHotelsSearch] = useState([])
    const [InputSearch,SetInputSearch] = useState("")

    useEffect(async() => {
        const res = await fetch(`${API_URL}/api/v1/Hotel?limit=10&city=${InputSearch}`);
        const ParseRes = await res.json();
        SetResultHotelsSearch(ParseRes)
    },[InputSearch]); 

    const HotelResultFetch = ResultHotelsSearch.map(Element =>{
        return(<ResultSearch key={Element._id} Data={Element} />)
    })


  return (
      <>
                <h1>We can help u to find a beautiful Hotel</h1>
                <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès </p>
                <div className="SearchContainer">
                    <div className="container">
                        <input type="text" placeholder="Search city" onKeyUp={(e)=>{SetInputSearch(e.target.value)}}  onClick={()=>{SetOpenSearch(true)}}  />
                        {
                            !OpenSearch ?
                            <svg viewBox="-2 -2 103 103"><path  d="M78.11,69.76c-1.21-1.12-2.69-1.5-3.29-.85s-2.1.27-3.32-.83L70.3,67a3.75,3.75,0,0,1-.64-4.56S78,49,78,39A39,39,0,1,0,39,78c9,0,21.17-6.67,21.17-6.67A4.51,4.51,0,0,1,65,71.9l1.61,1.46c1.22,1.11,1.82,2.44,1.34,3s.11,1.87,1.33,3L90.89,99.24a3,3,0,0,0,4.24-.17l4.74-5.14a3,3,0,0,0-.17-4.24ZM39,71A32,32,0,1,1,71,39,32,32,0,0,1,39,71Z"/></svg>
                            :
                            <svg onClick={()=>{SetOpenSearch(false)}}  className="RemoveInput" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="340px" height="340px">    <path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59 L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59z"/></svg>
                        }
                    </div>
                        {
                          OpenSearch && <div className="ResultSearch">
                                            {ResultHotelsSearch.length > 0 ? HotelResultFetch : <h4>Not Found</h4>}
                                        </div>
                        } 
x                   </div>
      </>
  );
}


export default SearchHotels;
