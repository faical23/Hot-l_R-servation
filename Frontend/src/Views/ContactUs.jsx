import '../Assets/Sass/Base.scss'
import './Contact.scss'
import { Link } from 'react-router-dom';


function Contact() {
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
                    <input type="text" class="form_input" placeholder="Name"  v-model='Name' required />
                    <input type="email" class="form_input" placeholder="Email"  v-model='Email'  required pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Email invalide" />
                    <input type="text" class="form_input" placeholder="Subject"  v-model='Subject'  required />
                    <textarea type="text" class="form_input" placeholder="Message"  v-model='Message'  required></textarea>
                    <div class="btn__form__contact">
                            <button class="secondry_GetStarted">Send</button>                        
                    </div>
                </form>
            </div>
        </div>
      </>
  );
}

export default Contact;
