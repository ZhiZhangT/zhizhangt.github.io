import React from 'react'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
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
        <div className={` paddings yPaddings flexCenter innerWidth ${css.container}`}>

            <div className={css.leftSide}>
                {
                    projectExperience.map((exp, i) => {

                        return <motion.div 
                        variants={fadeIn("right", "tween", (i+1)*0.2, 1)}
                        className={css.exp} key={i}>
                            <div className="flexCenter" style={{background: exp.bg}}>
                                <exp.icon size={25} color="white"/>
                            </div>

                            <div>
                                <span>{exp.name}</span>
                                <span className='secondaryText'>{exp.projects} Projects</span>
                            </div>
                        </motion.div>
                    })
                }
            </div>
            <motion.div 
            variants={textVariant(0.5)}
            className={css.rightSide}>
                <span className='primaryText'> How do I help? </span>
                {
                WhatDoIHelp.map((paragraph, i) => {
                    return <span className='secondaryText' key={i}> {paragraph} </span>
                })
                }

                <div className={`flexCenter ${css.stats}`}>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>285+</span>
                        <span className='secondaryText'>Projects Completed</span>
                    </div>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>190+</span>
                        <span className='secondaryText'>Happy Clients</span>
                    </div>
                </div>
            </motion.div>
        </div>
    </motion.section>
    
  )
}

export default Expertise