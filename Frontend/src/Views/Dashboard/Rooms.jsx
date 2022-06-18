import '../../Assets/Sass/Base.scss'
import './client.scss'
import RoomPopup from '../../Compenents/RoomPopup'
import {useState,useEffect,useRef} from 'react'
import { connect } from "react-redux";
import axios from 'axios'
import {RoomsPath} from '../../AppCall';
import {SwalAlert} from '../../Helpers/Alert'
import Swal from 'sweetalert2'



function DashboradStatistique(props) {
  const [OpenPopup,SetOpenPopup] =useState(false)
  const [TypePopup,SetTypePopup] =useState('')
  const [RoomId,SetRoomId] = useState('')
  const [TypeRooms,SetTypeRooms] =useState({
    Appartement:0,
    Villa:0,
    Rooms:0,
    Boarding:0
  })
  const [AllRooms,SetAllRooms] = useState([])
  const [FilterRooms,SetFilterRooms] = useState([])


  const ClosePopup = () =>{
    GetAllRooms()
    SetOpenPopup(false)
  }

  const GetAllRooms = () =>{
    axios.get(`${process.env.REACT_APP_API_URL+RoomsPath}/Hotel/${props.User.data.User._id}`)
    .then((res)=>{
      SetAllRooms(res.data)
      SetFilterRooms(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(() => {
    GetAllRooms()
  },[]);

  useEffect(() => {
    const app = AllRooms.filter(item => item.Type=='Appartement')
    const room = AllRooms.filter(item => (item.Type=='Room multiple bed' || item.Type=='Room Two bed' || item.Type=='Room One bed'))
    const Villa = AllRooms.filter(item => item.Type=='Villa')
    const Boarding = AllRooms.filter(item => item.Type=='Boarding house')
    const newstate = {...TypeRooms}
    newstate.Appartement=app.length
    newstate.Villa=Villa.length
    newstate.Rooms=room.length
    newstate.Boarding=Boarding.length
    SetTypeRooms(newstate)
  },[AllRooms]);

  const HandleSearch = (e) =>{
    if(e.target.value!= ""){
      const rooms = AllRooms.filter(item => item.Type.includes(e.target.value))
      SetFilterRooms(rooms)
    }
    else{
      SetFilterRooms(AllRooms)
    }
  }
  const DeleteFunction = (id) =>{
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
        axios.delete(`${process.env.REACT_APP_API_URL+RoomsPath}/${id}`)
        .then((res)=>{
            GetAllRooms()
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
        })
        .catch((err)=>{
          console.log(err)
        })

      }
    })
  }
  const RemoveReserved = (id)=>{
    axios.put(`${process.env.REACT_APP_API_URL+RoomsPath}//updatestate/${id}`,{})
    .then((res)=>{
      GetAllRooms()
    })
    .catch((err)=>{
      console.log(err)
    })

    console.log(id)
  }

  return (
    <>
      {OpenPopup && <RoomPopup type={TypePopup} close={ClosePopup} RoomId={RoomId}  />}
      <div className="Dashboard__Centent__Tables">
        <div class="DashboardMoney__card">
              <div class="DashboardMoney__card__single">
                <svg id="Layer_1" enable-background="new 0 0 512.012 512.012" height="35" viewBox="0 0 512.012 512.012" width="35" xmlns="http://www.w3.org/2000/svg"><path d="m512.012 253.996v89c-1.056 26.536-38.953 26.516-40 0v-39.51l-63.651 63.652c-3.75 3.751-8.838 5.858-14.142 5.858h-100.923l-133.142 133.142c-7.81 7.811-20.474 7.811-28.284 0-7.811-7.811-7.811-20.474 0-28.284l139-139c3.75-3.751 8.838-5.858 14.142-5.858h100.922l59-59h-42.922c-26.536-1.056-26.516-38.953 0-40h90c11.046 0 20 8.954 20 20zm-20 149c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 0c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 0c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 61c-11.046 0-20 8.954-20 20v8c1.056 26.536 38.953 26.516 40 0v-8c0-11.046-8.954-20-20-20zm-41-125c11.046 0 20-8.954 20-20v-12.284c62.696-23.208 47.556-115.437-20.001-116.716-26.592-1.085-26.463-38.759.001-39.857 8.03 0 14.441 4.254 17.59 11.673 4.316 10.167 16.058 14.909 26.226 10.594 10.167-4.316 14.91-16.058 10.594-26.226-6.695-15.771-19.134-27.304-34.41-32.675v-13.51c-1.056-26.536-38.953-26.516-40 0v13.57c-62.606 23.207-47.675 115.147 20.001 116.43 26.443 1.095 26.611 39.042-.001 40.143-7.778 0-15.492-5.075-18.758-12.342-4.528-10.075-16.367-14.571-26.441-10.043-10.075 4.528-14.572 16.366-10.043 26.441 6.826 15.187 19.908 26.854 35.242 32.395v12.406c0 11.047 8.954 20.001 20 20.001zm-69.004 68.475c8.042 0 15.627-4.887 18.678-12.846 3.955-10.313-1.201-21.88-11.515-25.834-174.133-70.315-127.366-325.664 60.844-328.795 82.77 0 153.19 59.068 167.442 140.45 1.905 10.879 12.27 18.155 23.15 16.25s18.156-12.27 16.25-23.15c-8.418-48.07-33.655-92.02-71.063-123.753-134.824-115.236-346.385-17.36-345.781 160.205-1.008 85.365 55.009 166.487 134.839 196.142 2.356.903 4.775 1.331 7.156 1.331z"/></svg>
                <h5 class="card__money">{TypeRooms.Rooms}</h5>
                <span class="card__titre">Simple room</span>
              </div>
              <div class="DashboardMoney__card__single">
                        <svg id="Layer_1" enable-background="new 0 0 512.012 512.012" height="35" viewBox="0 0 512.012 512.012" width="35" xmlns="http://www.w3.org/2000/svg"><path d="m512.012 253.996v89c-1.056 26.536-38.953 26.516-40 0v-39.51l-63.651 63.652c-3.75 3.751-8.838 5.858-14.142 5.858h-100.923l-133.142 133.142c-7.81 7.811-20.474 7.811-28.284 0-7.811-7.811-7.811-20.474 0-28.284l139-139c3.75-3.751 8.838-5.858 14.142-5.858h100.922l59-59h-42.922c-26.536-1.056-26.516-38.953 0-40h90c11.046 0 20 8.954 20 20zm-20 149c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 0c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 0c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 61c-11.046 0-20 8.954-20 20v8c1.056 26.536 38.953 26.516 40 0v-8c0-11.046-8.954-20-20-20zm-41-125c11.046 0 20-8.954 20-20v-12.284c62.696-23.208 47.556-115.437-20.001-116.716-26.592-1.085-26.463-38.759.001-39.857 8.03 0 14.441 4.254 17.59 11.673 4.316 10.167 16.058 14.909 26.226 10.594 10.167-4.316 14.91-16.058 10.594-26.226-6.695-15.771-19.134-27.304-34.41-32.675v-13.51c-1.056-26.536-38.953-26.516-40 0v13.57c-62.606 23.207-47.675 115.147 20.001 116.43 26.443 1.095 26.611 39.042-.001 40.143-7.778 0-15.492-5.075-18.758-12.342-4.528-10.075-16.367-14.571-26.441-10.043-10.075 4.528-14.572 16.366-10.043 26.441 6.826 15.187 19.908 26.854 35.242 32.395v12.406c0 11.047 8.954 20.001 20 20.001zm-69.004 68.475c8.042 0 15.627-4.887 18.678-12.846 3.955-10.313-1.201-21.88-11.515-25.834-174.133-70.315-127.366-325.664 60.844-328.795 82.77 0 153.19 59.068 167.442 140.45 1.905 10.879 12.27 18.155 23.15 16.25s18.156-12.27 16.25-23.15c-8.418-48.07-33.655-92.02-71.063-123.753-134.824-115.236-346.385-17.36-345.781 160.205-1.008 85.365 55.009 166.487 134.839 196.142 2.356.903 4.775 1.331 7.156 1.331z"/></svg>

                <h5 class="card__money">{TypeRooms.Boarding}</h5>
                <span class="card__titre">Boarding house</span>
              </div>
              <div class="DashboardMoney__card__single">
                <svg id="Layer_1" enable-background="new 0 0 512.012 512.012" height="35" viewBox="0 0 512.012 512.012" width="35" xmlns="http://www.w3.org/2000/svg"><path d="m512.012 253.996v89c-1.056 26.536-38.953 26.516-40 0v-39.51l-63.651 63.652c-3.75 3.751-8.838 5.858-14.142 5.858h-100.923l-133.142 133.142c-7.81 7.811-20.474 7.811-28.284 0-7.811-7.811-7.811-20.474 0-28.284l139-139c3.75-3.751 8.838-5.858 14.142-5.858h100.922l59-59h-42.922c-26.536-1.056-26.516-38.953 0-40h90c11.046 0 20 8.954 20 20zm-20 149c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 0c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 0c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 61c-11.046 0-20 8.954-20 20v8c1.056 26.536 38.953 26.516 40 0v-8c0-11.046-8.954-20-20-20zm-41-125c11.046 0 20-8.954 20-20v-12.284c62.696-23.208 47.556-115.437-20.001-116.716-26.592-1.085-26.463-38.759.001-39.857 8.03 0 14.441 4.254 17.59 11.673 4.316 10.167 16.058 14.909 26.226 10.594 10.167-4.316 14.91-16.058 10.594-26.226-6.695-15.771-19.134-27.304-34.41-32.675v-13.51c-1.056-26.536-38.953-26.516-40 0v13.57c-62.606 23.207-47.675 115.147 20.001 116.43 26.443 1.095 26.611 39.042-.001 40.143-7.778 0-15.492-5.075-18.758-12.342-4.528-10.075-16.367-14.571-26.441-10.043-10.075 4.528-14.572 16.366-10.043 26.441 6.826 15.187 19.908 26.854 35.242 32.395v12.406c0 11.047 8.954 20.001 20 20.001zm-69.004 68.475c8.042 0 15.627-4.887 18.678-12.846 3.955-10.313-1.201-21.88-11.515-25.834-174.133-70.315-127.366-325.664 60.844-328.795 82.77 0 153.19 59.068 167.442 140.45 1.905 10.879 12.27 18.155 23.15 16.25s18.156-12.27 16.25-23.15c-8.418-48.07-33.655-92.02-71.063-123.753-134.824-115.236-346.385-17.36-345.781 160.205-1.008 85.365 55.009 166.487 134.839 196.142 2.356.903 4.775 1.331 7.156 1.331z"/></svg>
                <h5 class="card__money">{TypeRooms.Villa}</h5>
                <span class="card__titre">Villa</span>
              </div>
              <div class="DashboardMoney__card__single">
                <svg id="Layer_1" enable-background="new 0 0 512.012 512.012" height="35" viewBox="0 0 512.012 512.012" width="35" xmlns="http://www.w3.org/2000/svg"><path d="m512.012 253.996v89c-1.056 26.536-38.953 26.516-40 0v-39.51l-63.651 63.652c-3.75 3.751-8.838 5.858-14.142 5.858h-100.923l-133.142 133.142c-7.81 7.811-20.474 7.811-28.284 0-7.811-7.811-7.811-20.474 0-28.284l139-139c3.75-3.751 8.838-5.858 14.142-5.858h100.922l59-59h-42.922c-26.536-1.056-26.516-38.953 0-40h90c11.046 0 20 8.954 20 20zm-20 149c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 0c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 0c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 61c-11.046 0-20 8.954-20 20v8c1.056 26.536 38.953 26.516 40 0v-8c0-11.046-8.954-20-20-20zm-41-125c11.046 0 20-8.954 20-20v-12.284c62.696-23.208 47.556-115.437-20.001-116.716-26.592-1.085-26.463-38.759.001-39.857 8.03 0 14.441 4.254 17.59 11.673 4.316 10.167 16.058 14.909 26.226 10.594 10.167-4.316 14.91-16.058 10.594-26.226-6.695-15.771-19.134-27.304-34.41-32.675v-13.51c-1.056-26.536-38.953-26.516-40 0v13.57c-62.606 23.207-47.675 115.147 20.001 116.43 26.443 1.095 26.611 39.042-.001 40.143-7.778 0-15.492-5.075-18.758-12.342-4.528-10.075-16.367-14.571-26.441-10.043-10.075 4.528-14.572 16.366-10.043 26.441 6.826 15.187 19.908 26.854 35.242 32.395v12.406c0 11.047 8.954 20.001 20 20.001zm-69.004 68.475c8.042 0 15.627-4.887 18.678-12.846 3.955-10.313-1.201-21.88-11.515-25.834-174.133-70.315-127.366-325.664 60.844-328.795 82.77 0 153.19 59.068 167.442 140.45 1.905 10.879 12.27 18.155 23.15 16.25s18.156-12.27 16.25-23.15c-8.418-48.07-33.655-92.02-71.063-123.753-134.824-115.236-346.385-17.36-345.781 160.205-1.008 85.365 55.009 166.487 134.839 196.142 2.356.903 4.775 1.331 7.156 1.331z"/></svg>
                <h5 class="card__money">{TypeRooms.Appartement}</h5>
                <span class="card__titre">appartement</span>
              </div>
        </div>
        <div className="Btn btn__rooms">
          <button className="UpdatePorile" onClick={()=>{SetOpenPopup(true);SetTypePopup('new')}}>New room</button>
        </div>
        <div class="statistique__Allclients__search">
              <input type="text" placeholder="Search By Type"onChange={(e)=>{HandleSearch(e)}} />
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
                <p>Number</p>
                <p>Block</p>
                <p>Type</p>
                <p>Price</p>
                <p>Number o bed</p>
                <p className="IsReserved">state</p>
                <p>action</p>
              </div>
              {
                FilterRooms.map(item=>{
                    return(
                      <div class="statistique__Allclients__td">
                      <p>{item.Number}</p>
                      <p>{item.Block}</p>
                      <p>{item.Type}</p>
                      <p>{item.Price}$</p>
                      <p>{item.Bed}</p>
                      <p className={item.State ? "Notreserved" : "Isreserved"} onClick={()=>{RemoveReserved(item._id)}}>Réserved</p>
                      <p className="actions">
                            <svg
                              onClick={()=>{SetOpenPopup(true);SetTypePopup('show'),SetRoomId(item._id)}}
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
                              onClick={()=>{SetOpenPopup(true);SetTypePopup('update'),SetRoomId(item._id)}}
                        xmlns="http://www.w3.org/2000/svg"
                        enable-background="new 0 0 24 24"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#4480AB"
                      >
                        <g><rect fill="none" height="24" width="24" /></g>
                        <g>
                          <g>
                            <g>
                              <path
                                d="M3,21l3.75,0L17.81,9.94l-3.75-3.75L3,17.25L3,21z M5,18.08l9.06-9.06l0.92,0.92L5.92,19L5,19L5,18.08z"
                              />
                            </g>
                            <g>
                              <path
                                d="M18.37,3.29c-0.39-0.39-1.02-0.39-1.41,0l-1.83,1.83l3.75,3.75l1.83-1.83c0.39-0.39,0.39-1.02,0-1.41L18.37,3.29z"
                              />
                            </g>
                          </g>
                        </g>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 0 24 24"
                              width="24px"
                              fill="red"
                              onClick={()=>DeleteFunction(item._id)}
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
              }
              {FilterRooms.length == 0 && <p class="error">Not found</p>}
              
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
    }
  }
  export default connect(GetState,mapDispatchToProps)(DashboradStatistique);
