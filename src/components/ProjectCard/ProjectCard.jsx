import React from 'react'
import css from './ProjectCard.module.scss'
import { fadeIn, staggerChildren, textVariant } from '../../utils/motion'
import { motion } from 'framer-motion'
import { handleProjectClick } from '../../utils/analytics_calls'

const ProjectCard = (props) => {
    return (
        <motion.a className={css.container} variants={fadeIn("up", "tween",.5, .6)} href={props.link} target="_blank" onClick={() => handleProjectClick(props.name)}>
            <img className={css.img} src={props.image} alt={props.project}/>
            <br/>
            <a className={css.name}>{props.name}</a>
            <br/>
            <a className={css.role}>{props.role}</a>
            <br/>
            <a className={css.achievement}>{props.achievement}</a>
        </motion.a>
    )
}

export default ProjectCard;