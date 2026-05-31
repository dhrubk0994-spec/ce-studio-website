import React from 'react';
import { motion } from 'framer-motion';

const collections = [
  { id: 'anarkali', name: 'Pastel Anarkali', image: '/collections/Ad_shot_anarkali_pastel/Product shot 1.webp', folder: 'Ad_shot_anarkali_pastel' },
  { id: 'minimalist', name: 'White Minimalist', image: '/collections/Ad_shot_white_minimalist_wear/Product shot 1.webp', folder: 'Ad_shot_white_minimalist_wear' },
  { id: 'summer', name: 'Summer Collection', image: '/collections/Adshoot_summer_collection/Product shot 1.webp', folder: 'Adshoot_summer_collection' },
  { id: 'boho', name: 'Blue Boho Wear', image: '/collections/Adshots_blue_bohowear/Product shot 1.webp', folder: 'Adshots_blue_bohowear' },
  { id: 'velvet', name: 'Velvet Luxury', image: '/collections/adshoots_Velvet_luxury/Product shot 1.webp', folder: 'adshoots_Velvet_luxury' },
  { id: 'brown', name: 'Brown Minimalist', image: '/collections/adshots_Brown_minimalist/Product shot 1.webp', folder: 'adshots_Brown_minimalist' },
];

const Collage = ({ onSelectCollection }) => {
  return (
    <section id="collections" style={styles.section}>
      <h2 style={styles.heading}>Curated Editorials</h2>
      <p style={{...styles.cardSubtitle, textAlign: 'center', marginBottom: '50px'}}>Explore our AI-generated luxury campaigns</p>
      <div style={styles.grid}>
        {collections.map((item, index) => (
          <motion.div 
            key={item.id}
            style={styles.card}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => onSelectCollection(item)}
          >
            <div style={{...styles.imageWrapper, backgroundImage: `url("${item.image}")`}}>
              <div style={styles.overlay}>
                <h3 style={styles.cardTitle}>{item.name}</h3>
                <p style={styles.cardSubtitle}>View 5 Ad Shoots</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 20px',
    backgroundColor: '#050505',
  },
  heading: {
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '50px',
    color: '#fff',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    position: 'relative',
    height: '450px',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.5s ease',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '30px 20px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#fff',
    marginBottom: '5px',
  },
  cardSubtitle: {
    fontSize: '0.9rem',
    color: 'var(--accent-color)',
    fontFamily: 'Inter',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  }
};

export default Collage;
