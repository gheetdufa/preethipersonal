/**
 * Hero Section
 * 
 * Asymmetrical layout, not centered.
 * Name and title positioned like editorial design.
 * 
 * The layout creates visual tension - content pushed left,
 * balanced by whitespace and a subtle decorative element right.
 * 
 * No "View My Work" buttons. Navigation handles that.
 */

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

interface HeroProps {
  visible: boolean;
}

export function Hero({ visible }: HeroProps) {
  // Stagger animation for child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <motion.section
      className={styles.hero}
      variants={containerVariants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      {/* Decorative element - subtle phase diagram inspired graphic */}
      <div className={styles.diagram}>
        <svg viewBox="0 0 200 200" className={styles.diagramSvg}>
          {/* Axis lines */}
          <line x1="20" y1="180" x2="180" y2="180" className={styles.axis} />
          <line x1="20" y1="180" x2="20" y2="20" className={styles.axis} />
          
          {/* Phase boundary curve - like a liquidus line */}
          <path
            d="M 30 170 Q 80 80, 170 40"
            className={styles.phaseLine}
          />
          
          {/* Equilibrium point */}
          <circle cx="90" cy="110" r="4" className={styles.equilibrium} />
          
          {/* Small labels */}
          <text x="100" y="195" className={styles.axisLabel}>T</text>
          <text x="8" y="100" className={styles.axisLabel}>P</text>
        </svg>
      </div>

      <div className={styles.content}>
        <motion.p variants={itemVariants} className={styles.label}>
          Chemical & Biomolecular Engineering
        </motion.p>
        
        <motion.h1 variants={itemVariants} className={styles.name}>
          Preethi<br />
          <span className={styles.surname}>Chalasani</span>
        </motion.h1>

        <motion.p variants={itemVariants} className={styles.description}>
          Bridging biochemistry and engineering through research in 
          RNA therapeutics, biomicrofluidics, and clinical applications.
        </motion.p>

        {/* Current status/affiliation */}
        <motion.div variants={itemVariants} className={styles.status}>
          <span className={styles.statusLabel}>Currently</span>
          <span className={styles.statusValue}>BS Chemical Engineering, University of Maryland</span>
        </motion.div>
      </div>

      {/* Scroll indicator - subtle, not a bouncing arrow */}
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className={styles.scrollLine} />
      </motion.div>
    </motion.section>
  );
}
