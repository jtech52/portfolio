import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import logoImage from '../../assets/logo.jpeg';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">
                <img src={logoImage} alt="JsonTech logo" className="footer-logo-image" />
              </span>
              <span className="footer-logo-text">JsonTech<span>.</span></span>
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
            <a href="https://www.linkedin.com/in/ibekwe-johnson-360b6627b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FiTwitter /></a>
            <a href="https://wa.me/message/KABJC7MK257IO1" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} JsonTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
