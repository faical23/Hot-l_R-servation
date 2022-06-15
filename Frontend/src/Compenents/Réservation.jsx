import '../Assets/Sass/Base.scss'
import './Inscription.scss'

import Remove from '../Assets/Img/remove.png'
import { connect } from "react-redux";
import Phone from '../Assets/Img/phone-call.png'
import User from '../Assets/Img/user.png'
import Email from '../Assets/Img/email.png'

function Login(Props) {
    console.log("props",Props)

  return (
    <div className="ConnexionZone">   
        <div className="Inscription">
                    <img className="Remove" src={Remove} alt="" onClick={()=>Props.ClosePopup()}  />
                    <div >
                        <div className="Inscription__Faild">
                              <img src={User}/>
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="Inscription__Faild">
                            <img src={Email}/>            
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="Inscription__Faild">
                            <img src={Phone}/>            
                            <input type="text" placeholder="Phone" />
                        </div>
                        <div className="Date">
                            <div>
                                <h6>Check in</h6>
                                <input type="date" />
                            </div>
                            <div>
                                <h6>Check out</h6>
                                <input type="date" />
                            </div>
                        </div>

                        <button>Book now</button>
                    </div>

        </div>
    </div>
  );
}
const GetState = (state) =>{
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(GetState,mapDispatchToProps)(Login);
