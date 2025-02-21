import React, { useState } from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const[name,setname]=useState('');
    const[email,setEmail]=useState('');
    const[message,setMessage]=useState('');
    const[success,setSuccess]=useState('');

    const handleName=(e)=>{
        setname(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleMessage=(e)=>{
        setMessage(e.target.value)
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_j2hd6go', 'template_s27tvlc', form.current, {
            publicKey: 'y0eh4LpawKqVKCVOI',
          })
          .then(
            () => {
              setname('');
              setEmail('');
              setMessage('');
              setSuccess('Message Sent..');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div>
        <p className=' text-cyan'>{success}</p>
        <form  className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
            <input type="text"
            name="from_name"
             placeholder='Your Name' required
            className='h-12 rounded-lg bg-lightGrey px2'
            value={name}
            onChange={handleName}
            />
            <input type="email"
            name="from_email"
             placeholder='Your Email' required
             className='h-12 rounded-lg bg-lightGrey px2'
             value={email}
             onChange={handleEmail}
             />
            <textarea 
            name="message"
             placeholder='Message'
             rows='9'
             cols='50'
             required
             className=' h-70 rounded-lg bg-lightGrey px-2 '
             value={message}
             onChange={handleMessage}
             />
             <button type="submit" className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500'>send</button>
        </form>
      
    </div>
  )
}

export default ContactForm
