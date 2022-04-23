import '../Assets/Sass/Base.scss'
import './Inscription.scss'
import '../Views/Dashboard/client.scss'

import Remove from '../Assets/Img/remove.png'
import Select from 'react-select'
import { Input } from 'antd';
const { TextArea } = Input;

function Rooms(props) {
    const options = [
        { value: 'Simple room', label: 'Simple room' },
        { value: 'Multi bed', label: 'Multi bed' },
        { value: 'Villa', label: 'Villa' },
        { value: 'Appartement', label: 'Appartement' }
      ]
  return (
    <div className="ConnexionZone">
        <div className="Inscription">
                    <img className="Remove" src={Remove} alt="" onClick={()=>Store.ClosePopup()}  />
                    <div >
                        <div className="Inscription__Faild">
                            <input type="text" placeholder="Number" />
                        </div>
                        <div className="Inscription__Faild">
                            <input type="text" placeholder="Block" />
                        </div>
                        <div className="Inscription__Faild">
                            <input type="text" placeholder="Price" />
                        </div>
                        <div className="Inscription__Faild">
                            <input type="number" placeholder="Bed number" />
                        </div>
                        <TextArea rows={4} placeholder="Description" maxLength={6} />
                        <span style={{'textAlign':'start !important'}}>Room Type</span>
                        <Select options={options} />
                        <span style={{'textAlign':'start !important'}}>Images</span>

                        <div className="Btn btn__rooms">
                            <button className="UpdatePorile">New room</button>
                        </div>
                    </div>
        </div>
    </div>
  );
}

export default (Rooms);
