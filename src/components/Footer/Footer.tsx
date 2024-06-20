import './Footer.scss';

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <div>
      <footer>
        Copyright &#169; {currentYear} Senka Petrović. All rights reserved.
      </footer>
    </div>
  )
}

export default Footer;
