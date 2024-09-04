import React, { useState, useRef, useEffect } from 'react';
import css from './ContactDropdown.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import ReactGA from 'react-ga4';

const ContactDropdown = () => {

    const [isContactOpen, setIsContactOpen] = useState(false);
    const toggleContact = () => {
        setIsContactOpen(!isContactOpen);
        ReactGA.event({
          category: 'Clicks',
          action: 'Click',
          label: "Contact Dropdown",
        });
    };

    const handleClick = (platform) => {
      ReactGA.event({
          category: 'Social Links',
          action: 'Click',
          label: platform,
      });
    };

  return (
    <div className={css.container}>
      <p onClick={toggleContact} className={css.dropdownText}>
        Contact Me!
      </p>
      {isContactOpen && (
        <div className={`${css.dropdownMenu} ${isContactOpen? 'active' : 'inactive'}`} >
          <ul className={css.dropdownList}>
          <li className = {css.dropdownItem}>
            <a href="https://www.linkedin.com/in/zhizhangtee/" target="_blank" className={css.iconlink}>
                <FontAwesomeIcon icon={faLinkedin} className={css.icon}  onClick={() => handleClick("LinkedIn")}/>
            </a>
            </li>
          <li className = {css.dropdownItem}>
            <a href="https://t.me/teezz" target="_blank" className={css.iconlink}>
                <FontAwesomeIcon icon={faTelegram} className={css.icon} onClick={() => handleClick("Telegram")}/>
            </a>
          </li>
          <li className = {css.dropdownItem}>
            <a href="mailto:zztee24@gmail.com" target="_blank" className={css.iconlink}>
                <FontAwesomeIcon icon={faEnvelope} className={css.icon} onClick={() => handleClick("Email")}/>
            </a>
          </li>
          <li className = {css.dropdownItem}>
            <a href="https://www.instagram.com/zhizhang.t/" target="_blank" className={css.iconlink}>
                <FontAwesomeIcon icon={faInstagram} className={css.icon} onClick={() => handleClick("Instagram")}/>
            </a>
          </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContactDropdown;
