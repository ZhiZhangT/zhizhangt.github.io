import React from 'react'
import css from './Portfolio.module.scss'
import { fadeIn, staggerChildren, textVariant } from '../../utils/motion'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    className={`paddings ${css.wrapper}`}>

        <a className='anchor' id="projects"></a>
        <div className={`innerWidth flexCenter ${css.container}`}>
            
            <motion.div variants={textVariant(0.4)} className={`flexCenter ${css.heading}`}>
                <div>
                    <span className='primaryText'>My  Projects</span>
                    <p style={{marginTop: "10px"}}>includes Personal, School, and Hackathon work!</p>
                </div>

                <a className='secondaryText' href="https://github.com/ZhiZhangT"  target="_blank">Check out My GitHub</a>
            </motion.div>

            <div className={`flexCenter ${css.showcase}`}>
                <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="project" />
                <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" />
                <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" />
            </div>
        </div>
    </motion.section>
  )
}

export default Portfolio