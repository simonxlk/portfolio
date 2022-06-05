import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm(
            'service_x0ofbef', 
            'template_57x247f', 
            formRef.current, 
            '6Vx8azp3KQAGiX9Y0'
            )
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className='c-main' id='contact'>
        
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Contact</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        Find me on LinkedIn, checkout my Github or contact me by email.
                    </div>
                    <div className="contact-icons">
                        <a href="https://www.linkedin.com/in/simon-kelehan-8a8833139" target="_blank" rel="noreferrer">
                            <BsLinkedin /></a>
                        <a href="https://github.com/simonxlk?tab=repositories" target="_blank" rel="noreferrer">
                            <BsGithub />
                        </a>
                    </div>
                </div>
                <div className="form-wrapper">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' name='user_name' />
                    <input type="text" placeholder='Subject' name='user_subject' />
                    <input type="text" placeholder='Email' name='user_email' />
                    <textarea rows="5" placeholder="Message" name="message" />
                    <div>
                    <button>Submit</button>
                    {done && "Thank you"}
                    </div>
                </form>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Contact