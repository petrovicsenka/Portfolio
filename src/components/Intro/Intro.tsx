import './Intro.scss';
import bg from '../../assets/png/image.png';
import { LearnMore } from '../../assets/svg/Learn-more.tsx';
import { Link } from 'react-scroll';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

const offsets = {
  xsmall: 500,
  small: 550,
  smedium: 500,
  medium: 540,
  xmedium: 80,
  xxmedium: 90,
  large: 110,
  xlarge: 230,
};

const getOffset = (width: number) => {
  if (width <= 400) return offsets.xsmall;
  if (width <= 450) return offsets.small;
  if (width <= 576) return offsets.smedium;
  if (width <= 768) return offsets.medium;
  if (width <= 992) return offsets.xmedium;
  if (width <= 1200) return offsets.xxmedium;
  if (width <= 1440) return offsets.large;
  return offsets.xlarge;
};

const Intro = () => {
  const [offset, setOffset] = useState(getOffset(window.innerWidth));

  useEffect(() => {
    const updateOffset = debounce(() => {
      setOffset(getOffset(window.innerWidth));
    }, 200);

    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);

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
          offset={offset}
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
