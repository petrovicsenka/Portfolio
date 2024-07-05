import './Navbar.scss';
import logo from '/logo.png';
import contactImg from '../../assets/contact.svg';
import menu from '../../assets/burger-menu.svg';
import closeIcon from '../../assets/close-burger-menu.svg';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'intro', label: 'Home', offset: -100 },
  { id: 'about', label: 'About', offset: -50 },
  { id: 'skills', label: 'Skills', offset: -50 },
  { id: 'experience', label: 'Experience', offset: -50 },
  { id: 'education', label: 'Education', offset: -50 },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <div className='desktopMenu'>
        {navItems.map((item, index) => (
          <Link
            key={index}
            activeClass='active'
            to={item.id}
            spy={true}
            smooth={true}
            offset={item.offset}
            duration={500}
            className='desktopMenuListItem'
          >
            {item.label}
          </Link>
        ))}
      </div>
      <button
        className='desktopMenuBtn'
        onClick={() => {
          document
            .getElementById('contact')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <img src={contactImg} alt='' className='desktopMenuImg' />
        Contact me
      </button>
      <img
        src={showMenu ? closeIcon : menu}
        alt='Menu'
        className='mobMenuIcon'
        onClick={() => setShowMenu(!showMenu)}
      />
      <motion.div
        className='navMenu'
        style={{
          display: 'flex',
          opacity: showMenu ? 1 : 0,
          transition: 'opacity 0.7s ease',
        }}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            activeClass='active'
            to={item.id}
            spy={true}
            smooth={true}
            offset={item.offset}
            duration={500}
            className='listItem'
            onClick={() => setShowMenu(false)}
          >
            {item.label}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
