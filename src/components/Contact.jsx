import React, { useRef } from 'react'
import "./Contact.css"
import emailjs from "@emailjs/browser"
import EmailArt from '/src/assets/emailart.png'


import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {

    const refForm = useRef(null)

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'gmail',
            'template_t3txt6d',
            refForm.current,
            '9tDjNBMSrxniPe7u-Yk0U'
        ).then(
            () => {
                alert('Message sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send message,Try again')
            }
        )
    }

    //
    return (
      <div data-scroll data-scroll-speed="-.2" className="contact-cont container scroll-area z-7">
        <div className="contact-left-section">
          <h1 className="contact-heading text-primary text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] text-center md:text-left pb-4 py-6 font-extrabold leading-none">CONNECT</h1>
          <div className="social pb-8">
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
          <form className="form" ref={refForm} onSubmit={sendEmail}>
            <div className="form-first-row">
              <input
                type="text"
                className="input firstrow"
                name="name"
                placeholder="Name"
                id="name"
                required
              />
              <input
                type="email"
                className="input firstrow"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              type="text"
              className="input"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="message"
              required
            ></textarea>
            <div className=''>
              <input type="submit" className="send-btn block w-[100%] ml-auto text-primary hover:text-white border border-3 fomt-bold border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-[1rem] px-5 py-3 text-center" value="Send" />
            </div>
          </form>
        </div>
        <div className="contact-right-section">
          <div className="image-cont">
            <img className="email-art" src={EmailArt} alt="" />
          </div>
        </div>
      </div>
    );
}

export default Contact