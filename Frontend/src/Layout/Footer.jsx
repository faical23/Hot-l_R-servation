import '../Assets/Sass/Base.scss'
import './Footer.scss'
import Facebook from '../Assets/Img/facebook.png'
import Twitter from '../Assets/Img/twitter.png'
import Instagram from '../Assets/Img/instagram.png'
import SendMessage from '../Assets/Img/SendMessage.png'


function Home() {
  return (

      <footer>
            <div className="FirstElement">
                  <h1 className="Logo">MyLogo</h1>
                  <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, </p>
                  <div className="SocielMedia">
                        <img src={Facebook} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={Twitter} alt="" />

                  </div>
            </div>
            <div>
                  <h1>About</h1>
                  <ul>
                        <li>About us</li>
                        <li>Features</li>
                        <li>News</li>
                        <li>Menu</li>
                  </ul>
            </div>
            <div>
                  <h1>Company</h1>
                  <ul>
                        <li>What is MyHotel ?</li>
                        <li>Partner with us </li>
                        <li>FAQ</li>
                        <li>Blog</li>
                  </ul>
            </div>
            <div>
                  <h1>Support</h1>
                  <ul>
                        <li>Account</li>
                        <li>Feedback</li>
                        <li>Contact us</li>
                        <li>Support center</li>
                  </ul>
            </div>
            <div>
                  <h1>Get in Touch</h1>
                  <div className="EmailZone">
                        <input type="text" placeholder="Email Adress" />
                        <img src={SendMessage} alt="" />
                  </div>
            </div>
      </footer>
  );
}

export default Home;
