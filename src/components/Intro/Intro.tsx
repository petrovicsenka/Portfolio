import './Intro.scss';
import bg from '../../assets/png/image.png';
import { LearnMore } from '../../assets/svg/Learn-more.tsx';
import { Link } from 'react-scroll';
import Button from '../Button/Button';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello, </span>
        <span>
          I am <span className='blueText'>Senka Petrović,</span> <br />
          Software Engineer
        </span>
        <p className='introPara'>
          I am a Master Engineer in the field of Information Systems and
          Technologies focused on web application development using Angular,
          React and Gatsby. I have a proven track record of creating visually
          appealing and user-friendly interfaces.
        </p>
        <Link
          id='learnMore'
          to='learnMore'
          smooth={true}
          duration={500}
          offset={222}
          className='button'
        >
          <Button>
            <LearnMore className='btnImg' />
            Learn more about me
          </Button>
        </Link>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  );
};

export default Intro;
