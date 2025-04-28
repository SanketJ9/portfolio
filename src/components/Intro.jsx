import "../index.css"
import "./Intro.css"
import illus from "/ilus.svg"

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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
              <p className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] text-center md:text-left font-extrabold text-primary font-heading pb-3 leading-none">SANKET JADHAV</p>
            </div>
            <div className="role">
              <p className="text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] text-center md:text-left text-gray-500 font-bold pb-3 leading-none">Front-End Developer</p>
            </div>
            <div className="desc">
              <p className="text-[1rem] md:text-[1.15rem] lg:text-[1.2rem] xl:text-[1.25rem] text-justify text-dark pb-8">a passionate and dedicated front-end developer with 3 years of experience in crafting beautiful and functional websites and web applications.</p>
            </div>

            <div className="social">
              <div className="dl-btn">
                <a href="/sanket-jadhav-resume.pdf" download className="max-w-[280px] block text-primary hover:text-white border border-3 fomt-bold border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-[1rem] px-5 py-3 text-center ">Download Resume</a>
              </div>
              <a href="https://github.com/SanketJ9" target="blank">
                <FaGithub className="text-5xl mg:text-6xl p-1 bg-white hover:bg-primary active:bg-primary rounded-md s-icons icons text-primary hover:text-white active:text-white cursor-pointer transitions"/>
              </a>
              <a href="https://www.linkedin.com/in/sanketjadhav19" target="blank">
                <FaLinkedin className="text-5xl mg:text-6xl p-1 bg-white hover:bg-primary active:bg-primary rounded-md s-icons icons text-primary hover:text-white active:text-white cursor-pointer transitions"/>
              </a>
              <a href="mailto:jadhavsanket621@gmail.com" target="blank">
                <SiGmail className="text-5xl mg:text-6xl p-1 bg-white hover:bg-primary active:bg-primary rounded-md s-icons icons text-primary hover:text-white active:text-white cursor-pointer transitions"/> 
              </a>
            </div>
          </div>
          <div className="illust">
            <div className="image-cont">
              <img src={illus} alt="" />
            
            </div>
          </div>
        </div>
        <div  className="tech-cont mb-10">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-10 text-gray-400 place-items-center">
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