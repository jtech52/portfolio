import { NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiCode, FiFolder, FiMail, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: '/', icon: <FiHome size={18} /> },
  { label: 'About', to: '/about', icon: <FiUser size={18} /> },
  { label: 'Skills', to: '/skills', icon: <FiCode size={18} /> },
  { label: 'Projects', to: '/projects', icon: <FiFolder size={18} /> },
  { label: 'Contact', to: '/contact', icon: <FiMail size={18} /> },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="dock-nav dock-top">
      <div className="dock-inner">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `dock-link ${isActive ? 'active' : ''}`}
            end={link.to === '/'}
          >
            <span className="dock-icon">{link.icon}</span>
            <span className="dock-label">{link.label}</span>
          </NavLink>
        ))}

        <div className="dock-divider" />

        <button
          className="dock-link dock-theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <span className="dock-icon">
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </span>
          <span className="dock-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
