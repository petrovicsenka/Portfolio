import './navbar.scss';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.svg';
import { Link } from 'react-scroll';


const Navbar = () => {
  // return <div>navbar</div>;
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <div className='desktopMenu'>
        {/* <Link className="desktopMenuListItem"></Link> */}
        <Link id='section1' to="section1" className="desktopMenuListItem" smooth={true} duration={500}>
          Home
        </Link>
        <Link id='section2' to="section2" className="desktopMenuListItem" smooth={true} duration={500}>
          About
        </Link>
        <Link id='section3' to="section3" className="desktopMenuListItem" smooth={true} duration={500}>
          Portfolio
        </Link>
        <Link id='section4' to="section4" className="desktopMenuListItem" smooth={true} duration={500}>
          Clients
        </Link>
      </div>
      <button className='desktopMenuBtn'>
        <img src={contactImg} alt='' className='desktopMenuImg' />
        Contact Me
      </button>
    </nav>
  )
};

export default Navbar;
