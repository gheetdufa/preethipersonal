/**
 * About Section
 * 
 * Brief, serious, informative.
 * Not a "Hi, I'm X" casual intro.
 * 
 * Layout: Asymmetric two-column with text left, 
 * skills/interests rendered as a structured data visualization.
 */

import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './About.module.css';

export function About() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const competencies = [
    { area: 'Biochemistry & Biotechnology', level: 90 },
    { area: 'Laboratory Research', level: 88 },
    { area: 'Clinical Research (GCP)', level: 85 },
    { area: 'Data Analysis', level: 82 },
    { area: 'Financial Analysis', level: 78 }
  ];

  const tools = [
    'X-ray Crystallography', 'Protein Purification', 'Microsoft Excel', 
    'ADP', 'Unanet', 'DNA/RNA Analysis', 'Cell Culture', 'GCP Protocols'
  ];

  return (
    <section id="about" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.title}>Background</h2>
          
          <div className={styles.bio}>
            <p>
              I'm pursuing Chemical and Biomolecular Engineering at the University of Maryland's 
              A. James Clark School of Engineering, with involvement in QUEST Honors, 
              Interdisciplinary Business Honors, and serving as Finance Chair of the 
              Biocomputational Engineering Club.
            </p>
            <p>
              My research experience spans RNA structure-function relationships at UMBC, 
              biomicrofluidics with marine-derived biopolymers, clinical research at 
              Maryland Proton Treatment Center, and neurodegenerative disease research 
              at Johns Hopkins Medicine.
            </p>
            <p>
              I hold a Biotechnician Assistant credential and completed the Applications 
              and Research Laboratory program, gaining hands-on experience with modern 
              laboratory equipment for DNA, RNA, and protein analysis. Beyond research, 
              I've led community initiatives as NHS Vice President and continue fundraising 
              work with Care for Children International.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.data}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Competency visualization - simple bar chart style */}
          <div className={styles.competencies}>
            <h3 className={styles.dataLabel}>Competencies</h3>
            {competencies.map((item, index) => (
              <div key={item.area} className={styles.competencyRow}>
                <span className={styles.competencyName}>{item.area}</span>
                <div className={styles.competencyBar}>
                  <motion.div
                    className={styles.competencyFill}
                    initial={{ scaleX: 0 }}
                    animate={isVisible ? { scaleX: item.level / 100 } : { scaleX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools - simple grid */}
          <div className={styles.tools}>
            <h3 className={styles.dataLabel}>Tools & Techniques</h3>
            <div className={styles.toolsGrid}>
              {tools.map((tool) => (
                <span key={tool} className={styles.tool}>{tool}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
