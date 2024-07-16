import './Contact.scss';
import { Github } from '../../assets/svg/Github.tsx';
import { Linkedin } from '../../assets/svg/Linkedin.tsx';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Button from '../Button/Button';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_egdf539',
          'template_i69ehmr',
          form.current,
          'H8UlXL3S_GwVuKuB2'
        )
        .then(
          () => {
            console.log('SUCCESS!');
            (e.target as HTMLFormElement).reset();
            alert('Email sent!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <section id='contact'>
      <h1 className='sectionTitle'>Contact me</h1>
      <span className='contactDesc'>
        Please, fill out the form below to discuss any work opportunities.
      </span>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input
          type='text'
          className='name'
          placeholder='Your name'
          name='from_name'
          required
        />
        <input
          type='email'
          className='email'
          placeholder='Your email'
          name='from_email'
          required
        />
        <textarea
          className='msg'
          name='message'
          rows={5}
          placeholder='Your message'
          required
        ></textarea>
        <Button type='submit'>Submit</Button>
        <div className='links'>
          <a
            href='https://github.com/petrovicsenka'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Github className='link' />
          </a>
          <a
            href='https://linkedin.com/in/senka-petrovi%C4%87-95774b1b9/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Linkedin className='link' />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
