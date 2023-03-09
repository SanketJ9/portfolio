import React, { useState } from 'react'
import "./ProjectCard.css"
// import ss from "../assets/filmflex.png"

function ProjectCard(props) {

    // const [isHover, setIsHover] = useState(false)

    // const handleMouseEnter = () => {
    //     setIsHover(true);
    // }

    // const handleMouseLeave = () => {
    //     setIsHover(false);
    // }

    // const projectCardStyle = {
    //     margin: '0 auto',
    //     marginBottom: '40px',
    //     width: '800px',
    //     height: isHover ? 'max-content' : '150px',
    //     borderRadius: '4px',
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     transition: 'all 0.5s ease-in-out',
    // }

    return (
        <div className='project-card'
        // style={projectCardStyle}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        >
            <h2 className='project-card-heading'>{props.title}</h2>
            <div className='project-ss'>
                <img className='project-ss-img' src={`./assets/${props.img}`} alt="ScreenShot" />
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