import { FaGitSquare, FaSass } from "react-icons/fa";
import { SiCsswizardry, SiJavascript, SiNextdotjs, SiTypescript, SiJquery, SiMongodb, SiClaude, SiTanstack } from "react-icons/si";
import { BiSolidFileHtml, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandReactNative, TbBrandNodejs, TbBrandRedux, TbSeo } from "react-icons/tb";
import { PiFileSqlFill } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";

export default function TechStack() {
  return (
    <div 
      data-scroll 
      data-scroll-speed=".2" 
      className="tech-cont container relative z-10 bg-white before:absolute before:-top-40 before:left-0 before:h-40 before:w-full before:rounded-2xl before:bg-gradient-to-b before:from-white/10 before:to-white before:backdrop-blur-md before:[mask-image:linear-gradient(to_bottom,transparent,black_50%)] before:[-webkit-mask-image:linear-gradient(to_bottom,transparent,black_50%)] mb-10 min-h-[80vh] sm:min-h-[25vh] flex flex-col gap-10"
    >
      <div className="heading">
        <p className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] text-center md:text-center font-bold font-primary text-primary font-heading p-8 leading-none">What's in My Stack</p>
      </div>
      <div className="flex flex-wrap justify-center gap-5 lg:gap-10 text-gray-400">
        <div className="tech flex flex-col items-center gap-1"><BiSolidFileHtml className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">HTML</p></div>
        <div className="tech flex flex-col items-center gap-1"><SiCsswizardry className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">CSS</p></div>
        <div className="tech flex flex-col items-center gap-1"><SiJavascript className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">JavaScript</p></div>
        <div className="tech flex flex-col items-center gap-1"><TbBrandReactNative className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">React</p></div>
        <div className="tech flex flex-col items-center gap-1"><SiNextdotjs className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">Next.js</p></div>
        <div className="tech flex flex-col items-center gap-1"><TbBrandNodejs className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">Node.js</p></div>
        <div className="tech flex flex-col items-center gap-1"><PiFileSqlFill className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">SQL</p></div>
        <div className="tech flex flex-col items-center gap-1"><SiTypescript className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">TypeScript</p></div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-5 lg:gap-10 text-gray-400">
        <div className="tech flex flex-col items-center gap-1"><FaSass className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">Sass</p></div>
        <div className="tech flex flex-col items-center gap-1"><RiTailwindCssFill className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">Tailwind</p></div>
        <div className="tech flex flex-col items-center gap-1"><SiJquery className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">jQuery</p></div>
        <div className="tech flex flex-col items-center gap-1"><TbBrandRedux className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">Redux</p></div>
        <div className="tech flex flex-col items-center gap-1"><BiLogoPostgresql className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">PostgreSQL</p></div>
        <div className="tech flex flex-col items-center gap-1"><SiMongodb className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">MongoDB</p></div>
        <div className="tech flex flex-col items-center gap-1"><FaGitSquare className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">Git</p></div>
        <div className="tech flex flex-col items-center gap-1"><TbSeo className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">SEO</p></div>
        <div className="tech flex flex-col items-center gap-1"><SiClaude className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">Claude</p></div>
        <div className="tech flex flex-col items-center gap-1"><SiTanstack className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out hover:text-primary"/><p className="text-sm lg:text-lg font-medium">TanStack</p></div>
      </div>
    </div>
  );
}
