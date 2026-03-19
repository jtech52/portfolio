import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">J</span>
              <span className="footer-logo-text">Johnson<span>.</span></span>
            </Link>
            <p>Full stack developer crafting modern, purposeful digital experiences.</p>
          </div>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FiTwitter /></a>
            <a href="https://wa.me/2347039928720" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
