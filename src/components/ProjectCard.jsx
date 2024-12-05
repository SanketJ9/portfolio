import React, { useState } from 'react'
import "./ProjectCard.css"

function ProjectCard(props) {

    

    return (
        <div className='project-card p-3 bg-gray-100 border-2 border-gray-200 rounded-[1em]'>
            <a href={props.url} target="_blank">
                <div className="project-details">
                    <h2 className="project-title text-3xl font-primary font-bold pb-1 text-primary">{props.title}</h2>
                    <h3 className="project-desc text-gray-700 text-1xl pb-3">{props.desc}</h3>
                    <div className='project-techs flex flex-row gap-1 pb-4 justify-end'>
                        {props.techss.map((tech, techIndex) => (
                        <p className='py-1 px-2 bg-gray-300 rounded-[4px] text-sm font-bold text-primary' key={techIndex}>{tech}</p>
                        ))}
                    </div>
                </div>
                <div className='project-ss rounded-[0.4em] overflow-hidden'>
                    <img className='project-ss-img' src={`/${props.img}`} alt="ScreenShot" />
                </div>
            </a>
        </div>
    )
}

export default ProjectCard 