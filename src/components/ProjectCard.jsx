import React, { useState } from 'react'
import "./ProjectCard.css"

function ProjectCard(props) {

    

    return (
        <div className='project-card'
        
        >
            <h2 className='project-card-heading'>{props.title}</h2>
            <div className='project-ss'>
                <img className='project-ss-img' src={`./src/assets/${props.img}`} alt="ScreenShot" />
            </div>
            <div className="project-details">
                <h2 className="project-title">{props.title}</h2>
                <h3 className="project-desc">{props.desc}</h3>
                <h4 className="project-tech">{props.tech}</h4>
            </div>
        </div>
    )
}

export default ProjectCard