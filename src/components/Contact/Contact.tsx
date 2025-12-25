/**
 * Contact Section
 * 
 * Minimal, direct contact information.
 * No form - just email link and relevant professional links.
 * 
 * Design: Clean, understated. Serious people will reach out
 * if the work speaks to them.
 */

import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Contact.module.css';

export function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const links = [
    { label: 'Email', value: 'preethi@umd.edu', href: 'mailto:preethi@umd.edu' },
    { label: 'LinkedIn', value: '/in/preethi-chalasani', href: 'https://linkedin.com/in/' },
    { label: 'University', value: 'UMD Clark School', href: 'https://eng.umd.edu/' }
  ];

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.title}>Contact</h2>
          <p className={styles.text}>
            Open to research collaborations, internship opportunities, 
            and conversations about biochemical engineering and biotechnology.
          </p>
        </motion.div>

        <motion.div
          className={styles.links}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            >
              <span className={styles.linkLabel}>{link.label}</span>
              <span className={styles.linkValue}>{link.value}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
