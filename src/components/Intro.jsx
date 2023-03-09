import React from 'react';
import "../index.css"
import "./Intro.css"
import Cover from "/public/assets/covers.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Intro() {


    return (
        <div className='intro-cont scroll-area'>
            <div className='header'>
                <img className='logo' />
                <div className="social">
                    <FontAwesomeIcon className='s-icons' icon={faGithub}></FontAwesomeIcon>
                    <FontAwesomeIcon className='s-icons' icon={faLinkedin}></FontAwesomeIcon>
                    <h3 className='s-email'>jadhavsanket621@gmail.com</h3>
                </div>
            </div>
            <div className="intro">
                <p className='greet'>Hi! I'm</p>
                <h1 className='name'>SANKET JADHAV</h1>
                <p className='role'>Front-End Developer</p>
            </div>
            <img className='cover' src={Cover} alt="" />
            {/* <div className='scroll-tip'>
                <div className="vert-line"></div>
            </div> */}
        </div>
    )
}

export default Intro