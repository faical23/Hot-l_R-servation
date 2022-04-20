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


const Profile = (Store)=>{
    const [HotelData,SetHotelData] =useState([])
    const { id } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${API_URL}/api/v1/Hotel/${id}`)
            const ParseRes = await res.json();
            SetHotelData(ParseRes)
            console.log("hotel data",HotelData)
        }
        fetchData()
        .catch(console.error);
    },[]); 
    console.log(HotelData[0]?.Services)

    return (
        <div className="Profile">
            {Store.Réserve && <Réservation  Data='99'/>}
            <div  className="Profile__Hero">
                <h1>{HotelData[0]?.Name}</h1>
            </div>
            <div className="Profile_Information">
                <div className="Profile_Information__Right">
                        <div className="Profile_Information__Services">
                                <div className="Localisation">
                                    <h5 className="TitleSection">Localisation</h5>
                                    <div className="Localisation_Map">
                                        <iframe  style={{width:'100%',height:'300px'}} src={'https://www.google.com/maps?q='+HotelData[0]?.Localisation+'&output=embed'}>
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
                                            <h6>{HotelData[0]?.Name}</h6>
                                        </div>
                                        <div className="Informationbusiness_item">
                                            <img src={Email} alt="" />
                                            <h6>{HotelData[0]?.Email}</h6>
                                        </div>
                                        <div className="Informationbusiness_item">
                                            <img src={Phone} alt="" />
                                            <h6>{HotelData[0]?.Phone}</h6>
                                        </div>
                                        <div className="Informationbusiness_item">
                                            <img src={Localisation} alt="" />
                                            <h6>{HotelData[0]?.Adress}</h6>
                                        </div>
                                </div>
                        </div>
                        <div className="Profile_Services">
                                <h5 className="TitleSection">services</h5>
                                <div  className="Profile_Services_items">
                                    {HotelData[0]?.Services?.includes('Wifi') && <div className="Profile_Services_items_item">
                                        <img src={Wifi} alt="" />
                                        <h6>Wifi</h6>
                                    </div>}
                                    {HotelData[0]?.Services?.includes("Piscine") && <div className="Profile_Services_items_item">
                                        <img src={Piscine} alt="" />
                                        <h6>Piscine</h6>
                                    </div>}
                                    {HotelData[0]?.Services?.includes('Boite') &&<div className="Profile_Services_items_item">
                                        <img src={Boite} alt="" />
                                        <h6>Boite</h6>
                                    </div>}
                                    {HotelData[0]?.Services?.includes("Transport") &&<div className="Profile_Services_items_item">
                                        <img src={Transport} alt="" />
                                        <h6>Transport</h6>
                                    </div>}
                                    {HotelData[0]?.Services?.includes("Restarant") &&<div className="Profile_Services_items_item">
                                        <img src={Restaurant} alt="" />
                                        <h6>Restaurant</h6>
                                    </div>}
                                    {HotelData[0]?.Services?.includes('Café') &&<div className="Profile_Services_items_item">
                                        <img src={Cafee} alt="" />
                                        <h6>Café</h6>
                                    </div>}
                                    {HotelData[0]?.Services?.includes('Salle fitness') &&<div className="Profile_Services_items_item">
                                        <img src={Fitness} alt="" />
                                        <h6>Salle fitness</h6>
                                    </div>}
                                </div>
                        </div>
                        <div className="Profile_SocialMedia">
                                <h5 className="TitleSection">Social media</h5>
                                <div className="Profile_SocialMedia__Icons">
                                    {HotelData[0]?.FacbookPage && <img src={Facebook} alt="" />}
                                    {HotelData[0]?.Instagram && <img src={Instagram} alt="" />}
                                    {HotelData[0]?.Website && <img src={Browser} alt="" />}
                                </div>
                        </div>
                        <div className="Profile_Revwies">
                                <h5 className="TitleSection">Reviews</h5>
                            <div className="reviews">
                                <div className="reviews__card">
                                    <div className="reviews__card__all">
                                        <h3><span>4.7</span>/5</h3>
                                        <div className="reviews__card__all__starts">
                                            <div className="start">
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                            </div>
                                        </div>
                                        <p>240 reviews</p>
                                    </div>
                                    <div className="reviews__card__Allbars">
                                        <div className="reviews__card__Allbars_singleBars">
                                            <p>1</p>
                                            <div className="single_Bar">
                                                <div className="bar_yellow" style={{width:'50%'}}>
                                                </div>
                                            </div>
                                            <p>(40)</p>
                                        </div>
                                        <div className="reviews__card__Allbars_singleBars">
                                            <p>1</p>
                                            <div className="single_Bar">
                                                <div className="bar_yellow" style={{width:'50%'}}>
                                                </div>
                                            </div>
                                            <p>(40)</p>
                                        </div>
                                        <div className="reviews__card__Allbars_singleBars">
                                            <p>1</p>
                                            <div className="single_Bar">
                                                <div className="bar_yellow" style={{width:'50%'}}>
                                                </div>
                                            </div>
                                            <p>(40)</p>
                                        </div>
                                        <div className="reviews__card__Allbars_singleBars">
                                            <p>1</p>
                                            <div className="single_Bar">
                                                <div className="bar_yellow" style={{width:'50%'}}>
                                                </div>
                                            </div>
                                            <p>(40)</p>
                                        </div>
                                        <div className="reviews__card__Allbars_singleBars">
                                            <p>1</p>
                                            <div className="single_Bar">
                                                <div className="bar_yellow" style={{width:'50%'}}>
                                                </div>
                                            </div>
                                            <p>(40)</p>
                                        </div>
                                    </div>
                                    <button>See all reviews</button>
                                </div>

                            </div>
                        </div>
                        <div className="Profile_Comment">
                            <div className="reviewsPeaple__single">
                                <div className="reviewsPeaple__single_Info">
                                        <h4>FB</h4>
                                        <div>
                                            <h6>Fiacal bahsis</h6>
                                            <span>21 april, 2022</span>
                                        </div>
                                </div>
                                    <p>This guy is everything you could want. Great code, great price, great communication. Don't hesitate, this is your guy!</p>
                            </div>
                            <div className="reviewsPeaple__single">
                                <div className="reviewsPeaple__single_Info">
                                        <h4>FB</h4>
                                        <div>
                                            <h6>Fiacal bahsis</h6>
                                            <span>21 april, 2022</span>
                                        </div>
                                </div>
                                    <p> great price, great communication</p>
                            </div>
                            <div className="reviewsPeaple__single">
                                <div className="reviewsPeaple__single_Info">
                                        <h4>FB</h4>
                                        <div>
                                            <h6>Fiacal bahsis</h6>
                                            <span>21 april, 2022</span>
                                        </div>
                                </div>
                                    <p>This guy is everything you could want. Great code, great price, great communication. Don't hesitate, this is your guy!</p>
                            </div>
                        </div>
                        <div className="NewComment">
                            <div className="NewComment__Faild">
                                <img src={User} alt="" />
                                <input type="text" placeholder="Your name" />
                            </div>
                            <div  className="NewComment__Faild" >
                                <textarea  placeholder="Write Your Message"></textarea>
                            </div>
                            <button>Ajouter</button>
                        </div>
                </div>
                <div className="Profile_Information__left">
                    <div className="Description">
                        <h5>Description</h5>
                        <p>
                            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                        </p>
                    </div>
                    <div className="Offers">
                        <h5 className="TitleSection">Our Offers</h5>
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
                        <div className="Offer__Type">
                            <img src={roomTwoBed} alt="" />
                            <div className="Offer__Type__Content">
                                    <h4>Room Two bed</h4>
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
                                            <button>Book now</button>
                                    </div>
                            </div>
                        </div>
                        <div className="Offer__Type">
                            <img src={Villa} alt="" />
                            <div className="Offer__Type__Content">
                                    <h4>Villa</h4>
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
                                            <button>Book now</button>
                                    </div>
                            </div>
                        </div>
                        <div className="Offer__Type">
                            <img src={Appartement} alt="" />
                            <div className="Offer__Type__Content">
                                    <h4>Appartement</h4>
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
                                            <button>Book now</button>
                                    </div>
                            </div>
                        </div>
                        <div className="Offer__Type">
                            <img src={roomTwoBed} alt="" />
                            <div className="Offer__Type__Content">
                                    <h4>Room multiple bed</h4>
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
                                            <button>Book now</button>
                                    </div>
                            </div>
                        </div>

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