import '../../Assets/Sass/Base.scss'
import './client.scss'
import Select from 'react-select'
import { Input } from 'antd';
const { TextArea } = Input;
import camera from '../../Assets/Img/camera.png'





function DashboradStatistique() {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    const HandleChangeSelect =(e)=>{
      console.log(e)
    }
  return (
      <div  className="Dashboard__Centent__Tables">
        <h1 clasName="Dashboard__Centent__Tables__Title">INFORMATIONS</h1>
        <div class="First__Informations">
          <div className="Dashboard__Centent__Tables__Input">
              <span>Hotel Name</span>
              <div className="Inscription__Faild">
                  <input type="text" placeholder="Hotel sofitel" />
              </div>
          </div>
          <div className="Dashboard__Centent__Tables__Input">
            <span>Email</span>
            <div className="Inscription__Faild">
                <input type="text" placeholder="exemple@gmail.com" />
            </div>
        </div>
        <div className="Dashboard__Centent__Tables__Input">
            <span>Phone</span>
            <div className="Inscription__Faild">
                <input type="text" placeholder="xxx xxxx xxxx xxxx" />
            </div>
        </div>
        <div className="Dashboard__Centent__Tables__Input">
            <span>Adress</span>
            <div className="Inscription__Faild">
                <input type="text" placeholder="Exemple, rue 16, 8000" />
            </div>
        </div>
        <div className="Dashboard__Centent__Tables__Input">
            <span>Facbook</span>
            <div className="Inscription__Faild">
                <input type="text" placeholder="Facbook" />
            </div>
        </div>
        <div className="Dashboard__Centent__Tables__Input">
            <span>Instagraam</span>
            <div className="Inscription__Faild">
                <input type="text" placeholder="instagram" />
            </div>
        </div>
        <div className="Dashboard__Centent__Tables__Input">
            <span>Website</span>
            <div className="Inscription__Faild">
                <input type="text" placeholder="Website" />
            </div>
        </div>
        <div className="Dashboard__Centent__Tables__Input">
            <span>Twitter</span>
            <div className="Inscription__Faild">
                <input type="text" placeholder="Twitter" />
            </div>
        </div>
        </div>
        <div className="Second_Informations">
          {/* <span>Services</span> */}
          {/* <Select 
              isMulti
              name="Services"
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={e =>{HandleChangeSelect(e)}}
           /> */}
          <span>Description</span>
          <TextArea rows={4} placeholder="Description" maxLength={6} />
          <span>Localisation</span>
          <div className="Inscription__Faild">
                  <input type="text" placeholder="Localisation" />
          </div>
          <div className="Localisation">
                                    <div className="Localisation_Map">
                                        <iframe  style={{width:'100%',height:'300px'}} src={'https://www.google.com/maps?q=&output=embed'}>
                                            <a href="https://www.gps.ie/sport-gps/">gps watches</a>
                                        </iframe>
                                    </div>
          </div>
        
        </div>
        <div className="Third-Informations_img">
            <span>Cover image</span>
            <div className="CoverImg">
                <img src={camera} alt="" />
            </div>
        </div>
        <div className="Btn">
          <button className="UpdatePorile">Update</button>
        </div>
      </div>
  );
}

export default DashboradStatistique;
