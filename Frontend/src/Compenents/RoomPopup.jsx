import '../Assets/Sass/Base.scss'
import './Inscription.scss'
import '../Views/Dashboard/client.scss'

import Remove from '../Assets/Img/remove.png'
import { Input } from 'antd';
const { TextArea } = Input;
import { Select } from 'antd';
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];
const { Option } = Select;

function RoomPopup(props) {
    console.log("props",props)
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };
  return (
    <div className="ConnexionZone">
        <div className="Inscription">
                    <img className="Remove" src={Remove} alt="" onClick={()=>{props.close()}}  />
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
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <span style={{'textAlign':'start !important'}}>Images</span>
                        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                        <div className="Btn btn__rooms">
                            {props.type == "new" && <button className="UpdatePorile">New room</button>}
                            {props.type == "update" && <button className="UpdatePorile">Update room</button>}                            
                        </div>
                    </div>
        </div>
    </div>
  );
}

export default (RoomPopup);


