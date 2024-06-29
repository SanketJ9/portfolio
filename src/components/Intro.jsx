import React from 'react';
import "../index.css"
import "./Intro.css"
import illus from "/src/assets/ilus.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Intro() {


    return (
      <div className="intro-cont container scroll-area">
        <div className="intro">
          <h1 className="name">SANKET JADHAV</h1>
          <p className="role">Front-End Developer</p>
          <p className="desc">a passionate Front-End Developer dedicated to creating engaging, user-friendly web experiences. With a keen eye for design and a strong foundation in modern web technologies.</p>
          <div className="social">
            <a href="#" className='dl-btn'>Download CV</a>
            <FaGithub className='s-icons github'/>
            <FaLinkedin  className='s-icons linkedin'/>
            {/* <h3 className="s-email">jadhavsanket621@gmail.com</h3> */}
            <SiGmail className='s-icons mail'/>
          </div>
        </div>
        <div className="illust">
          <div className="image-cont">
            <img src={illus} alt="" />
          </div>
        </div>
      </div>
    );
}

export default Intro