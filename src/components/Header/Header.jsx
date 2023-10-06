import React, { useState, useRef, useEffect} from 'react'
import css from './Header.module.scss'
import {BiMenuAltRight} from 'react-icons/bi'
import {motion} from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'
import ContactDropdown from '../ContactDropdown/ContactDropdown'

const Header = () => {

    // controls menu button open/close when screen is small
    const [menuOpened, setMenuOpened] = useState(true);
    const headerShadow = useHeaderShadow();
    const menuRef = useRef();

    useOutsideAlerter(
        {
            menuRef,
            setMenuOpened
        }
    )
    

    // makes header background opaque after scrolling
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
        setScrolling(true);
        } else {
        setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className = {`${scrolling ? css.solid : css.transparent}`}>
            <motion.div
            initial = "hidden"
            whileInView="show"
            variants={headerVariants}
            viewport={{once: false, amount: 0.25}} // want to show the animation more than once, animation will start if the wrapper is more than 25% in the viewport.
            className={`paddings ${css.wrapper}`}
            style={{boxShadow: headerShadow}}>
                <div className={`flexCenter innerWidth ${css.container}`}>
                    <div className={css.name}>
                        <ul
                        style={getMenuStyles(menuOpened)}
                        className={`flexCenter ${css.menu}`}
                        ref={menuRef}
                        >
                            <li className={css.title}><a href="#">zhizhang.tee</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li className={`flexCenter ${css.contact}`}>
                            <ContactDropdown/>
                            </li>
                        </ul>

                        <div 
                            className={css.menuIcon} 
                            onClick={() => setMenuOpened((prev) => !prev)}
                        >
                            <BiMenuAltRight size={30} className={css.icon}/>
                        </div>
                    </div>
                </div>
        </motion.div>
    </div>
    )
    }

export default Header