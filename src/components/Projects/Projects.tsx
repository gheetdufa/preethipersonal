/**
 * Projects Section
 * 
 * Each project presented as a case study, not a card.
 * Expandable detail view for methodology and outcomes.
 * 
 * Layout: Stacked rows with hover states, not a grid.
 * Evokes academic paper structure: abstract → details.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { projects } from '../../data/projects';
import type { Project } from '../../types';
import styles from './Projects.module.css';

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const toggleProject = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className={styles.section} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className={styles.title}>Selected Work</h2>
        <p className={styles.subtitle}>
          Research and engineering projects spanning reaction systems, 
          separations, and process design.
        </p>
      </motion.div>

      <div className={styles.list}>
        {projects.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            onToggle={() => toggleProject(project.id)}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
}

interface ProjectRowProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
  isVisible: boolean;
}

function ProjectRow({ project, isExpanded, onToggle, index, isVisible }: ProjectRowProps) {
  return (
    <motion.article
      className={`${styles.project} ${isExpanded ? styles.expanded : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.08,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {/* Clickable header row */}
      <button
        className={styles.projectHeader}
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <div className={styles.projectMeta}>
          <span className={styles.projectPeriod}>{project.period}</span>
          <div className={styles.projectDomains}>
            {project.domains.slice(0, 2).map((domain) => (
              <span key={domain} className={styles.domain}>{domain}</span>
            ))}
          </div>
        </div>

        <div className={styles.projectMain}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectAbstract}>{project.abstract}</p>
        </div>

        {/* Expand indicator - minimal, not an icon */}
        <span className={styles.expandIndicator}>
          <span className={`${styles.expandLine} ${styles.horizontal}`} />
          <span className={`${styles.expandLine} ${styles.vertical} ${isExpanded ? styles.hidden : ''}`} />
        </span>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            className={styles.projectContent}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.contentInner}>
              <div className={styles.contentGrid}>
                <div className={styles.contentBlock}>
                  <h4 className={styles.contentLabel}>Problem</h4>
                  <p className={styles.contentText}>{project.problem}</p>
                </div>

                <div className={styles.contentBlock}>
                  <h4 className={styles.contentLabel}>Constraints</h4>
                  <ul className={styles.constraintsList}>
                    {project.constraints.map((constraint, i) => (
                      <li key={i} className={styles.constraint}>
                        {constraint}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.contentBlock}>
                  <h4 className={styles.contentLabel}>Methodology</h4>
                  <p className={styles.contentText}>{project.methodology}</p>
                </div>

                <div className={styles.contentBlock}>
                  <h4 className={styles.contentLabel}>Outcome</h4>
                  <p className={styles.contentText}>{project.outcome}</p>
                </div>
              </div>

              {project.link && (
                <a href={project.link} className={styles.projectLink}>
                  <span>Read more</span>
                  <span className={styles.linkArrow}>→</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

