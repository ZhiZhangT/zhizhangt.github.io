import React from 'react'
import css from './Hero.module.scss'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../utils/motion'
import { fadeIn, slideIn } from '../../utils/motion'

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

                Hey There, <br/> 
                I'm Brinjan

                </motion.span>

                <motion.span
                variants={fadeIn("left", "tween", 0.4, 1)}
                className='secondaryText'>

                I design beautiful simple <br/>
                things, And I love what I document

                </motion.span>
            </div>

            <motion.div 
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={css.person}>
                <motion.img
                variants={slideIn("up", "tween", 0.5, 1.3)}
                 src='./person.png' alt="profile pic"/>
            </motion.div>

            <a className={css.email} href="mailto:zztee24@gmail.com">zztee24@gmail.com</a>

            <div className={css.lowerElements}>
                <div className={css.experience}>
                    <div className="primaryText">10</div>
                    <div className="secondaryText">
                        <div>Years</div>
                        <div>Experience</div>
                    </div>
                </div>
                <div className={css.certificate}>
                    <img src="./certificate.png" alt="Certificate"/>
                    <span>CERTIFIED PROFESSIONAL</span>
                    <span>UI/UX DESIGNER</span>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero