import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiArrowRight } from 'react-icons/fi';
import { projects, categories } from '../../data/projects';
import Button from '../../components/Button/Button';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    setActiveImage(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="projects-page">
      {/* ── HERO ── */}
      <section className="projects-hero section">
        <div className="glow-blob projects-glow" />
        <div className="container">
          <motion.span className="section-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Portfolio
          </motion.span>
          <motion.h1 className="section-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            My <span className="accent">Projects</span>
          </motion.h1>
          <motion.p className="section-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Real solutions to real problems — every project here represents
            a challenge I tackled and a skill I sharpened.
          </motion.p>

          <motion.div
            className="projects-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="projects-main">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="projects-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  className="card project-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  onClick={() => openModal(project)}
                >
                  <div className="project-card-inner">
                    <div className="project-img-wrap">
                      <img src={project.image} alt={project.title} loading="lazy" />
                      <span className="project-badge">{project.category}</span>
                      <div className="project-img-overlay">
                        <button
                          className="overlay-btn"
                          onClick={(e) => { e.stopPropagation(); openModal(project); }}
                        >
                          Details
                        </button>
                        <a
                          href={project.liveLink}
                          className="overlay-btn outline"
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiExternalLink size={13} /> Live
                        </a>
                      </div>
                    </div>

                    <div className="project-body">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.description}</p>

                      <div className="project-tags">
                        {project.technologies.slice(0, 4).map((t) => (
                          <span key={t} className="tech-tag">{t}</span>
                        ))}
                      </div>

                      <div className="project-links">
                        <a href={project.githubLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                          <FiGithub size={14} /> Source
                        </a>
                        <a href={project.liveLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                          <FiExternalLink size={14} /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="projects-cta section">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Have a Project in Mind?</h3>
            <p>Let&apos;s work together to build something exceptional.</p>
            <Button variant="primary" to="/contact">
              Let&apos;s Talk <FiArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-box"
              initial={{ opacity: 0, scale: 0.93, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}><FiX /></button>

              <div className="modal-images">
                <img src={selectedProject.images[activeImage]} alt={selectedProject.title} />
                <div className="modal-dots">
                  {selectedProject.images.map((_, i) => (
                    <button
                      key={i}
                      className={`modal-dot ${i === activeImage ? 'active' : ''}`}
                      onClick={() => setActiveImage(i)}
                    />
                  ))}
                </div>
              </div>

              <div className="modal-content">
                <h2>{selectedProject.title}</h2>

                <div className="modal-meta">
                  <div className="modal-meta-item">
                    <span className="meta-label">Category</span>
                    <span className="meta-value">{selectedProject.category}</span>
                  </div>
                  <div className="modal-meta-item">
                    <span className="meta-label">Role</span>
                    <span className="meta-value">{selectedProject.role}</span>
                  </div>
                </div>

                <p className="modal-desc">{selectedProject.description}</p>

                <div className="modal-problem">
                  <strong>Problem Solved:</strong> {selectedProject.problem}
                </div>

                <div className="modal-tags">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="modal-actions">
                  <Button variant="primary" href={selectedProject.liveLink}>
                    <FiExternalLink /> Live Demo
                  </Button>
                  <Button variant="outline" href={selectedProject.githubLink}>
                    <FiGithub /> View Source
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
