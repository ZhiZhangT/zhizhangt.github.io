import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion';
import ContactDropdown from "../ContactDropdown/ContactDropdown";
import MDRenderer from '../MDRenderer/MDRenderer';
import { handleSocialClick } from "../../utils/analytics_calls";

const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's get in touch
            and achieve amazing things together.
          </span>
          <span className="primaryText2">
            Start by <a href="https://www.linkedin.com/in/zhizhangtee/" target="_blank" onClick={() => handleSocialClick("LinkedIn")}>connecting!</a>
          </span>
          
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">About my...</span>
          </div>
          <ul className={css.menu}>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><ContactDropdown/></li>
          </ul>
        </div>
        
      </motion.div>

      <div className={css.bottom}>
          <p className={css.footer}>Credits to ZAINKEEPSCODE's {' '}<a href="https://www.youtube.com/watch?v=Pu9I33nDeBk" target="_blank">YouTube tutorial</a>{' '}which I learned from and followed along at the start of this project.</p>
          <br/>
          <p className={css.footer}>© 2024 Tee Zhi Zhang, Singapore</p>
      </div>

    </motion.section>
  );
};

export default Footer;