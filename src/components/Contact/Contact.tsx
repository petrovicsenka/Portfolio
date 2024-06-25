import './Contact.scss';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  if (form.current) {  
    emailjs
      .sendForm('service_egdf539', 'template_i69ehmr', form.current, 'H8UlXL3S_GwVuKuB2')
      .then(
        () => {
          console.log('SUCCESS!');
          (e.target as HTMLFormElement).reset();
          alert('Email sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  };

  return (
    <section id='contact'>
      <h1 className='contactPageTitle'>Contact me</h1>
      <span className='contactDesc'>Please, fill out the form below to discuss any work opportunities.</span>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder='Your name' name='from_name' />
        <input type="email" className="email" placeholder='Your email' name='from_email' />
        <textarea className='msg' name='message' rows={5} placeholder='Your message'></textarea>
        <button type='submit' value='Send' className='submitBtn'>Submit</button>
        <div className="links">
          <img src={github} alt="Github" className="link" />
          <img src={linkedin} alt="Linkedin" className="link" />
        </div>
      </form>
    </section>
  )
}

export default Contact;
