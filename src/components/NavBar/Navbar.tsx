import './Navbar.scss';
import logo from '/logo.png';
import contactImg from '../../assets/contact.svg';
import menu from '../../assets/burger-menu.svg';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <div className='desktopMenu'>
        <Link id='section1' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
          Home
        </Link>
        <Link id='section2' activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>
          About
        </Link>
        {/* to update after other sections are created: */}
        {/* <Link id='section3' activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>
          Portfolio
        </Link> */}
      </div>
      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImg} alt='' className='desktopMenuImg' />
        Contact me
      </button>
      <img src={menu} alt='Menu' className='mobMenuIcon' onClick={() => setShowMenu(!showMenu)}/>
      <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}}>
        <Link id='section1' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>
          Home
        </Link>
        <Link id='section2' activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>
          About
        </Link>
        <Link id='section2' activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>
          Contact
        </Link>
      </div>
    </nav>
  )
};

export default Navbar;
