import React from 'react';
import ProjectCard from './ProjectCard';
import data from "@/lib/data";

export default function Project() {
  const projectCards = data.map(item => {
    return (
      <ProjectCard
        key={item.id}
        id={item.id}
        img={item.screeshot}
        title={item.title}
        desc={item.description}
        url={item.url}
        techss={item.techss}
      />
    );
  });

  return (
    <div 
      data-scroll 
      data-scroll-speed=".1" 
      className="pro relative container py-8 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      <div className="text-left md:col-span-1 sticky top-20 self-start z-10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary uppercase tracking-tight font-boldonse">PROJECTS</h2>
      </div>
      <div className='project-cont md:col-span-2 mt-[0.75em] z-15 grid grid-cols-1 gap-8 py-5 md:mt-[-3em] md:grid-cols-2 lg:mt-[2em] xl:mt-[3em]'>
        {projectCards}
      </div>
    </div>
  );
}