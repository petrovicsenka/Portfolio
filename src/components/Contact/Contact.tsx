import './Contact.scss';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

function Contact() {
  return (
    <section id='contact'>
      <h1 className='contactPageTitle'>Contact me</h1>
      <span className='contactDesc'>Please, fill out the form below to discuss any work opportunities.</span>
      <form className='contactForm'>
        <input type="text" className="name" placeholder='Your Name' />
        <input type="email" className="email" placeholder='Your Email' />
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
