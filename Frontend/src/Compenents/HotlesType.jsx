import {useState,useEffect,useRef} from 'react'
import API_URL from '../Config'
import { connect } from "react-redux";
import {useFetch} from "../Helpers"

const Type = (Props) =>{
    return (
        <h2 onClick={() =>{Props.Store.GetByType(Props.Type)}}>{Props.Type}</h2>
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

