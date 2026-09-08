'use client';

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
  const actionHandler = async (formData: FormData) => {
    const response = await sendEmail(formData);

    if (response.error) {
      alert(`Failed to send message: ${response.error}`);
    } else {
      alert('Message sent successfully!');
      window.location.reload();
    }
  };

  return (
    <div data-scroll data-scroll-speed="-.2" className="contact-cont container relative mx-auto flex h-[100svh] max-w-[1280px] snap-start flex-col-reverse items-center justify-evenly font-body sm:h-screen sm:flex-row sm:justify-between z-7">
      <div className="contact-left-section flex w-full flex-col justify-evenly sm:w-1/2">
        <h1 className="contact-heading text-center text-[3rem] font-boldonse leading-none text-primary md:text-left md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] pb-4 py-6">CONNECT</h1>
        
        <div className="social flex flex-row flex-wrap items-center justify-center gap-[30px] sm:justify-start pb-8">
          <a href="https://github.com/SanketJ9" target="blank" rel="noreferrer">
            <FaGithub className="icons s-icons cursor-pointer rounded-md bg-white p-1 text-5xl text-primary hover:bg-primary hover:text-white active:bg-primary active:text-white mg:text-6xl transitions"/>
          </a>
          <a href="https://www.linkedin.com/in/sanketjadhav19" target="blank" rel="noreferrer">
            <FaLinkedin className="icons s-icons cursor-pointer rounded-md bg-white p-1 text-5xl text-primary hover:bg-primary hover:text-white active:bg-primary active:text-white mg:text-6xl transitions"/>
          </a>
          <a href="mailto:jadhavsanket621@gmail.com" target="blank" rel="noreferrer">
            <SiGmail className="icons s-icons cursor-pointer rounded-md bg-white p-1 text-5xl text-primary hover:bg-primary hover:text-white active:bg-primary active:text-white mg:text-6xl transitions"/> 
          </a>
        </div>
        
        <form className="form flex w-full flex-col justify-around gap-1" action={actionHandler}>
          <div className="form-first-row block w-full sm:flex sm:gap-2.5">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              required 
              className="input firstrow my-1 h-[50px] w-full rounded bg-gray-200 px-3 text-[16px] font-bold text-primary placeholder-gray-500 focus:bg-primary focus:text-white focus:outline-none" 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              className="input firstrow my-1 h-[50px] w-full rounded bg-gray-200 px-3 text-[16px] font-bold text-primary placeholder-gray-500 focus:bg-primary focus:text-white focus:outline-none" 
            />
          </div>
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            required 
            className="input my-1 h-[50px] w-full rounded bg-gray-200 px-3 text-[16px] font-bold text-primary placeholder-gray-500 focus:bg-primary focus:text-white focus:outline-none" 
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            required
            className="my-1 h-[150px] w-full resize-none rounded bg-gray-200 p-3 text-[18px] font-medium text-black placeholder-gray-500 focus:bg-primary focus:text-white focus:outline-none"
          ></textarea>
          <div>
            <input 
              type="submit" 
              value="Send" 
              className="send-btn block w-[100%] ml-auto text-primary hover:text-white border border-3 fomt-bold border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-[1rem] px-5 py-3 text-center cursor-pointer active:bg-gray-200 active:text-white" 
            />
          </div>
        </form>
      </div>
      
      <div className="contact-right-section flex w-[70%] items-center justify-center sm:w-[40%]">
        <div className="image-cont mx-auto w-full sm:w-[540px]">
        {/* <img className="email-art w-full" src="/connect.svg" alt="Connect" /> */}
        </div>
      </div>
    </div>
  );
}