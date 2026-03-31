import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiCoffee, FiCopy, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import logoImage from '../../assets/logo.jpeg';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [copiedField, setCopiedField] = useState('');

  const supportDetails = {
    provider: 'Opay',
    accountName: 'Johnson Chibuzor',
    accountNumber: '7039928720',
    note: 'Buy me a coffee or support my work using the account details below.',
  };

  const handleCopy = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
      window.setTimeout(() => setCopiedField(''), 2000);
    } catch {
      setCopiedField('');
    }
  };

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

          <div className="footer-actions">
            <button
              type="button"
              className="footer-support-btn"
              onClick={() => setIsSupportOpen(true)}
              aria-expanded={isSupportOpen}
              aria-controls="support-modal"
            >
              <FiCoffee />
              <span>Buy Me a Coffee</span>
            </button>

            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a href="https://www.linkedin.com/in/ibekwe-johnson-360b6627b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FiTwitter /></a>
              <a href="https://wa.me/message/KABJC7MK257IO1" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} JsonTech. All rights reserved.</p>
        </div>
      </div>

      {isSupportOpen && (
        <div className="support-modal-overlay" onClick={() => setIsSupportOpen(false)}>
          <div className="support-modal" id="support-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="support-modal-close"
              aria-label="Close support modal"
              onClick={() => setIsSupportOpen(false)}
            >
              ×
            </button>

            <div className="footer-support-head">
              <h3>Buy me a coffee</h3>
              <p>{supportDetails.note}</p>
            </div>

            <div className="footer-support-card">
              <div className="support-detail-row">
                <span>Provider</span>
                <strong>{supportDetails.provider}</strong>
              </div>

              <div className="support-detail-row">
                <span>Account Name</span>
                <strong>{supportDetails.accountName}</strong>
              </div>

              <div className="support-detail-row support-detail-row--copyable">
                <div>
                  <span>Account Number</span>
                  <strong>{supportDetails.accountNumber}</strong>
                </div>
                <button
                  type="button"
                  className="support-copy-btn"
                  onClick={() => handleCopy('modalAccountNumber', supportDetails.accountNumber)}
                >
                  {copiedField === 'modalAccountNumber' ? <FiCheck /> : <FiCopy />}
                  <span>{copiedField === 'modalAccountNumber' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a href="mailto:johnsonibekwe61@gmail.com" className="support-email-link">
                <FiMail />
                <span>Prefer another method? Send me an email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
