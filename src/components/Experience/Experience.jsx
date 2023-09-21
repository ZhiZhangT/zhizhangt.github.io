import React from 'react'
import css from './Experience.module.scss'
import { motion } from 'framer-motion'
import { staggerChildren, textVariant2, zoomIn, fadeIn } from '../../utils/motion'
import { workExp } from '../../utils/data'
import Flipcard from '../Flipcard/Flipcard'

const Works = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    className={` paddings ${css.wrapper}`}>

        <a className='anchor' id="experience"></a>
        <div className={`flexCenter innerWidth ${css.container}`}>
            <span className='primaryText yPaddings'>My Work Experience</span>

            <div className={`flexCenter ${css.experience}`}>

                {
                    workExp.map((exp, i) => {
                        return <motion.div
                        variants={textVariant2}
                        className={`flexCenter`} key={i}>
                            
                            <Flipcard place={exp.place} image={exp.image} tenure={exp.tenure} role={exp.role} detail={exp.detail}/>
                        </motion.div>
                    })
                }

                <motion.div 
                variants={zoomIn(1,1)}
                className={css.progressbar}>

                    <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
                    <div><div className={css.circle} style={{background: "#1a3849"}}></div></div>
                    <div><div className={css.circle} style={{background: "#019c62"}}></div></div>
                    <div><div className={css.circle} style={{background: "#EE4D2D"}}></div></div>
                    <div><div className={css.circle} style={{background: "#7b644b"}}></div></div>
                    <div><div className={css.circle} style={{background: "#aa070c"}}></div></div>
                </motion.div>
            </div>

        </div>    
        
    </motion.section>
  )
}

export default Works