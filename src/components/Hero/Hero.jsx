import React from 'react'
import css from './Hero.module.scss'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../utils/motion'
import { fadeIn, slideIn } from '../../utils/motion'
import { BiBookHeart } from 'react-icons/bi'

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
         className={`innerWidth ${css.container}`}>
            <div className={css.upperElements}>

                <motion.span
                variants={fadeIn("right", "tween", 0.2, 1)} // fade in from right, animation type of tween, delay of 0.2 seconds, duration of 1 second.
                className='primaryText'>

                Hey there, <br/> 
                I am Zhi Zhang

                </motion.span>

                <motion.span
                variants={fadeIn("left", "tween", 0.4, 1)}
                className='primaryText2'>

                Welcome to <br/>
                My Website!

                </motion.span>
            </div>

            <motion.div 
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={css.person}>
                <motion.img
                variants={slideIn("up", "tween", 0.5, 1.3)}
                 src='./person.png' alt="profile pic"/>
            </motion.div>

            <div className={css.description}>
                <a>Here, you will find bits and pieces about me... </a>
                
                <a>if you think I'm interesting, </a>
                <a>Contact Me!</a>
            </div>

            <div className={css.lowerElements}>
                <div className={css.experience}>
                    <div className="primaryText">24</div>
                    <div className="secondaryText">
                        <div>Years</div>
                        <div>Old</div>
                    </div>
                </div>
                <div className={css.certificate}>
                    <BiBookHeart size='60' />
                    <span className='secondaryText'>Data & AI</span>
                    <span className='secondaryText'>Product Management</span>
                    <span className='secondaryText'> Software Development</span>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero