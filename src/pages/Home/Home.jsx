import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import Button from '../../components/Button/Button';
import profileImage from '../../assets/WhatsApp Image 2026-03-18 at 15.00.55.jpeg';
import logoImage from '../../assets/logo.jpeg';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const SERVICES = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Modern, fast, responsive websites and web apps built with React and clean architecture.',
  },
  {
    icon: '📱',
    title: 'App Development',
    desc: 'Full stack app development for scalable products, from user interfaces to backend logic and integrations.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Beautiful, intuitive interfaces that users actually enjoy using — pixel-perfect every time.',
  },
  {
    icon: '⚡',
    title: 'Performance & SEO',
    desc: 'Optimized builds, fast load times, and clean structure that ranks and converts.',
  },
];

const STATS = [
  { value: '5+', label: 'Projects' },
  { value: '2+', label: 'Years' },
  { value: '100%', label: 'Dedication' },
];

const CONTACT_ITEMS = [
  { icon: <FiMail size={14} />, text: 'johnsonibekwe61@gmail.com' },
  { icon: <FiLinkedin size={14} />, text: 'linkedin.com/in/ibekwe-johnson-360b6627b' },
  { icon: <FiPhone size={14} />, text: '+234 703-9928-720' },
  { icon: <FiMapPin size={14} />, text: 'Delta State, Nigeria' },
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [typing, setTyping] = useState(true);
  const [profileImageUrl, setProfileImageUrl] = useState(profileImage);

  const ROLES = ['Fullstack Developer', 'React Specialist', 'UI Builder', 'AI User', 'Problem Solver', 'Working with LionGate', 'Open to Opportunities'];

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;
    if (typing) {
      if (displayedRole.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayedRole(currentRole.slice(0, displayedRole.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayedRole.length > 0) {
        timeout = setTimeout(() => setDisplayedRole(displayedRole.slice(0, -1)), 50);
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedRole, typing, roleIndex]);

  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-glow" />
        <div className="hero-content">
          {/* Top row */}
          <div className="hero-top">
            <motion.div className="hero-badge" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="hero-badge-dot" />
              Open to work
            </motion.div>
          </div>

          {/* Main hero grid */}
          <div className="hero-grid">
            <div className="hero-left">
              <motion.p className="hero-role" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                {displayedRole}<span className="cursor" />
              </motion.p>

              <motion.h1 className="hero-name" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
                Ibekwe Johnson
              </motion.h1>

              <motion.p className="hero-desc" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
                I build <strong>smart digital solutions</strong> that help businesses grow, operate better, and connect with the right people. Every line of code is written with purpose.
              </motion.p>

              <motion.div className="hero-stats" variants={fadeUp} initial="hidden" animate="visible" custom={4}>
                {STATS.map((s, i) => (
                  <div className="hero-stat" key={i}>
                    <span className="hero-stat-value">{s.value}</span>
                    <span className="hero-stat-label">{s.label}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate="visible" custom={5}>
                <Button variant="primary" to="/projects">
                  View My Work <FiArrowRight size={16} />
                </Button>
                <Button variant="outline" to="/contact">
                  Hire Me <FiArrowUpRight size={16} />
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="hero-right"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="hero-image-wrap">
                <div className="hero-image-glow" />
                <div className="hero-image-frame">
                  <div className="hero-logo-badge hero-logo-badge--corner">
                    <img src={logoImage} alt="Ibekwe Johnson logo" className="hero-logo-img" />
                  </div>
                  <div className="hero-avatar">
                    <img className="hero-avatar-image" src={profileImageUrl} alt="Ibekwe Johnson portrait" />
                    <span>JsonTech</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact strip */}
          <motion.div className="hero-contact-strip" variants={fadeUp} initial="hidden" animate="visible" custom={6}>
            {CONTACT_ITEMS.map((item, i) => (
              <div className="hero-contact-item" key={i}>
                <span className="hero-contact-icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services section">
        <div className="container">
          <motion.div
            className="services-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag" style={{ margin: '0 auto 16px' }}>What I Do</span>
            <h2 className="section-title">Services I <span className="accent">Offer</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              From concept to deployment, I handle full stack app development with care, precision, and attention to detail.
            </p>
          </motion.div>

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                className="card service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-section section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-glow" />
            <h2>Ready to Build Something Great?</h2>
            <p>
              Whether you have a project in mind or just want to talk — I&apos;m one message away.
            </p>
            <div className="cta-btns">
              <Button variant="primary" to="/contact">
                Start a Conversation <FiArrowRight size={16} />
              </Button>
              <Button variant="outline" to="/projects">
                See My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
