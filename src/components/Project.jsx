import React from 'react'
import "./Project.css"
import ProjectCard from './ProjectCard'
import data from "../data"
import portFolioText from '../assets/portfoliotxt.png'

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
      <div data-scroll data-scroll-speed=".2" className="container py-16 bg-white z-10">
        <div className='heading-cont w-[90%] mx-auto'>
          <img src={portFolioText} alt="" />
        </div>
        <div className='project-cont py-5 mt-[-6em]'>
          {/* <div className='project-card flex flex-col align-middle justify-center'>
            <h2 className="text-[4vw] font-primary font-bold">PROJECTS</h2>
          </div> */}
          {projectCards}
        </div>
        
      </div>
    );
}

export default Project