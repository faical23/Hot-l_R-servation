
import '../../Assets/Sass/Base.scss'
import './client.scss'
import RéservationPopup from '../../Compenents/RéservationDétailPopup'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {ReservationPath} from '../../AppCall';
import {SwalAlert} from '../../Helpers/Alert'
import { connect } from "react-redux";
import Swal from 'sweetalert2'
import hotel_logo from '../../Assets/Img/hotel_logo.png'






function DashboradStatistique(Props) {
  const [OpenPopup, SetOpenPopup] = useState(false)
  const [ourReservation,SetourReservation] =useState([])
  const [Reservationselect,SetReservationselect] =useState('')
  const [OuReservationFilter,SetOuReservationFilter] = useState([])
  const [inputFilter,SetInputFilter] = useState('')
  const ClosePopup = () =>{
    SetOpenPopup(false)
  }

  const GetAllReservation = () =>{
    axios.get(`${process.env.REACT_APP_API_URL}${ReservationPath}/Hotel/${Props.User.data.User._id}`)
    .then((res)=>{
      SetourReservation(res.data)
      SetOuReservationFilter(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(() => {
    GetAllReservation()
  },[]);

  const DeleteReservation = (id) =>{
    console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${process.env.REACT_APP_API_URL}${ReservationPath}/${id}`)
        .then((res)=>{
          GetAllReservation()
          console.log("res",res)
        })
        .catch((err)=>{
          console.log(err)
        })

      }
    })

  }
  const payReservation = (id) =>{
    axios.put(`${process.env.REACT_APP_API_URL}${ReservationPath}/${id}`)
    .then((res)=>{
      GetAllReservation()
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(() => {
    if(inputFilter!= ""){
      const reservs = ourReservation.filter(item => item.Client.includes(inputFilter))
      SetOuReservationFilter(reservs)
    }
    else{
      SetOuReservationFilter(ourReservation)
    }
  },[inputFilter])

  return (
    <>
      { OpenPopup && <RéservationPopup close={ClosePopup} reservation={Reservationselect} />}
      
      <div  className="Dashboard__Centent__Tables">
        <div class="statistique__Allclients__search">
          <input type="text" placeholder="Search" onChange={(e)=>{SetInputFilter(e.target.value)}} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
        </div>
        <div class="statistique__Allclients__clientTable">
          <div class="statistique__Allclients__th">
            <p>Name</p>
            <p>Date start</p>
            <p>Date end</p>
            <p className="IspayeeHead">state</p>
            <p>action</p>
          </div>
          {
            OuReservationFilter.length ? OuReservationFilter.map(item =>{
              return(
                <div class="statistique__Allclients__td">
                  <p>{item.Client}</p>
                  <p>{item.DateStart.slice(0,10)}</p>
                  <p>{item.DateEnd.slice(0,10)}</p>
                  <p className={item.Payed ? 'Ispayee' : 'Notpayee'} onClick={()=>{payReservation(item._id)}}>Payée</p>
                  <p className="actions">
                        <svg
                          onClick={()=>{SetOpenPopup(true),SetReservationselect(item)}}
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                              d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"
                            />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="red"
                          onClick={()=>DeleteReservation(item._id)}
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path
                            d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
                          />
                        </svg>
                  </p>
              </div>
              )
            })
            :
            <p class="error">Not found</p>
          }
        </div>

      </div>
    </>
  );
}

const GetState = (state) =>{
  return {
      User:state?.UserData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    UserData:(data) => dispatch({ type: 'SET_USERDATA',payload: data })
  }
}
export default connect(GetState,mapDispatchToProps)(DashboradStatistique);
