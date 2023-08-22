import React from 'react'
import { educationTimeline, AboutMyEducation } from '../../utils/data'
import css from './Education.module.scss'
import { motion } from 'framer-motion'
import { staggerChildren, staggerContainer, fadeIn, textVariant } from '../../utils/motion'

const Expertise = () => {
  return (
    <motion.section
    variants= {staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount: 0.25}}
    className={css.wrapper}>

        <a className='anchor' id="education"></a>
        <motion.a
        variants={fadeIn("right", "tween", 0.2, 1)}
        className={ `primaryText ${css.title}`}>My Education</motion.a>
        <div className={` paddings yPaddings flexCenter innerWidth ${css.container}`}>
            <div className={css.leftSide}>
                {
                    educationTimeline.map((exp, i) => {

                        return <motion.div 
                        variants={fadeIn("right", "tween", (i+1)*0.3, 1)}
                        className={css.exp} key={i}>
                            <div className="flexCenter">
                                <img src={exp.icon} alt={exp.iconalt} width="75" height="75"></img> 
                            </div>

                            <div>
                                <span>{exp.name}</span>
                                <span className={css.qual}>{exp.qual}</span>
                                <span className='secondaryText'>{exp.time}</span>
                            </div>
                        </motion.div>
                    })
                }
            </div>
            <motion.div 
            variants={textVariant(0.5)}
            className={css.rightSide}>
                {
                AboutMyEducation.map((paragraph, i) => {
                    return <span className='secondaryText' key={i}> {paragraph} </span>
                })
                }
            </motion.div>
        </div>
    </motion.section>
    
  )
}

export default Expertise