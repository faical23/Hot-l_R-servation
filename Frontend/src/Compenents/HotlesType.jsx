import {useState,useEffect,useRef} from 'react'
import API_URL from '../Config'
import { connect } from "react-redux";
import {useFetch} from "../Helpers"

const Type = (Props) =>{
    console.log(Props.Type)
    const GetHotelsByType = async() =>{
        const EndPoint = `/api/v1/Hotel?Type=${Props.Type}`
        const Data = await useFetch('GET',EndPoint)
        Props.Store.GetHotelsData(Data)

    }
    return (
        <h2 onClick={() =>{GetHotelsByType()}}>{Props.Type}</h2>
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
      GetHotelsData: (Data) => dispatch({ type: 'GET_HOTELS_BY_TYPE',Data:Data}),
    }
}
export default connect(null,mapDispatchToProps)(SearchHotels);

