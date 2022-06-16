import {useState,useEffect,useRef} from 'react'
import API_URL from '../Config'
import { connect } from "react-redux";
import {useFetch} from "../Helpers"
import VillaType from '../Assets/Img/villa_type.jpg'
import RoomType from '../Assets/Img/room_type.jpg'
import AppType from '../Assets/Img/App_type.jpg'
import BoatType from '../Assets/Img/boat_type.jpg'

const Type = (Props) =>{
    return (
        <>
            {Props.Type == "Appartement" && <h2 style={{backgroundImage:`url(${AppType})`}} onClick={() =>{Props.Store.GetByType(Props.Type)}}>{Props.Type}</h2>}
            {Props.Type == "Hotels" && <h2 style={{backgroundImage:`url(${RoomType})`}} onClick={() =>{Props.Store.GetByType(Props.Type)}}>{Props.Type}</h2>}
            {Props.Type == "Villa" && <h2 style={{backgroundImage:`url(${VillaType})`}} onClick={() =>{Props.Store.GetByType(Props.Type)}}>{Props.Type}</h2>}
            {Props.Type == "Boarding house" && <h2 style={{backgroundImage:`url(${BoatType})`}} onClick={() =>{Props.Store.GetByType(Props.Type)}}>{Props.Type}</h2>}

        </>
        
    )
}

function SearchHotels(Store) {
    const OurTypes = ["Appartement","Hotels","Villa","Boarding house"]
    const TypeMaping = OurTypes.map(Data=>{
        return <Type key={Data} Type={Data} Store={Store} />
        
    })
    return (
        <>
            {TypeMaping}
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(null,mapDispatchToProps)(SearchHotels);

