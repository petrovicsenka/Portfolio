import './Navbar.scss';
import logo from '/logo.png';
import contactImg from '../../assets/contact.svg';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <div className='desktopMenu'>
        <Link id='section1' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
          Home
        </Link>
        <Link id='section2' activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
          About
        </Link>
        {/* to update after other sections are created: */}
        {/* <Link id='section3' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
          Portfolio
        </Link> */}
        <Link id='section4' activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
          Contact
        </Link>
      </div>
      <button className='desktopMenuBtn'>
        <img src={contactImg} alt='' className='desktopMenuImg' />
        Contact me
      </button>
    </nav>
  )
};

export default Navbar;
