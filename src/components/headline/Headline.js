import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaPaperclip, FaGithub, FaMedium } from "react-icons/fa";
import resume from '../../assets/files/Profile.pdf';
import './Headline.css';

const Headline = () => {
  const [isWrapperActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isWrapperActive);
  };

    return (
      <section id="headline" className="headline-section-container">
        <div className="headline-information" data-aos="fade-right">
          <ul className="headline-icons">
            <li><a href="https://medium.com/@najeebakhun" target="_blank" rel="noreferrer"><FaMedium /></a></li>
            <li><a href="https://github.com/AbuTalha3" target="_blank" rel="noreferrer"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/najeeb-akhun/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
          </ul>
          <div className="headline-texts">
            <p>Hi, my name is</p>
            <p>Najeeb Uddin</p>
            <p>I specialize in crafting web-based solutions.</p>
            <p>I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m looking for a full-stack position. Feel free to check my resume. <a href={resume} download="" rel="noreferrer">Download resume</a></p>
            <button onClick={toggleClass}>Contact me</button>
          </div>
        </div>

        <div onClick={toggleClass} className={isWrapperActive ? 'contact-wrapper on' : 'contact-wrapper'}>
          <div className="contact-button">
            <a href="https://www.linkedin.com/in/najeeb-akhun/" target="_blank" rel="noreferrer">
            <FaLinkedin />
            Linkedin
            </a>
          </div>
          <div className="contact-button">
            <a href="mailto:najeebakhun@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
            Email
            </a>
          </div>
          <div className="contact-button">
          <a href="https://medium.com/@najeebakhun" target="_blank" rel="noreferrer"><FaMedium />Articles</a>
          </div>
          <div className="contact-button">
            <a href="https://docs.google.com/document/d/1bDRU0JXUAFllRZHqLc2hLjNaBWVExwyV3cEisV2YnO0/edit" target="_blank" rel="noreferrer">
            <FaPaperclip />
            Resume</a>
          </div>
        </div>
      </section>
    );
  };
  
export default Headline;
  