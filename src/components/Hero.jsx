import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div style={{...styles.heroContainer, backgroundImage: `url('/collections/adshoots_Velvet_luxury/Product shot 1.webp')`}}>
      <div style={styles.videoOverlay}></div>
      
      <div style={styles.content}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={styles.title}
        >
          CE STUDIO
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={styles.subtitle}
        >
          WE DON'T CREATE VISUALS. WE BUILD BRAND PRESENCE.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={styles.btnGroup}
        >
          <button className="luxury-btn" onClick={() => document.getElementById('collections').scrollIntoView({ behavior: 'smooth'})}>View Lookbooks</button>
          <button className="outline-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth'})}>Request Custom Shoot</button>
        </motion.div>
      </div>
    </div>
  );
};

const styles = {
  heroContainer: {
    height: '100vh',
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#000',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  videoPlaceholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#0a0a0a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)',
    zIndex: 2,
  },
  content: {
    position: 'relative',
    zIndex: 3,
    textAlign: 'center',
    maxWidth: '800px',
    padding: '0 20px',
  },
  logoImage: {
    width: '400px',
    maxWidth: '80%',
    marginBottom: '2rem',
    filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.8))',
    borderRadius: '10px',
  },
  title: {
    fontSize: '4.5rem',
    marginBottom: '1rem',
    textShadow: '0 4px 12px rgba(0,0,0,0.5)',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'var(--text-secondary)',
    marginBottom: '2.5rem',
    fontWeight: 300,
  },
  btnGroup: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  }
};

export default Hero;
