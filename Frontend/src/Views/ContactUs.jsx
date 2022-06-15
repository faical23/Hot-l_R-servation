import '../Assets/Sass/Base.scss'
import './Contact.scss'
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Support} from '../AppCall';
import {SwalAlert} from '../Helpers/Alert'


function Contact() {
    const [DataMessage,SetDataMessage] = useState({
        Name:'',
        Email:'',
        Subject:'',
        Message:'',
      })
    
      const ChangeState = (key,e) =>{
          const newstate = {...DataMessage}
          newstate[key]=e.target.value
          SetDataMessage(newstate)
      }

      const SendMessage =(e) =>{
        if(DataMessage.Email !== ""){
            axios.post(`${process.env.REACT_APP_API_URL+Support}`,DataMessage)
            .then((res)=>{
              res.status === 200 && SwalAlert("Message sent successfully.",'success')
            })
            .catch(err=>{
                SwalAlert("Please repeat again.",'error')
            })
          }
      }

  return (
      <>
        <div class="contact">
            <div class="leftPart">
                <div class="leftPart__borer">
                </div>
                <h2>Have Questions ?</h2>
                <p>
                    Our pricing is really simple, and you only pay for the features you need. Remember, anyone who starts out gets a free 14 day trial to try out our premium features too!
                </p>
                <Link to="/">
                    <div class="arrow_icons_contact" >
                        <svg width="50px" heigth="50px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
                    </div>                   
                </Link>
            </div>
            <div class="rightPart">
                <form action="">
                    <input onChange={(e)=>{ChangeState("Name",e)}}  type="text" class="form_input" placeholder="Name"  v-model='Name' required />
                    <input onChange={(e)=>{ChangeState("Email",e)}}  type="email" class="form_input" placeholder="Email"  v-model='Email'  required pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Email invalide" />
                    <input onChange={(e)=>{ChangeState("Subject",e)}}  type="text" class="form_input" placeholder="Subject"  v-model='Subject'  required />
                    <textarea onChange={(e)=>{ChangeState("Message",e)}}  type="text" class="form_input" placeholder="Message"  v-model='Message'  required></textarea>
                    <div class="btn__form__contact">
                            <button onClick={(e)=>{SendMessage(e)}} class="secondry_GetStarted">Send</button>                        
                    </div>
                </form>
            </div>
        </div>
      </>
  );
}

export default Contact;
