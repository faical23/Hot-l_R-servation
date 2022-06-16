import '../Assets/Sass/Base.scss'
import './Home.scss'
import HotelIcons from '../Assets/Img/HotelIcons.png'
import RocketIcons from '../Assets/Img/RocketIcon.png'
import FileIcons from '../Assets/Img/flame.png'
import WolrdIcons from '../Assets/Img/world.png'
import bookingIcons from '../Assets/Img/booking.png'
import hotelIcons from '../Assets/Img/hotel.png'
import Managment from '../Assets/Img/Managment.png'
import socialMedia from '../Assets/Img/socialMedia.png'
import reservation from '../Assets/Img/reservation.png'
import RateIcon from '../Assets/Img/star.png'
import review from '../Assets/Img/review.png'
import PinIcons from '../Assets/Img/pin.png'
import Hotel_3 from '../Assets/Img/Hotel_3.jpg'
import Hotel_2 from '../Assets/Img/hotel__2.jpg'
import Hotel_1 from '../Assets/Img/hotel__1.jpg'


import ExploreHotels from '../Compenents/ExploreHotels'


function Home() {
  return (
    <>
      <div className="HeroHome">
              <div className="HeroHome__Content">
                    <button>Explore the hotels
                      <img src={HotelIcons} alt="" />
                    </button>
                    <h1>
                        enjoy your dream vocation with our hotels 5 starts
                        <img src={RocketIcons} alt="" />
                    </h1>
                    <p>Pack d'icônes: Hotel · l'heure du déjeuner icon · chapeau de chef icon · ustensiles de restaurant croisés icon · fer électrique icon .</p>
                    <div className="Btns">
                       <button>Start business</button>
                    </div>

              </div>
              <div className="HeroHome__Img" style={{width: '50%'}}>
                  <img style={{width: "100%",borderRadius:"20px",boxShadow: "0px 0px 11px -5px"}} src={Hotel_1} alt="" />
            </div>
      </div>
      <div className="WhatWeServe mt-20">
        <div className="grid grid-cols-4 gap-4">
            <div className="WhatWeServe__Introduction">
                <h6>What we serve</h6>
                <h1>Top value for You 
                  <img src={FileIcons} alt="" />
                </h1>
                <p>try a variety of benefits where use our services</p>
            </div>
            <div className="WhatWeServe__Items">
                  <div className="WhatWeServe__Items__Single">
                        <img src={WolrdIcons} alt="" />
                        <h3>Lot of hotels</h3>
                        <p>Total 260 hotels in defferent country</p>
                        <span>For clients</span>
                  </div>
                  <div className="WhatWeServe__Items__Single">
                        <img src={reservation} alt="" />
                        <h3>online réservation</h3>
                        <p>Total 260 hotels in defferent country</p>
                        <span>For Business</span>
                  </div>
            </div>
            <div className="WhatWeServe__Items SecondItems">
                  <div className="WhatWeServe__Items__Single">
                        <img src={hotelIcons} alt="" />
                        <h3>Lot of Rooms</h3>
                        <p>Total 1500  Rooms in defferent Hotels</p>
                        <span>For Client</span>
                  </div>
                  <div className="WhatWeServe__Items__Single">
                        <img src={Managment} alt="" />
                        <h3>Managment hotels</h3>
                        <p>Total 1500  Rooms in defferent Hotels</p>
                        <span>For Business</span>
                  </div>
            </div>
            <div className="WhatWeServe__Items">
                  <div className="WhatWeServe__Items__Single">
                        <img src={bookingIcons} alt="" />
                        <h3>Easy booking</h3>
                        <p>with an easy and fast booking in our platform</p>
                        <span>For client</span>
                  </div>
                  <div className="WhatWeServe__Items__Single">
                        <img src={socialMedia} alt="" />
                        <h3>Marketing</h3>
                        <p>Total 1500  Rooms in defferent Hotels</p>
                        <span>For Business</span>
                  </div>
            </div>

        </div>
      </div>
      <div className="Tophotels mt-20">
            <ExploreHotels/>
      </div>
      <div className="Statistique mt-20">
            <div className="HeroHome__Img" style={{width: '50%'}}>
                  <img style={{width: "90%",borderRadius:"20px",boxShadow: "0px 0px 11px -5px"}} src={Hotel_2} alt="" />
            </div>
            <div className="Statistique__Content">
                  <div className="Statistique__Content__Introduction">
                        <h6>Our exeperience</h6>
                        <h1>With our exeperience we will serve you
                              <img src={FileIcons} alt="" />
                        </h1>
                        <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page
                        utilisée à titre provisoire pour calibrer une mise en page
                        utilisée à titre provisoire pour calibrer une mise en page
                        </p>
                  </div>
                  <div className="Statistique__Content__Items">
                              <div>
                                    <h1>+ 4000</h1>
                                    <h2>Client visit our platform</h2>
                              </div>
                              <div>
                                    <h1>+ 200</h1>
                                    <h2>Hotels</h2>
                              </div>
                              <div>
                                    <h1>+ 1300</h1>
                                    <h2>Rooms</h2>
                              </div>
                  </div>
            </div>
      </div>
      <div className="Reviews mt-20">
            <div className="Reviews__centent">
                  <div className="Statistique__Content__Introduction">
                        <h6>What they say</h6>
                        <h1>what our customers say about us
                              <img src={review} alt="" />
                        </h1>
                        <div className="CardReviews">
                              <p> " Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page
                              utilisée à titre provisoire pour calibrer une mise en page
                              utilisée à titre provisoire pour calibrer une mise en page ""
                              </p>
                              <h3>Faical Bahsis</h3>
                              <div className="RateRevwies">
                                    <img src={RateIcon} alt="" />
                                    <img src={RateIcon} alt="" />
                                    <img src={RateIcon} alt="" />
                                    <img src={RateIcon} alt="" />
                                    <img src={RateIcon} alt="" />
                              </div>
                        </div>

                  </div>
            </div>
            <div className="HeroHome__Img" style={{width: '50%'}}>
                  <img style={{width: "90%",margin:'0px auto',borderRadius:"20px",boxShadow: "0px 0px 11px -5px"}} src={Hotel_3} alt="" />
            </div>
      </div>
      <div className="CardFinal  mt-20">
            <div className="CardFinal_Card">
                  <h1>Prepare yourself & let's explore our beauty hotels of the words</h1>
                  <img src={PinIcons} alt="" />
                  <p>we have many special hotels for you</p>
                  <button>Start business</button>
            </div>

      </div>

    </>
  );
}

export default Home;
