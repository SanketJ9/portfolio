import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Header() {
    return (
        <div className='header'>
            <img className='logo' />
            <div className="social">
                <FontAwesomeIcon className='s-icons' icon={faGithub}></FontAwesomeIcon>
                <FontAwesomeIcon className='s-icons' icon={faLinkedin}></FontAwesomeIcon>
                {/* <FontAwesomeIcon className='s-icons' icon={faEnvelope}></FontAwesomeIcon> */}
                <h3 className='s-email'>jadhavsanket621@gmail.com</h3>
            </div>
        </div>
    )
}

export default Header