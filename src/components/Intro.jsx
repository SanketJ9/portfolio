import "../index.css"
import "./Intro.css"
import illus from "/src/assets/ilus.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { TbMailFilled } from "react-icons/tb";
import { BiSolidFileHtml } from "react-icons/bi";
import { SiCsswizardry } from "react-icons/si";
import { SiJavascript,SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { PiFileSqlFill } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJquery } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";

import {motion} from "framer-motion"


function Intro() {


    return (
    <>
      <div data-scroll data-scroll-speed="-.5" className="landing container">
        <div className="intro-cont ">
          <div className="intro">
            <div className="name">
              <p className="text-8xl font-bold text-primary font-heading pb-3 leading-none">SANKET JADHAV</p>
            </div>
            <div className="role">
              <p className="text-5xl text-gray-500 font-bold pb-3">Front-End Developer</p>
            </div>
            <div className="desc">
              <p className="text-xl text-dark pb-8">a passionate and dedicated front-end developer with 3 years of experience in crafting beautiful and functional websites and web applications.</p>
            </div>

            <div className="social">
              <div className="dl-btn">
                <a href="#" className="text-primary hover:text-white border border-3 fomt-bold border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-1xl px-6 py-4 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Download CV</a>
              </div>
              <FontAwesomeIcon
                className="text-5xl s-icons icons text-primary cursor-pointer"
                icon={faGithub}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-5xl s-icons icons cursor-pointer text-primary"
                icon={faLinkedin}
              ></FontAwesomeIcon>
              {/* <h3 className="s-email icons">jadhavsanket621@gmail.com</h3> */}
              <TbMailFilled className="text-5xl s-icons icons text-primary cursor-pointer"/> 
            </div>
          </div>
          <div className="illust">
            <div className="image-cont">
              <img src={illus} alt="" />
            
            </div>
          </div>
        </div>
        <div  className="tech-cont mb-10">
          <div className="grid grid-cols-8 gap-10 text-gray-400 place-items-center">
            <div className="tech">
            <BiSolidFileHtml className="tech-icon text-7xl cursor-pointer "/>
            </div>
            <div className="tech">
            <SiCsswizardry className="tech-icon text-7xl cursor-pointer "/>
            </div>
            <div className="tech">
            <SiJavascript className="tech-icon text-7xl cursor-pointer "/>
            </div>
            <div className="tech">
            <TbBrandReactNative className="tech-icon text-7xl cursor-pointer "/>
            </div>
            <div className="tech">
            <SiNextdotjs className="tech-icon text-7xl cursor-pointer "/>
            </div>
            <div className="tech">
            <TbBrandNodejs className="tech-icon text-7xl cursor-pointer "/>
            </div>
            <div className="tech">
            <PiFileSqlFill className="tech-icon text-7xl cursor-pointer "/>
            </div>
            <div className="tech">
            <SiTypescript className="tech-icon text-7xl cursor-pointer "/>
            </div>
            <div className="tech">
            <FaSass className="tech-icon text-7xl cursor-pointer "/>
            </div>
            <div className="tech">
            <RiTailwindCssFill className="tech-icon text-7xl cursor-pointer "/>
            </div>
            <div className="tech">
            <SiJquery className="tech-icon text-7xl cursor-pointer "/>
            </div>
            <div className="tech">
            <TbBrandRedux className="tech-icon text-7xl cursor-pointer "/>
            </div>
            <div className="tech">
            <SiMongodb className="tech-icon text-7xl cursor-pointer "/>
            </div>
            <div className="tech">
            <FaGitSquare className="tech-icon text-7xl cursor-pointer "/>
            </div>
            <div className="tech">
            <TbSeo className="tech-icon text-7xl cursor-pointer "/>
            </div>
            

          </div>
        </div>
      </div>
      
      </>
    );
}

export default Intro