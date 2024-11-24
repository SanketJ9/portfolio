import React, { useState } from 'react'
import "./ProjectCard.css"

function ProjectCard(props) {

    

    return (
        <div className='project-card p-3 bg-gray-100 border-2 border-gray-200 rounded-[1em]'>
            <div className="project-details">
                <h2 className="project-title text-3xl font-primary font-bold pb-2">{props.title}</h2>
                <h3 className="project-desc text-gray-800">{props.desc}</h3>
                <h4 className="project-tech">{props.tech}</h4>
            </div>
            <div className='project-ss rounded-[0.4em] overflow-hidden mt-3'>
                <img className='project-ss-img' src={`./src/assets/${props.img}`} alt="ScreenShot" />
            </div>
        </div>
    )
}

export default ProjectCard