'use client';
import { useEffect, useRef } from 'react';
import styles from '../../styles/AnimatedSphere.module.css';

const AnimatedSphere = () => {
  const sphereRef = useRef(null);

  useEffect(() => {
    const createSphere = () => {
      if (!sphereRef.current) return;
      sphereRef.current.innerHTML = '';

      for (let x = 1; x <= 12; x++) {
        const plane = document.createElement('div');
        plane.className = `${styles.plane}`;
        plane.style.transform = `rotateY(${x * 15}deg)`;
        sphereRef.current.appendChild(plane);

        for (let y = 1; y <= 36; y++) {
          const spoke = document.createElement('div');
          spoke.className = `${styles.spoke}`;
          spoke.style.transform = `rotateZ(${y * 10}deg)`;
          
          const dot = document.createElement('div');
          dot.className = `${styles.dot}`;
          dot.style.backgroundColor = y % 2 === 0 ? '#DF53CB' : '#364EE5';
          dot.style.animation = `${styles.pulsate} 1.5s infinite ${aDelay(y)}s alternate both`;
          
          spoke.appendChild(dot);
          plane.appendChild(spoke);
        }
      }
    };

    createSphere();
  }, []);

  return (
    <div className={styles['sphere-wrapper']}>
      <div ref={sphereRef} className={styles.sphere}></div>
    </div>
  );
};

function aDelay(t) {
  const delays = {
    1: 0.05, 35: 0.05,
    2: 0.1, 34: 0.1,
    3: 0.15, 33: 0.15,
    4: 0.2, 32: 0.2,
    5: 0.25, 31: 0.25,
    6: 0.3, 30: 0.3,
    7: 0.35, 29: 0.35,
    8: 0.4, 28: 0.4,
    9: 0.45, 27: 0.45,
    10: 0.5, 26: 0.5,
    11: 0.55, 25: 0.55,
    12: 0.6, 24: 0.6,
    13: 0.65, 23: 0.65,
    14: 0.7, 22: 0.7,
    15: 0.75, 21: 0.75,
    16: 0.8, 20: 0.8,
    17: 0.85, 19: 0.85,
    18: 0.95,
    36: 0
  };
  return delays[t] || 1;
}

export default AnimatedSphere;
