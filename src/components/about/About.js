import './About.css';
import { FaLocationArrow } from "react-icons/fa";
import najeebakhun from '../../assets/images/najeebakhun.png'

const About = () => {
    return (
      <section id="about" className="about-section-container">
        <div className="about-flex-row">
          <div className="about-information" data-aos="fade-right">
            <div className="about-title">
              <FaLocationArrow className="arrow-icon" />
              <span>ABOUT</span>
              <p className="microverse-date">Get to know me better!</p>
            </div>
            <p>My interest in web development started back in 2023 when I was working for a resort cum summer camp project. Even though I had no idea back then how it worked, that were my first interaction with the magic of coding!</p>
            <p>I am privilege to work at<a href="https://www.microverse.org/" target="_blank" rel="noreferrer"> Microverse </a>for last one year where I collaborated as a <span>Full-Stack Web Developer</span> , with peers from across the globe, each bringing unique cultural perspectives. My primary focus has been crafting accessible and inclusive digital products, and continually enhancing my skills.</p>
          </div>
          <img className="najeeb-akhun" src={najeebakhun} alt="developer" data-aos="fade-left" />
        </div>
      </section>
    );
  };
  
export default About;
  