import React from 'react';

interface ProjectCardProps {
  id?: number | string;
  title: string;
  desc: string;
  url: string;
  img: string;
  techss: string[];
}

export default function ProjectCard({ title, desc, url, img, techss }: ProjectCardProps) {
  return (
    <div className='project-card p-3 bg-gray-100 border-2 border-gray-200 rounded-[1em]'>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="project-details">
          <h2 className="project-title text-3xl font-primary font-bold pb-1 text-primary">{title}</h2>
          <h3 className="project-desc text-gray-700 text-1xl pb-3">{desc}</h3>
          <div className='project-techs flex flex-row gap-1 pb-4 justify-end'>
            {techss.map((tech, techIndex) => (
              <p className='py-1 px-2 bg-gray-300 rounded-[4px] text-sm font-bold text-primary' key={techIndex}>
                {tech}
              </p>
            ))}
          </div>
        </div>
        <div className='project-ss rounded-[0.4em] overflow-hidden'>
          {/* Ensure the images match the strings in data.ts and exist in the public/ folder */}
          <img className='project-ss-img' src={`/${img}`} alt="ScreenShot" />
        </div>
      </a>
    </div>
  );
}