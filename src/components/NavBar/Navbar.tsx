import './Navbar.scss';
import logo from '/logo.png';
import contactImg from '../../assets/contact.svg';
import menu from '../../assets/burger-menu.svg';
import closeIcon from '../../assets/close.svg';
import { Link } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

const navItems = [
  { id: 'intro', label: 'Home', offset: -100 },
  { id: 'about', label: 'About', offset: -50 },
  { id: 'skills', label: 'Skills', offset: -50 },
  { id: 'experience', label: 'Experience', offset: -50 },
  { id: 'education', label: 'Education', offset: -50 },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        setShowMenu(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        !menuRef.current?.contains(event.target as Node) &&
        !iconRef.current?.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' onClick={toggleModal} />
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
        ref={iconRef}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
      <motion.div
        ref={menuRef}
        className='navMenu'
        style={{
          display: showMenu ? 'flex' : 'none',
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel='Enlarged Logo'
        className='modal'
        overlayClassName='overlay'
      >
        <img src={logo} alt='Enlarged Logo' className='enlargedLogo' />
        <img
          src={closeIcon}
          alt='Close'
          className='closeButton'
          onClick={toggleModal}
        />
      </Modal>
    </nav>
  );
};

export default Navbar;
