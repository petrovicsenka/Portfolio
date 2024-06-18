import './Intro.scss';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hire-me.svg';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello, </span>
        <span className='introtext'>I am <span className='introName'>Senka Petrović,</span> <br />Software Engineer</span>
        <p className="introPara">
          I am a Master Engineer in the field of Information Systems and Technologies focused on web application development using Angular, React and Gatsby. I have a proven track record of creating visually appealing and user-friendly interfaces.
        </p>
        <Link id='hireMe' to="hireMe" smooth={true} duration={500} className='button'><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/>Hire me</button></Link>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro;
