import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../../components/Button/Button';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const STATS = [
  { value: '10+', label: 'Projects Completed' },
  { value: '2+', label: 'Years of Learning' },
  { value: '100%', label: 'Problem-Solving Focus' },
  { value: '∞', label: 'Curiosity' },
];

const VALUES = [
  { title: 'Consistency Over Talent', desc: 'I show up every day. Talent fades, but discipline compounds.' },
  { title: 'Purpose-Driven Building', desc: "Every project solves a real problem. I don't write code for the sake of it." },
  { title: 'Always Growing', desc: "Every week I learn something new, improve something old, and push further." },
  { title: 'Clarity & Communication', desc: 'Working on communicating properly, I give honest updates, and deliver what I promise.' },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Understand', desc: 'Deep dive into the problem and goals' },
  { num: '02', title: 'Plan', desc: 'Map out the solution and timeline' },
  { num: '03', title: 'Design', desc: 'Build UI that looks good and feels right' },
  { num: '04', title: 'Build', desc: 'Code with clean, scalable logic' },
  { num: '05', title: 'Deliver', desc: 'Test, improve, and ship confidently' },
];

const HISTORY = [
  { date: '2026 – Present', title: 'Freelance FullStack Developer', org: 'Working with LionGate software Dev' },
  { date: '2025', title: 'Open Source Contributor', org: 'GitHub Projects' },
  { date: '2024', title: 'Built First React App', org: 'Personal Projects' },
  { date: '2023', title: 'Started Web Development', org: 'Academic' },
];

const EDUCATION = [
  { date: '2025 – 2026', title: 'Advanced React & Firebase', org: 'Online Courses' },
  { date: '2024 – 2025', title: 'JavaScript Deep Dive', org: 'Academics & Projects' },
  { date: '2023 – 2024', title: 'HTML, CSS & JS Foundations', org: 'Academics & Online Learning' },
];

const About = () => {
  return (
    <div className="about-page">
      {/* ── HERO ── */}
      <section className="about-hero section">
        <div className="glow-blob about-glow" />
        <div className="container">
          <div className="about-hero-grid">
            <motion.div className="about-hero-left" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.span className="section-tag" variants={fadeUp}>About Me</motion.span>
              <motion.h1 className="section-title" variants={fadeUp}>
                I Build With <span className="accent">Purpose,</span><br />
                Not Just Code
              </motion.h1>
              <motion.p className="about-text" variants={fadeUp}>
                <strong>My name is Ibekwe Johnson, and I&apos;m a FullStack developer.</strong> I
                don&apos;t come from a classroom I come from genuine passion, relentless practice,
                and the belief that real-world skills matter more than paper.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Button variant="primary" to="/projects">
                  See What I&apos;ve Built <FiArrowRight size={16} />
                </Button>
              </motion.div>
            </motion.div>

            <div className="about-hero-right">
              <div className="about-stats-grid">
                {STATS.map((s, i) => (
                  <motion.div
                    key={i}
                    className="card about-stat"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  >
                    <div className="about-stat-value">{s.value}</div>
                    <div className="about-stat-label">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="about-values section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-values-header"
          >
            <span className="section-tag">Core Values</span>
            <h2 className="section-title">What Drives <span className="accent">Me</span></h2>
          </motion.div>

          <div className="values-grid">
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                className="card value-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="value-num">0{i + 1}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="about-process section">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '48px' }}
          >
            <span className="section-tag" style={{ margin: '0 auto 16px' }}>How I Work</span>
            <h2 className="section-title">My Work <span className="accent">Process</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A structured flow from idea to polished product.
            </p>
          </motion.div>

          <div className="process-grid">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                className="process-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="process-num">{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="about-timeline section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="timeline-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="timeline-heading">Experience</h3>
              <div className="timeline-list">
                {HISTORY.map((item, i) => (
                  <div key={i} className="timeline-item">
                    <span className="timeline-date">{item.date}</span>
                    <h4>{item.title}</h4>
                    <p>{item.org}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="timeline-heading">Education</h3>
              <div className="timeline-list">
                {EDUCATION.map((item, i) => (
                  <div key={i} className="timeline-item">
                    <span className="timeline-date">{item.date}</span>
                    <h4>{item.title}</h4>
                    <p>{item.org}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
