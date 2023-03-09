import React from 'react'
import "./Project.css"
import ProjectCard from './ProjectCard'
import data from "../data"

function Project() {

    const projectCards = data.map(item => {
        return (
            <ProjectCard
                img={item.screeshot}
                title={item.title}
                desc={item.description}
                tech={item.tech}
            />
        )
    })



    return (
        <div className='project-cont scroll-area'>
            <h2 className='project-heading'>Projects/</h2>
            <div className='projects'>
                {projectCards}
            </div>
        </div>
    )
}

export default Project