import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';

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
        <div className="c-bar">
        </div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Talk to me boo</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        phone
                    </div>
                </div>
            </div>
            <div className="c-right">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' name='user_name' />
                    <input type="text" placeholder='Subject' name='user_subject' />
                    <input type="text" placeholder='Email' name='user_email' />
                    <textarea rows="5" placeholder="Message" name="message" />
                    <button>Submit</button>
                    {done && "Thank you"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact