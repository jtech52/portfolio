import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiMapPin, FiSend, FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const SOCIAL_LINKS = [
  { icon: <FiGithub />, label: 'GitHub', desc: 'Check out my repos', href: 'https://github.com', color: 'var(--text-primary)' },
  { icon: <FiLinkedin />, label: 'LinkedIn', desc: 'Connect professionally', href: 'https://linkedin.com', color: '#0a66c2' },
  { icon: <FaWhatsapp />, label: 'WhatsApp', desc: 'Quick conversation', href: 'https://wa.me/2347039928720', color: '#25d366' },
  { icon: <FiTwitter />, label: 'Twitter / X', desc: 'Follow my journey', href: 'https://twitter.com', color: '#1d9bf0' },
];

const SUBJECTS = ['Hire Me for a Project', 'Freelance Collaboration', 'General Inquiry', 'Partnership', 'Other'];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
  };

  return (
    <div className="contact-page">
      {/* ── HERO ── */}
      <section className="contact-hero section">
        <div className="glow-blob contact-glow" />
        <div className="container">
          <motion.span className="section-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Get In Touch
          </motion.span>
          <motion.h1 className="section-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Let&apos;s <span className="accent">Work Together</span>
          </motion.h1>
          <motion.p className="section-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Have a project in mind, want to collaborate, or just want to say hello?
            I respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <motion.div
              className="card contact-form-card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {!sent ? (
                <>
                  <h3>Send Me a Message</h3>
                  <p>Fill out the form and I&apos;ll get back to you soon.</p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input id="email" name="email" type="email" placeholder="johnsonibekwe61@gmail.com" value={form.email} onChange={handleChange} required />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <select id="subject" name="subject" value={form.subject} onChange={handleChange} required>
                        <option value="">Select a subject...</option>
                        {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea id="message" name="message" placeholder="Tell me about your project or idea..." value={form.message} onChange={handleChange} required />
                    </div>

                    <button type="submit" className="form-submit" disabled={sending}>
                      {sending ? 'Sending...' : <><FiSend /> Send Message</>}
                    </button>
                  </form>
                </>
              ) : (
                <div className="form-success">
                  <div className="form-success-icon">✅</div>
                  <h4>Message Sent!</h4>
                  <p>Thanks {form.name}! I&apos;ll get back to you within 24 hours.</p>
                  <button
                    className="btn btn--outline"
                    style={{ marginTop: '12px' }}
                    onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  >
                    Send Another
                  </button>
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              className="contact-info-col"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Availability */}
              <div className="card contact-availability">
                <div className="availability-dot" />
                <div>
                  <h4>Available for Work</h4>
                  <p>Open to freelance projects & collaborations</p>
                </div>
              </div>

              {/* Details */}
              <div className="card contact-details-card">
                <h4>Contact Information</h4>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><FiMapPin /></div>
                  <div>
                    <span>Location</span>
                    <p>Delta State, Nigeria</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><FiMail /></div>
                  <div>
                    <span>Email</span>
                    <a href="mailto:johnsonibekwe61@gmail.com">johnsonibekwe61@gmail.com</a>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><FaWhatsapp /></div>
                  <div>
                    <span>WhatsApp</span>
                    <a href="https://wa.me/2347039928720" target="_blank" rel="noreferrer">+234 703-9928-720</a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="card contact-socials-card">
                <h4>Find Me Online</h4>
                <div className="contact-socials-list">
                  {SOCIAL_LINKS.map((s) => (
                    <a key={s.label} href={s.href} className="contact-social-link" target="_blank" rel="noreferrer">
                      <div className="social-link-icon" style={{ color: s.color }}>{s.icon}</div>
                      <div className="social-link-info">
                        <span>{s.label}</span>
                        <p>{s.desc}</p>
                      </div>
                      <FiArrowUpRight className="social-link-arrow" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
