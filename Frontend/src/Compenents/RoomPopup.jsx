import '../Assets/Sass/Base.scss'
import './Inscription.scss'
import '../Views/Dashboard/client.scss'

import Remove from '../Assets/Img/remove.png'
import { Input } from 'antd';
const { TextArea } = Input;
import { Select } from 'antd';
import { FileUploader } from "react-drag-drop-files";
import {useState,useEffect,useRef} from 'react'
import { connect } from "react-redux";
import axios from 'axios'
import {RoomsPath} from '../AppCall';
import {SwalAlert} from '../Helpers/Alert'

import camera from '../Assets/Img/camera.png'

const fileTypes = ["JPG", "PNG", "GIF"];
const { Option } = Select;

function RoomPopup(props) {
    const [file, setFile] = useState(null);
    const [RoomImg,SetRoomImg] = useState('');

    const [RoomData,SetRoomData] =useState({
        Number:'',
        Block:'',
        Price:'',
        Bed:'',
        Description:'',
        Type:'',
        Hotel:props.User.data.User._id,
        Image:''
    })
    const handleChange = (e) => {
        const newstate = {...RoomData}
        newstate.Image = e.target.files[0]
        SetRoomData(newstate)
        let reader = new FileReader();
        reader.onload = function(e) {
            SetRoomImg(reader.result)
        }
        reader.readAsDataURL(e.target.files[0]);
    };
    const ChangeState = (key,e) =>{
        const newstate = {...RoomData}
        newstate[key]=e.target.value
        SetRoomData(newstate)
    }

    const SubmitForm = ()=>{
        let bodyFormData = new FormData();
        for (const property in RoomData) {
            bodyFormData.append(property,RoomData[property])
          }
        axios({
            method: "post",
            url: process.env.REACT_APP_API_URL+RoomsPath,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" ,},
          })
            .then(function (response) {
                response.status === 201 && SwalAlert("Successfly add room.",'success')
                props.close()
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });

    }
    const updateForm = () =>{
        let bodyFormData = new FormData();
        for (const property in RoomData) {
            bodyFormData.append(property,RoomData[property])
          }
        axios({
            method: "put",
            url: `${process.env.REACT_APP_API_URL+RoomsPath}/${props.RoomId}`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" ,},
          })
            .then(function (response) {
                response.status === 200 && SwalAlert("Successfly Update room.",'success')
                props.close()
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });

    }


    const getRoomData = () =>{
        if(props.type == 'show' || props.type == 'update'){
            axios.get(`${process.env.REACT_APP_API_URL+RoomsPath}/${props.RoomId}`)
            .then((res)=>{
                const newstate = {...RoomData}
                newstate.Number=res.data[0].Number
                newstate.Block=res.data[0].Block
                newstate.Price=res.data[0].Price
                newstate.Bed=res.data[0].Bed
                newstate.Description=res.data[0].Description
                newstate.Type=res.data[0].Type
                newstate.Hotel=res.data[0].Hotel,
                newstate.Image=res.data[0].Image
                SetRoomData(newstate)
            })
            .catch((err)=>{
              console.log(err)
            })
        }
    }

    useEffect(async() => {
        getRoomData()
    },[props])


    const imageref = useRef()


  return (
    <div className="ConnexionZone">
        <div className="Inscription">
                    <img className="Remove" src={Remove} alt="" onClick={()=>{props.close()}}  />
                    <div >
                        <div className="Inscription__Faild">
                            <input  value={RoomData.Number} type="text" placeholder="Number" onChange={(e)=>{ChangeState('Number',e)}} />
                        </div>
                        <div className="Inscription__Faild">
                            <input value={RoomData.Block}  type="text" placeholder="Block" onChange={(e)=>{ChangeState('Block',e)}} />
                        </div>
                        <div className="Inscription__Faild">
                            <input value={RoomData.Price}  type="text" placeholder="Price" onChange={(e)=>{ChangeState('Price',e)}} />
                        </div>
                        <div className="Inscription__Faild">
                            <input value={RoomData.Bed}  type="number" placeholder="Bed number"  onChange={(e)=>{ChangeState('Bed',e)}} />
                        </div>
                        <TextArea value={RoomData.Description}  rows={4} placeholder="Description"  onChange={(e)=>{ChangeState('Description',e)}} />
                        <span style={{'textAlign':'start !important'}}>Room Type</span>
                        <select 
                        value={RoomData.Type} 
                        class="form-select" aria-label="Default select example"  onChange={(e)=>{
                                    const newstate = {...RoomData}
                                    newstate.Type = e.target.value
                                    SetRoomData(newstate)
                        }}>
                            <option selected>Open this select menu</option>
                            <option value="Room One bed">Room One bed</option>
                            <option value="Room Two bed">Room Two bed</option>
                            <option value="Villa">Villa</option>
                            <option value="Appartement">Appartement</option>
                            <option value="Room multiple bed">Room multiple bed</option>
                            <option value="Boarding house">Boarding house</option>

                            
                        </select>

                        <span style={{'textAlign':'start !important'}}>Images</span>

                            <img style={{margin:'20px 0px'}} src={`${process.env.REACT_APP_API_PUBLIC}/${RoomData.Image}`} alt="" />
                        
                        {RoomImg != "" && <img  src={RoomImg} alt="" />}
                        <input ref={imageref}  type="file"  onChange={(e)=>{handleChange(e)}}  hidden/>
                        <div
                        onClick={()=>{
                            imageref.current.click()
                        }}
                            style={{
                                    border: '1px solid black',
                                    borderRadius: '10px',
                                    padding: '4px',
                                    margin: '20px 0px',
                                    curious:'pointer'

                            }}
                        >
                            <img src={camera} alt=""  style={{margin:'0px auto',width:'50px'}}/>
                        </div>
                        <div className="Btn btn__rooms">
                            {props.type == "new" && <button className="UpdatePorile" onClick={()=>{SubmitForm()}}>New room</button>}
                            {props.type == "update" && <button className="UpdatePorile" onClick={()=>{updateForm()}}>Update room</button>}                            
                        </div>
                    </div>
        </div>
    </div>
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
  export default connect(GetState,mapDispatchToProps)(RoomPopup);



