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
      <div className="project-cont container scroll-area pt-12">
        <div className='project-card'>
          <h2 className="text-[4vw] font-primary font-bold">PROJECTS</h2>
        </div>
        {projectCards}
      </div>
    );
}

export default Project