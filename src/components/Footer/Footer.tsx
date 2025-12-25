/**
 * Footer
 * 
 * Minimal footer with copyright and a subtle closing thought.
 * No social icons or redundant links.
 */

import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Footer.module.css';

export function Footer() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className={styles.footer}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.copyright}>© {currentYear} Preethi Chalasani</span>
        </div>

        <div className={styles.right}>
          <span className={styles.note}>Designed with intention.</span>
        </div>
      </div>

      {/* Decorative line - echoes the equilibrium motif */}
      <div className={styles.line} />
    </motion.footer>
  );
}
