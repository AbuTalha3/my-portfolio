import './Contact.css';
import { FaLocationArrow } from "react-icons/fa";
// import darkiphone1 from '../../assets/images/darkiphone1.png'
// import darkiphone2 from '../../assets/images/darkiphone2.png'
import ContactForm from './contactform/contactform';


const Contact = () => {
    return (
      <section id="contact" className="contact-section-container">
        <div className="contact-column">
          <div className="contact-information" data-aos="fade-right">
            <div className="about-title">
              <FaLocationArrow className="arrow-icon" />
              <span>GET IN TOUCH</span>
            </div>
            <p>If you want to work together on a project or just have a chat, please don't hesitate to contact me.</p>
            {/* <a class="email-link" href="mailto:najeebakhun@gmail.com" target="_blank" rel="noreferrer">SEND EMAIL</a>
            <div className="contact-info-phone">
            <FaPhone />
            <a href="https://api.whatsapp.com/send?phone=923355801403" className="contact-info-phone" target="_blank" rel="noreferrer">  +923355801403</a>
          </div> */}
          </div>
            <ContactForm />
          {/* <div className="relative" data-aos="fade-left">
            <img className="dark-phone" src={darkiphone1} alt="iPhone" />
            <img className="dark-phone phone-animation" src={darkiphone2} alt="iPhone" />
          </div> */}
        </div>
        <footer>
          <span><small>© All rights reserved</small></span>
          {/* <ul>
            <li><a href="https://medium.com/@najeebakhun" target="_blank" rel="noreferrer"><FaMedium /></a></li>
            <li><a href="https://github.com/AbuTalha3" target="_blank" rel="noreferrer"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/najeeb-akhun/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
          </ul> */}
        </footer>
      </section>
    );
  };
  
export default Contact;
  