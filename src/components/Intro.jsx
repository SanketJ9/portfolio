import React from 'react';
import "../index.css"
import "./Intro.css"
import illus from "/src/assets/ilus.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Intro() {


    return (
      <div className="intro-cont container scroll-area">
        <div className="intro">
          <h1 className="name">SANKET JADHAV</h1>
          <p className="desc"></p>
          <p className="role">Front-End Developer</p>
          <div className="social">
            <FontAwesomeIcon
              className="s-icons"
              icon={faGithub}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="s-icons"
              icon={faLinkedin}
            ></FontAwesomeIcon>
            <h3 className="s-email">jadhavsanket621@gmail.com</h3>
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