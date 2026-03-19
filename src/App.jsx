import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

function AnimatedPage({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      {!loading && (
        <>
          <ScrollToTop />
          <Navbar />
          <main style={{ minHeight: '100vh' }}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
                <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
                <Route path="/skills" element={<AnimatedPage><Skills /></AnimatedPage>} />
                <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
                <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
                {/* 404 fallback */}
                <Route path="*" element={
                  <AnimatedPage>
                    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
                      <h1 style={{ fontFamily: 'Space Grotesk', fontSize: '5rem', fontWeight: 800, color: 'var(--accent)' }}>404</h1>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Page not found</p>
                      <a href="/" className="btn btn--primary" style={{ marginTop: '8px' }}>Go Home</a>
                    </div>
                  </AnimatedPage>
                } />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

