import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <motion.a 
          href="/" 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.logoLink}
        >
          <img src="/logo.jpeg" alt="CE STUDIO" style={styles.logo} />
        </motion.a>
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    padding: '20px 0',
    zIndex: 100,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'center', // Center the logo at the top
  },
  logoLink: {
    textDecoration: 'none',
    display: 'inline-block',
  },
  logo: {
    height: '60px',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default Header;
