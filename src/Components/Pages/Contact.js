import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7zaulep', 'template_4pxzoub', form.current, {
        publicKey: 'RzgAzxHAWHfpYnfFj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div class="container mx-auto" id=''>
      <div class='mb-9' id='bgpattern-3'>
        <h3 class='text-xl text-center text-orange-400 uppercase  pt-2.5'>Contact Us</h3>
        <h1 class='text-3xl text-center text-white font-bold uppercase mt-2'>
          <span class='text-5xl text-center text-white font-bold uppercase mt-2' >Get In touch </span>
        </h1>
        <div class='grid grid-cols-2 gap-4 my-12 pb-12'>
          <div class='grid grid-cols-1 gap-4 text-start p-7 text-base font-light uppercase max-[768px]:text-base max-[768px]:flex max-[768px]:flex-col '>
            <div class='inline-flex'>
              <FontAwesomeIcon icon={faLocationDot} id='contact-icon' />
              <h3 class=' mt-7 ml-6'>
                No:149, Puttalam - Colombo Rd, Chilaw
              </h3>
            </div>
            <div class='inline-flex'>
              <FontAwesomeIcon icon={faMobileScreen} id='contact-icon' />
              <h3 class=' mt-7 ml-6'>
                0778368588
              </h3>
            </div>
            <div class='inline-flex'>
              <FontAwesomeIcon icon={faEnvelope} id='contact-icon2' />
              <h3 class=' mt-7 ml-6'>
                Newregalfitnnesclub@gmail.com
              </h3>
            </div>
          </div>
          <div>
              <form ref={form} onSubmit={sendEmail} class='formcard'>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Message</label>
                <textarea name="comment" />
                <input type="submit" value="Send" id='button'/>
              </form>
          </div>
        </div>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.9690694343345!2d79.80638476240641!3d7.5574629536889555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2c9d90ab56fe7%3A0x3396e49d81bd097a!2sPrompt%20Xpress%20(Pvt)%20Ltd%20-Chilaw!5e0!3m2!1sen!2slk!4v1724954215561!5m2!1sen!2slk" width="90%" height="550" style={{ border: "0", margin: "auto", marginBottom: "50px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
     
    </div>
  )
}

export default Contact
