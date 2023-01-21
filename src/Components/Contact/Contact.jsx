import React from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Contact = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
        const form = useRef();
        const [done, setDone] = useState(false);

        const sendEmail = (e) => {
          e.preventDefault();

          emailjs.sendForm('service_1ovmcvo', 'template_ci9bci4', form.current, 'YjgmwgzVOurNQa_st')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
        };
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode ? 'white' : ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: 'abf1ff94'}}>

                </div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user-name' className='user' placeholder='Name' />
                <input type="email" name='user-email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'></textarea>
                <input type="submit" value='Send' className='button' />
                <span>{done ? "Thank You for Contact me" : false}</span>
                <div>
                    <div className="blur c-blur1" style={{background: 'var(--purple)'}}>

                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact