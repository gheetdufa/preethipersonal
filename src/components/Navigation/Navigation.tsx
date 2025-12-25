/**
 * Navigation
 * 
 * Minimal top navigation.
 * No hamburger menu - content is on one page, nav is about orientation.
 * 
 * Design: Asymmetrical layout, name left, links right.
 * Links use understated hover states, not buttons.
 */

import { motion } from 'framer-motion';
import styles from './Navigation.module.css';

interface NavigationProps {
  visible: boolean;
}

export function Navigation({ visible }: NavigationProps) {
  const navItems = [
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      className={styles.nav}
      initial={{ opacity: 0, y: -20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.inner}>
        {/* Name as home link */}
        <a href="#" className={styles.name}>
          Preethi Chalasani
        </a>

        {/* Navigation links */}
        <ul className={styles.links}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.link}>
                <span className={styles.linkText}>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
