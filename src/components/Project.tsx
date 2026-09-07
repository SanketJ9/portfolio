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
      className="pro relative container py-8 md:py-16 "
    >
      <div className='heading-cont mx-auto w-[100%] md:w-[90%]'>
        <img src="/portfoliotxt.png" alt="Projects" />
      </div>
      <div className='project-cont mt-[0.75em] grid grid-cols-1 gap-8 py-5 md:mt-[-3em] md:grid-cols-3 lg:mt-[-4em] xl:mt-[-5em]'>
        {projectCards}
      </div>
    </div>
  );
}