import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { skillGroups, techStack, currentlyLearning } from '../../data/skills';
import './Skills.css';

const LEVEL_COLORS = {
  Expert: 'badge--accent',
  Advanced: 'badge-cyan',
  Intermediate: 'badge--green',
  Learning: 'badge--green',
};

const SkillBar = ({ skill }) => {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="card skill-bar-card" ref={ref}>
      <div className="skill-bar-top">
        <div className="skill-bar-icon">
          <img src={skill.icon} alt={skill.name} />
        </div>
        <span className="skill-bar-name">{skill.name}</span>
        <span className="skill-bar-pct">{skill.level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill ${animated ? 'animate' : ''}`}
          style={{ '--target-width': `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

const LearningBar = ({ item }) => {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="card learning-card" ref={ref}>
      <div className="learning-top">
        <span className="learning-icon">{item.icon}</span>
        <h4>{item.name}</h4>
        <span className="learning-pct">{item.progress}%</span>
      </div>
      <div className="learning-bar-track">
        <div
          className={`learning-bar-fill ${animated ? 'animate' : ''}`}
          style={{ '--target-width': `${item.progress}%` }}
        />
      </div>
      <div className="learning-label">Progress so far</div>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'App Development', 'Website', 'Backend', 'Tools'];

  const filteredTech = activeTab === 'All'
    ? techStack
    : techStack.filter((t) => {
        if (activeTab === 'App Development') return ['Flutter', 'React'].includes(t.name);
        if (activeTab === 'Website') return ['React', 'HTML', 'CSS', 'JavaScript'].includes(t.name);
        if (activeTab === 'Backend') return ['PHP', 'Node.js', 'Firebase'].includes(t.name);
        if (activeTab === 'Tools') return ['Git', 'VS Code', 'Figma', 'GitHub', 'Copilot'].includes(t.name);
        return true;
      });

  return (
    <div className="skills-page">
      {/* ── HERO ── */}
      <section className="skills-hero section">
        <div className="glow-blob skills-glow" />
        <div className="container">
          <motion.span className="section-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            My Toolkit
          </motion.span>
          <motion.h1 className="section-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Skills & <span className="accent">Tech Stack</span>
          </motion.h1>
          <motion.p className="section-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Tools and technologies I use to bring ideas to life — always learning, always growing.
          </motion.p>
        </div>
      </section>

      {/* ── SKILL GROUPS ── */}
      <section className="skill-groups section" style={{ paddingTop: 0 }}>
        <div className="container">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              className="skill-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <div className="skill-group-header">
                <span className="skill-group-icon">{group.icon}</span>
                <h3>{group.category}</h3>
                <span>{group.skills.length} skills</span>
              </div>
              <div className="skill-bars-grid">
                {group.skills.map((skill, si) => (
                  <SkillBar key={si} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TECH CARDS ── */}
      <section className="tech-expertise section">
        <div className="container">
          <motion.div
            className="tech-expertise-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Deep Dives</span>
            <h2 className="section-title">Technologies & <span className="accent">Expertise</span></h2>
            <p className="section-subtitle">What I actually know and how I use each technology.</p>
            <div className="tech-filter-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="tech-cards-grid">
            {filteredTech.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="card tech-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="tech-card-top">
                  <div className="tech-card-img">
                    <img src={tech.icon} alt={tech.name} />
                  </div>
                  <div className="tech-card-meta">
                    <h4>{tech.name}</h4>
                    <span className={`badge ${LEVEL_COLORS[tech.level] || 'badge--accent'}`}>{tech.level}</span>
                  </div>
                </div>
                <p className="tech-card-desc">{tech.description}</p>
                <div className="tech-card-footer">
                  <span className="tech-detail">{tech.years}</span>
                  <span className="tech-detail">{tech.projects}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEARNING ── */}
      <section className="currently-learning section">
        <div className="container">
          <motion.div
            className="learning-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Growth Mindset</span>
            <h2 className="section-title">Currently <span className="accent">Learning</span></h2>
            <p className="section-subtitle">Technology never stops — neither do I.</p>
          </motion.div>
          <div className="learning-grid">
            {currentlyLearning.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <LearningBar item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
