import React from 'react'
import css from './Portfolio.module.scss'
import { fadeIn, staggerChildren, textVariant } from '../../utils/motion'
import { motion } from 'framer-motion'
import { projects } from '../../utils/data'
import ProjectCard from '../ProjectCard/ProjectCard'
import { handleSocialClick } from '../../utils/analytics_calls'

const Portfolio = () => {

    const projectData = projects;
    return (
        <motion.section 
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.1}}
        className={`paddings ${css.wrapper}`}>

            <a className='anchor' id="projects"></a>
            <div className={`innerWidth flexCenter ${css.container}`}>
                
                <motion.div variants={textVariant(0.4)} className={`flexCenter ${css.heading}`}>
                    <div>
                        <span className='primaryText'>My  Projects</span>
                        <p style={{marginTop: "10px"}}>Click to find out more about my Personal, School, and Hackathon work!</p>
                    </div>

                    <a className='secondaryText' href="https://github.com/ZhiZhangT"  target="_blank" onClick={() => handleSocialClick("GitHub")}>Check out My GitHub </a>
                </motion.div>

                <div className={`flexCenter ${css.showcase}`}>

                    {projectData.map((project,i) => {
                        return (
                                <ProjectCard name={project.project} link={project.link} image={project.image} achievement={project.achievement} role={project.role} key={i}/>
                        )
                    }) }
                </div>
            </div>
        </motion.section>
    )
}

export default Portfolio