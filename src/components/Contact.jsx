import React, { useRef } from 'react'
import "./Contact.css"
import emailjs from "@emailjs/browser"
import EmailArt from '/public/assets/emailart.png'

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
        <div className='contact-cont scroll-area'>
            <div className="contact-left-section">
                <h1 className="contact-heading">Contact me/</h1>
                <form className="form" ref={refForm} onSubmit={sendEmail}>
                    <div className="form-first-row">
                        <input type="text" className="input firstrow" name='name' placeholder='Name' id='name' required />
                        <input type="email" className="input firstrow" name="email" id="email" placeholder='Email' required />
                    </div>
                    <input type="text" className="input" name='subject' placeholder='Subject' required />
                    <textarea name="message" id="message" placeholder='message' required></textarea>
                    <input type="submit" className='send-btn' value="Send" />
                </form>
            </div>
            <div className="contact-right-section">
                <img className='email-art' src={EmailArt} alt="" />
            </div>
        </div>
    )
}

export default Contact