/**
 * App Component
 * 
 * Root component that orchestrates the page.
 * Manages intro animation state and page visibility.
 * 
 * Architecture:
 * - IntroAnimation renders first, handles its own exit
 * - Once complete, main content fades in
 * - No loading states or spinners - the animation IS the loading
 */

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  IntroAnimation,
  Navigation,
  Hero,
  Projects,
  About,
  Contact,
  Footer
} from './components';
import './styles/global.css';

function App() {
  // Track whether intro animation has completed
  const [introComplete, setIntroComplete] = useState(false);

  // Callback for intro animation completion
  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      {/* Intro animation overlay - removes itself when done */}
      {!introComplete && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}

      {/* Main page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <Navigation visible={introComplete} />
        
        <main>
          <Hero visible={introComplete} />
          <Projects />
          <About />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </>
  );
}

export default App;
