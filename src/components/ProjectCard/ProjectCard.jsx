import React from 'react'
import css from './ProjectCard.module.scss'
import { fadeIn, staggerChildren, textVariant } from '../../utils/motion'
import { motion } from 'framer-motion'

const ProjectCard = (props) => {
    return (
        <motion.a class={css.container} variants={fadeIn("up", "tween",.5, .6)} href={props.link} target="_blank">
            <img class={css.img} src={props.image} alt={props.project}/>
            <br/>
            <a class={css.name}>{props.name}</a>
            <br/>
            <a class={css.role}>{props.role}</a>
            <br/>
            <a class={css.achievement}>{props.achievement}</a>
        </motion.a>
    )
}

export default ProjectCard;