import '../../Assets/Sass/Base.scss'
import './client.scss'
import Select from 'react-select'
import { Input } from 'antd';
import {useState,useEffect,useRef} from 'react'
import { connect } from "react-redux";
const { TextArea } = Input;
import camera from '../../Assets/Img/camera.png'
import axios from 'axios'
import {HotelPath,HotelPathUpdateImg} from '../../AppCall';
import {SwalAlert} from '../../Helpers/Alert'





function DashboradStatistique(Props) {
    const [userData,SetUserdata] = useState(Props.User.data)
    const [ImgHotel,SetImgHotel] =useState('')
    const ImgRef = useRef()
    // const [LocalisationName,SetLocalisationName] =useState()
    const options = [
      { value: 'wifi', label: 'wifi' },
      { value: 'piscine', label: 'piscine' },
      { value: 'Boite', label: 'Boite' },
      { value: 'Transport', label: 'Transport' },
      { value: 'Café', label: 'Café' },
      { value: 'Salle fitness', label: 'Salle fitness' },
      { value: 'Restaurant', label: 'Restaurant' }
    ]
    const HandleChangeSelect =(e)=>{
        const newstate = {...userData}
        newstate.User["Service"]=e
        SetUserdata(newstate)
    }
    const ChangeState = (key,e) =>{
        const newstate = {...userData}
        newstate.User[key]=e.target.value
        SetUserdata(newstate)
    }
    console.log("userData.User._id",userData.User)

    const SubmitUpdate = () =>{
        axios.put(`${process.env.REACT_APP_API_URL+HotelPath}/${userData.User._id}`,userData.User)
        .then((res)=>{
            res.status === 200 && SwalAlert("successfully Updating.",'success')
            const data = {
                User:res.data,
                token:Props.User.data.token
            }
            Props.UserData(data)
        })
        .catch(err=>{
           console.log(err)
        })
    }
    const GetImg = (e) =>{
        let reader = new FileReader();
        reader.onload = function(e) {
            SetImgHotel(reader.result)
        }
        reader.readAsDataURL(e.target.files[0]);
        let bodyFormData = new FormData();
        bodyFormData.append("CoverImg",e.target.files[0])
        bodyFormData.append("_id",userData.User._id)

        const headers = 
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        axios.put(`${process.env.REACT_APP_API_URL+HotelPathUpdateImg}/${userData.User._id}`,bodyFormData,headers)
        .then((res)=>{
            const data = {
                User:res.data,
                token:Props.User.data.token
            }
            Props.UserData(data)
        })
        .catch(err=>{
           console.log(err)
        })
          
    }
    useEffect(async() => {
        const Img =  `${process.env.REACT_APP_API_PUBLIC}/${userData.User.CoverImg}`
        SetImgHotel(Img)
        console.log("Img",Img)
    },[userData.User.CoverImg])
    console.log("userData",userData.User.CoverImg)

  return (
      <div  className="Dashboard__Centent__Tables">
        <h1 clasName="Dashboard__Centent__Tables__Title">INFORMATIONS</h1>
        <div class="First__Informations">
          <div className="Dashboard__Centent__Tables__Input">
              <span>Hotel Name</span>
              <div className="Inscription__Faild">
                  <input  value={userData.User?.Name}  onChange={(e)=>{ChangeState("Name",e)}} type="text" placeholder="Hotel sofitel"/>
              </div>
          </div>
          <div className="Dashboard__Centent__Tables__Input">
            <span>Email</span>
            <div className="Inscription__Faild">
                <input  onChange={(e)=>{ChangeState("Email",e)}}  type="text" placeholder="exemple@gmail.com"  value={userData.User?.Email} />
            </div>
        </div>
        <div className="Dashboard__Centent__Tables__Input">
            <span>Phone</span>
            <div className="Inscription__Faild">
                <input onChange={(e)=>{ChangeState("Phone",e)}}  type="text" placeholder="xxx xxxx xxxx xxxx"  value={userData.User?.Phone} />
            </div>
        </div>
        <div className="Dashboard__Centent__Tables__Input">
            <span>Adress</span>
            <div className="Inscription__Faild">
                <input  onChange={(e)=>{ChangeState("Adress",e)}}  type="text" placeholder="Exemple, rue 16, 8000"  value={userData.User?.Adress} />
            </div>
        </div>
        <div className="Dashboard__Centent__Tables__Input">
            <span>Facbook</span>
            <div className="Inscription__Faild">
                <input  onChange={(e)=>{ChangeState("FacbookPage",e)}} type="text" placeholder="Facbook"  value={userData.User?.FacbookPage} />
            </div>
        </div>
        <div className="Dashboard__Centent__Tables__Input">
            <span>Instagraam</span>
            <div className="Inscription__Faild">
                <input onChange={(e)=>{ChangeState("Instagram",e)}} type="text" placeholder="instagram"   value={userData.User?.Instagram} />
            </div>
        </div>
        <div className="Dashboard__Centent__Tables__Input">
            <span>Website</span>
            <div className="Inscription__Faild">
                <input onChange={(e)=>{ChangeState("Website",e)}} type="text" placeholder="Website"   value={userData.User?.Website} />
            </div>
        </div>
        <div className="Dashboard__Centent__Tables__Input">
            <span>Start price</span>
            <div className="Inscription__Faild">
                <input  onChange={(e)=>{ChangeState("StartPrice",e)}}  placeholder="0DH"  value={userData.User?.StartPrice} />
            </div>
        </div>


        </div>
        <div className="Second_Informations">
          <span>Services</span>
          <Select 
              isMulti
              name="Services"
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={e =>{HandleChangeSelect(e)}}
              defaultValue={userData.User?.Service}
           />
          <span>Description</span>
          <TextArea  onChange={(e)=>{ChangeState("Description",e)}} rows={4} placeholder="Description" value={userData.User?.Description} />
          <span>Localisation</span>
          <div className="Inscription__Faild">
                  <input onChange={(e)=>{ChangeState("Localisation",e)}} type="text" placeholder="Localisation" value={userData.User?.Localisation} />
          </div>
          <div className="Localisation">
                    <iframe width="100%" height="400" id="gmap_canvas" 
                    src={`https://maps.google.com/maps?q=${Props.User.data.User.Localisation}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
        
        </div>
        <div className="Third-Informations_img">
            <span>Cover image</span>
            <input type="file" ref={ImgRef} onChange={(e)=>{GetImg(e)}} hidden />
            <img   style={{width:'70%',margin:'30px auto'}}  src={ImgHotel} alt=""  onClick={()=>{ImgRef.current.click()}}  />

                <div className="CoverImg" style={{padding:"20px 0px"}}>     
                    <img onClick={()=>{ImgRef.current.click()}} style={{width:'50px',margin:"0px auto"}} src={camera} alt="" />
                </div>

        </div>
        <div className="Btn">
          <button onClick={()=>{SubmitUpdate()}} className="UpdatePorile">Update</button>
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
      UserData:(data) => dispatch({ type: 'SET_USERDATA',payload: data })
    }
  }
  export default connect(GetState,mapDispatchToProps)(DashboradStatistique);