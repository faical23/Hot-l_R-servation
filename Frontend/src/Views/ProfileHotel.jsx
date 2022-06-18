import '../Assets/Sass/Base.scss'
import './Profile.scss'
import Wifi from '../Assets/Img/wifi.png'
import Facebook from '../Assets/Img/facebook.png'
import Twitter from '../Assets/Img/twitter.png'
import Instagram from '../Assets/Img/instagram.png'
import Browser from '../Assets/Img/browser.png'
import Piscine from '../Assets/Img/swimming.png'
import Boite from '../Assets/Img/disco.png'
import Transport from '../Assets/Img/taxi.png'
import Restaurant from '../Assets/Img/cutlery.png'
import Cafee from '../Assets/Img/coffee.png'
import Fitness from '../Assets/Img/fitness.png'
import moment from 'moment'


import HotelIcon from '../Assets/Img/hotelProdil.png'
import Email from '../Assets/Img/email.png'
import Phone from '../Assets/Img/phone-call.png'
import Localisation from '../Assets/Img/location.png'
import star from '../Assets/Img/star.png'
import User from '../Assets/Img/user.png'

import HotelRooms from '../Assets/Img/HotelRoom.jpg'
import RoomBed from '../Assets/Img/bed.png'
import roomTwoBed from '../Assets/Img/roomTwoBed.jpg'
import Villa from '../Assets/Img/villa.jpg'
import Appartement from '../Assets/Img/appartement.jpg'

import Réservation from '../Compenents/Réservation'
import API_URL from '../Config.js'

import { connect } from "react-redux";
import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import {Comment,HotelRoompath} from '../AppCall'
import axios from 'axios'
import {SwalAlert} from '../Helpers/Alert'



const HotelOffer = (Props) =>{
        return(
            <div className="Offer__Type">
                <img src={HotelRooms} alt="" />
                <div className="Offer__Type__Content">
                        <h4>Room One bed</h4>
                        <div className="HowManyBed">
                            <h5>1</h5>
                            <span>X</span>
                            <img src={RoomBed} alt="" />
                        </div>
                        <p>
                            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer.
                        </p>
                        <div className="PriceAndReserve">
                                <h1>130$<span>/Night</span></h1>
                                <button onClick={() =>Store.OpenRéserve()}>Book now</button>
                        </div>
                </div>
            </div>
        )
}

const Profile = (Store)=>{
    const Data = {
        _id:'61f6a06172b9470c19f0f73e',
        Name:"Hotel Sofitel",
        City:"marakesh",
        Email:"Morocco@gmail.com",
        Adress:"Hay ryad agadir",
        Phone:"06A9889837",
        CoverImg:"",
        Image:[],
        Website:"ABC",
        Description:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée àtitre provisoire pour calibrer une mise en page, ",
        FacbookPage:"facebook",
        Instagram:"instagram",
        Localisation:"Agadir",
        Comment:['this is best hotel','i love ur hotels'],
        createdAt:'2022-01-30T14:27:45.933+00:00',
        updatedAt:'2022-01-30T14:27:45.933+00:00',
        StartPrice:"16",
        TypeHotel:"Villa",
        Service:['Wifi','Piscine','Boite','Transport','Café','Restarant',"Salle fitness"],
    }
    const [HotelData,SetHotelData] =useState(Data)
    const [getcomment,SetgetComment] =useState([])
    const [getRooms,SetgetRooms] = useState([])
    const [OpenRéserve,SetOpenRéserve] =useState(false)
    const [RoomSeelect,SetRoomSeelect] =useState('')
    const { id } = useParams()
    useEffect(() => {
        axios.get(`${API_URL}/api/v1/Hotel/${id}`)
        .then(res =>{
            console.log("res",res.data[0])
            SetHotelData(res.data[0])
        })
        .catch(err =>{
            console.log("err",err)
        })
    },[]); 

    const pathurl = (window.location.pathname).split('/')
    const [comment,SetComment] = useState({
        Name:"",
        Comment:'',
        _id:pathurl[2]
    })

    const ChangeState = (key,e) =>{
        const newstate = {...comment}
        newstate[key]=e.target.value
        SetComment(newstate)
    }

    const AddComment = () =>{
        if(comment.Name !== "" && comment.Comment !== ""){
            axios.post(`${process.env.REACT_APP_API_URL+Comment}`,comment)
            .then((res)=>{
                res.status === 200 && SwalAlert("Success add comment.",'success')
                getCommentHotel()
            })
            .catch(err=>{
                SwalAlert("Please Try again",'error')
            })
          }
        console.log("ee",comment)
    }

    const getCommentHotel = () =>{
        axios.get(`${process.env.REACT_APP_API_URL+Comment}/${id}`)
        .then(res =>{
            SetgetComment(res.data)
        })
        .catch(err =>{
            console.log("err",err)
        })
    }
    const getRoomsHotels = () =>{
        axios.get(`${process.env.REACT_APP_API_URL+HotelRoompath}/${id}`)
        .then(res =>{
            const app = res.data.filter(item => item.Type=='Appartement')
            const room = res.data.filter(item => (item.Type=='Room multiple bed' || item.Type=='Room Two bed' || item.Type=='Room One bed'))
            const Villa = res.data.filter(item => item.Type=='Villa')
            const Boarding = res.data.filter(item => item.Type=='Boarding house')
            const AllRooms = [app[0],room[0],Villa[0],Boarding[0]]
            SetgetRooms(AllRooms)
        })
        .catch(err =>{
            console.log("err",err)
        })
    }
    useEffect(()=>{
        getCommentHotel()
        getRoomsHotels()
    },[HotelData])

    const ClosePopup = () =>{
        SetOpenRéserve(false)
    }

    
    return (
        <div className="Profile">
            {OpenRéserve && <Réservation  room={RoomSeelect} ClosePopup={ClosePopup}/>}
            <div  className="Profile__Hero" style={{backgroundImage:`url(${process.env.REACT_APP_API_PUBLIC}/${HotelData?.CoverImg})`}}>
                <h1>{HotelData?.Name}</h1>
            </div>
            <div className="Profile_Information">
                <div className="Profile_Information__Right">
                        <div className="Profile_Information__Services">
                                <div className="Localisation">
                                    <h5 className="TitleSection">Localisation</h5>
                                    <div className="Localisation_Map">
                                        <iframe  style={{width:'100%',height:'300px'}} src={'https://www.google.com/maps?q='+HotelData?.Localisation+'&output=embed'}>
                                            <a href="https://www.gps.ie/sport-gps/">gps watches</a>
                                        </iframe>
                                    </div>
                                </div>
                        </div>
                        <div className="Informationbusiness">
                                <h5 className="TitleSection">Informations</h5>
                                <div className="Informationbusiness_Items">
                                        <div className="Informationbusiness_item">
                                            <img src={HotelIcon} alt="" />
                                            <h6>{HotelData?.Name}</h6>
                                        </div>
                                        <div className="Informationbusiness_item">
                                            <img src={Email} alt="" />
                                            <h6>{HotelData?.Email}</h6>
                                        </div>
                                        <div className="Informationbusiness_item">
                                            <img src={Phone} alt="" />
                                            <h6>{HotelData?.Phone}</h6>
                                        </div>
                                        <div className="Informationbusiness_item">
                                            <img src={Localisation} alt="" />
                                            <h6>{HotelData?.Adress}</h6>
                                        </div>
                                </div>
                        </div>
                        <div className="Profile_Services">
                                <h5 className="TitleSection">services</h5>
                                <div  className="Profile_Services_items">
                                    
                                    {
                                        HotelData?.Service.length && HotelData?.Service.map(Item =>{
                                            return(
                                                <>
                                                    {
                                                        Item.value == 'wifi' &&
                                                        <div className="Profile_Services_items_item">
                                                            <img src={Wifi} alt="" />
                                                            <h6>Wifi</h6>
                                                        </div>
                                                    }
                                                    {
                                                        Item.value == 'Boite' &&
                                                        <div className="Profile_Services_items_item">
                                                            <img src={Boite} alt="" />
                                                            <h6>Boite</h6>
                                                        </div>
                                                    }
                                                   {
                                                        Item.value == 'piscine' &&
                                                        <div className="Profile_Services_items_item">
                                                            <img src={Piscine} alt="" />
                                                            <h6>piscine</h6>
                                                        </div>
                                                    }
                                                                                                      {
                                                        Item.value == 'Restaurant' &&
                                                        <div className="Profile_Services_items_item">
                                                            <img src={Restaurant} alt="" />
                                                            <h6>Restaurant</h6>
                                                        </div>
                                                    }
                                                                                                      {
                                                        Item.value == 'Salle fitness' &&
                                                        <div className="Profile_Services_items_item">
                                                            <img src={Fitness} alt="" />
                                                            <h6>Salle fitness</h6>
                                                        </div>
                                                    }
                                                                                                                                                          {
                                                        Item.value == 'Café' &&
                                                        <div className="Profile_Services_items_item">
                                                            <img src={Cafee} alt="" />
                                                            <h6>Café</h6>
                                                        </div>
                                                    }
                                                                                                                                                                                                              {
                                                        Item.value == 'Transport' &&
                                                        <div className="Profile_Services_items_item">
                                                            <img src={Transport} alt="" />
                                                            <h6>Transport</h6>
                                                        </div>
                                                    }
                                                    
                                                </>

                                            )
                                        })
                                    }
                                    {/* {HotelData?.Services?.includes('Wifi') && 
                                <div className="Profile_Services_items_item">
                                        <img src={Wifi} alt="" />
                                        <h6>Wifi</h6>
                                    </div>
                                    }
                                    {HotelData?.Services?.includes("Piscine") && <div className="Profile_Services_items_item">
                                        <img src={Piscine} alt="" />
                                        <h6>Piscine</h6>
                                    </div>}
                                    {HotelData?.Services?.includes('Boite') &&<div className="Profile_Services_items_item">
                                        <img src={Boite} alt="" />
                                        <h6>Boite</h6>
                                    </div>}
                                    {HotelData?.Services?.includes("Transport") &&<div className="Profile_Services_items_item">
                                        <img src={Transport} alt="" />
                                        <h6>Transport</h6>
                                    </div>}
                                    {HotelData?.Services?.includes("Restarant") &&<div className="Profile_Services_items_item">
                                        <img src={Restaurant} alt="" />
                                        <h6>Restaurant</h6>
                                    </div>}
                                    {HotelData?.Services?.includes('Café') &&<div className="Profile_Services_items_item">
                                        <img src={Cafee} alt="" />
                                        <h6>Café</h6>
                                    </div>}
                                    {HotelData?.Services?.includes('Salle fitness') &&<div className="Profile_Services_items_item">
                                        <img src={Fitness} alt="" />
                                        <h6>Salle fitness</h6>
                                    </div>} */}
                                </div>
                        </div>
                        <div className="Profile_SocialMedia">
                                <h5 className="TitleSection">Social media</h5>
                                <div className="Profile_SocialMedia__Icons">
                                    {HotelData?.FacbookPage && <img src={Facebook} alt="" />}
                                    {HotelData?.Instagram && <img src={Instagram} alt="" />}
                                    {HotelData?.Website && <img src={Browser} alt="" />}
                                </div>
                        </div>
                        <div className="Profile_Comment">
                            {
                                getcomment.map(item =>{
                                    return (
                                        <div className="reviewsPeaple__single">
                                            <div className="reviewsPeaple__single_Info">
                                                    <div>
                                                        <h6>{item.Name}</h6>
                                                        <span>{moment(item.createdAt).startOf('day').fromNow()}</span>
                                                    </div>
                                            </div>
                                                <p>{item.Comment}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="NewComment">
                            <div className="NewComment__Faild">
                                <img src={User} alt="" />
                                <input type="text" placeholder="Your name" onChange={(e)=>{ChangeState("Name",e)}} />
                            </div>
                            <div  className="NewComment__Faild" >
                                <textarea  placeholder="Write Your Message" onChange={(e)=>{ChangeState("Comment",e)}}></textarea>
                            </div>
                            <button onClick={()=>{AddComment()}}>Ajouter</button>
                        </div>
                </div>
                <div className="Profile_Information__left">
                    <div className="Description">
                        <h5>Description</h5>
                        <p>
                            {HotelData?.Description}
                        </p>
                    </div>
                    <div className="Offers">
                        <h5 className="TitleSection">Our Offers</h5>
                        {
                            getRooms.length && getRooms.map(item=>{
                                if(item){                                
                                    return(
                                        <div className="Offer__Type">
                                            <img src={`${process.env.REACT_APP_API_PUBLIC}/${item?.Image}`} alt="" />
                                            <div className="Offer__Type__Content">
                                                    <h4>{item?.Type}</h4>
                                                    <div className="HowManyBed">
                                                        <h5>{item?.Bed}</h5>
                                                        <span>X</span>
                                                        <img src={RoomBed} alt="" />
                                                    </div>
                                                    <p>{item?.Description}</p>
                                                    <div className="PriceAndReserve">
                                                            <h1>${item?.Price}$<span>/Night</span></h1>
                                                            <button onClick={()=>{SetRoomSeelect(item),SetOpenRéserve(true)}}>Book now</button>
                                                    </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }


                    </div>

                </div>
            </div>
        </div>
    )
}
//// DATA WANT TO GET FROM STORE redux

const GetState = (state) =>{
    return {
        Réserve:state?.Réserve,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      OpenRéserve: () => dispatch({ type: 'OPEN_RESERVE'}),
    }
  }

export default connect(GetState,mapDispatchToProps) (Profile);