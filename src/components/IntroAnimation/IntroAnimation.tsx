/**
 * IntroAnimation
 * 
 * Concept: Elements emerging from entropy, like a reaction reaching equilibrium.
 * 
 * Visual metaphor: Scattered molecular fragments coalesce into structured text.
 * The name resolves from noise - letters find their positions like atoms
 * settling into crystal lattice positions.
 * 
 * Duration: ~1.8 seconds total
 * No splash screen feel - this IS the homepage, just loading.
 */

import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './IntroAnimation.module.css';

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'scatter' | 'resolve' | 'complete'>('scatter');

  // The name, split into characters for individual animation
  const name = "PREETHI";
  
  // Generate deterministic "random" positions for scattered state
  // Using index-based seeds so it's consistent across renders
  const scatteredPositions = useMemo(() => 
    name.split('').map((_, i) => ({
      x: Math.sin(i * 1.7) * 120,
      y: Math.cos(i * 2.3) * 80,
      rotate: (i - 3) * 25,
      scale: 0.3 + (i % 3) * 0.2
    })),
    []
  );

  useEffect(() => {
    // Phase 1: Scatter state (already set)
    // Phase 2: Begin resolving after brief pause
    const resolveTimer = setTimeout(() => {
      setPhase('resolve');
    }, 200);

    // Phase 3: Complete and fade out
    const completeTimer = setTimeout(() => {
      setPhase('complete');
    }, 1400);

    // Notify parent when animation is done
    const doneTimer = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(resolveTimer);
      clearTimeout(completeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          className={styles.container}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Subtle grid pattern - like graph paper or phase diagram axes */}
          <div className={styles.grid} />

          {/* Floating molecular fragments - decorative, very subtle */}
          <div className={styles.fragments}>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.fragment}
                initial={{
                  x: Math.sin(i * 2.1) * 200,
                  y: Math.cos(i * 1.8) * 150,
                  opacity: 0.4,
                  scale: 0.5 + i * 0.1
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                  scale: 0
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.1 + i * 0.05,
                  ease: [0.16, 1, 0.3, 1]
                }}
              />
            ))}
          </div>

          {/* Main name animation */}
          <div className={styles.nameContainer}>
            {name.split('').map((char, i) => (
              <motion.span
                key={i}
                className={styles.letter}
                initial={{
                  x: scatteredPositions[i].x,
                  y: scatteredPositions[i].y,
                  rotate: scatteredPositions[i].rotate,
                  scale: scatteredPositions[i].scale,
                  opacity: 0.3
                }}
                animate={phase !== 'scatter' ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  opacity: 1
                } : undefined}
                transition={{
                  duration: 0.8,
                  delay: i * 0.04,
                  ease: [0.16, 1, 0.3, 1] // Expo out - fast start, gentle settle
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Subtle equilibrium indicator - a line that stabilizes */}
          <motion.div
            className={styles.equilibriumLine}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.0,
              ease: [0.16, 1, 0.3, 1]
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
