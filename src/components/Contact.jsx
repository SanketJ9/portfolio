import React, { useRef } from 'react'
import "./Contact.css"
import emailjs from "@emailjs/browser"
import EmailArt from '/src/assets/emailart.png'

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
          <h1 className="contact-heading text-primary text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] text-center md:text-left pb-6 font-extrabold leading-none">CONTACT</h1>
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
              <input type="submit" className="send-btn block w-[100%] ml-auto text-primary hover:text-white border border-3 fomt-bold border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-[1rem] px-5 py-3 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" value="Send" />
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