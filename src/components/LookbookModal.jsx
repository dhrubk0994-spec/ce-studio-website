import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import HTMLFlipBook from 'react-pageflip';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref} style={styles.page}>
      <div className="page-content" style={styles.pageContent}>
        {props.children}
      </div>
    </div>
  );
});

const LookbookModal = ({ collection, onClose }) => {
  const bookRef = useRef();

  if (!collection) return null;

  const images = ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp'];

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={styles.overlay}
      >
        {/* 3D Background Particles */}
        <div style={styles.canvasContainer}>
          <Canvas>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} color="#ffffff" />
          </Canvas>
        </div>

        <button style={styles.closeBtn} onClick={onClose}>
          <X size={32} color="#fff" />
        </button>

        <div style={styles.magazineContainer}>
          <HTMLFlipBook 
            width={400} 
            height={600} 
            size="stretch"
            minWidth={300}
            maxWidth={500}
            minHeight={400}
            maxHeight={700}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            ref={bookRef}
            style={styles.book}
          >
            {/* Cover Page */}
            <Page>
              <div style={styles.coverPage}>
                <h1 style={styles.coverTitle}>CE STUDIO</h1>
                <div style={styles.coverLine}></div>
                <h2 style={styles.coverSubtitle}>{collection.name}</h2>
                <p style={styles.coverTagline}>WE DON'T CREATE VISUALS.<br/>WE BUILD BRAND PRESENCE.</p>
              </div>
            </Page>

            {/* Ad Shoots */}
            {images.map((img, idx) => (
              <Page key={idx}>
                <div style={styles.imagePage}>
                  <img 
                    src={`/collections/${collection.folder}/${img}`} 
                    alt={`Ad Shoot ${idx + 1}`}
                    style={styles.image}
                  />
                  <div style={styles.pageNumber}>0{idx + 1}</div>
                </div>
              </Page>
            ))}

            {/* Back Cover */}
            <Page>
              <div style={styles.backCover}>
                <h2 style={{fontFamily: 'Playfair Display', marginBottom: '30px'}}>Make It Yours</h2>
                <div style={{ display: 'flex', gap: '10px', width: '100%', marginBottom: '15px' }}>
                  <a href="https://cestudioco.gumroad.com/" target="_blank" rel="noreferrer" style={{textDecoration: 'none', flex: 1}}>
                    <button className="luxury-btn" style={{width: '100%', padding: '12px 5px', fontSize: '0.85rem', whiteSpace: 'nowrap'}}>Gumroad</button>
                  </a>
                  <a href="https://superprofile.bio/cechasingelegencein" target="_blank" rel="noreferrer" style={{textDecoration: 'none', flex: 1}}>
                    <button className="luxury-btn" style={{width: '100%', padding: '12px 5px', fontSize: '0.85rem', whiteSpace: 'nowrap'}}>Cosmofeed</button>
                  </a>
                </div>
                <button 
                  className="outline-btn" 
                  style={{width: '100%'}} 
                  onClick={() => {
                    onClose();
                    setTimeout(() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth'}), 300);
                  }}
                >
                  Request Custom Shoot
                </button>
              </div>
            </Page>
          </HTMLFlipBook>
          
          <div style={styles.controls}>
            <button style={styles.navBtn} onClick={() => bookRef.current.pageFlip().flipPrev()}>
              <ChevronLeft size={30} />
            </button>
            <p style={{color: '#a0a0a0', fontFamily: 'Inter', fontSize: '0.9rem', letterSpacing: '2px'}}>SWIPE TO READ</p>
            <button style={styles.navBtn} onClick={() => bookRef.current.pageFlip().flipNext()}>
              <ChevronRight size={30} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(5, 5, 5, 0.95)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvasContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  closeBtn: {
    position: 'absolute',
    top: '30px',
    right: '30px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 10,
    padding: '10px',
  },
  magazineContainer: {
    width: '90%',
    maxWidth: '1000px',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  book: {
    boxShadow: '0 0 50px rgba(255,255,255,0.05)',
  },
  page: {
    backgroundColor: '#111',
    border: '1px solid #222',
  },
  pageContent: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  coverPage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    padding: '40px',
    textAlign: 'center',
    backgroundImage: 'radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)',
  },
  coverTitle: {
    fontSize: '3.5rem',
    color: '#fff',
    letterSpacing: '5px',
    margin: 0,
  },
  coverLine: {
    width: '50px',
    height: '2px',
    backgroundColor: 'var(--accent-color)',
    margin: '30px 0',
  },
  coverSubtitle: {
    fontSize: '1.5rem',
    color: '#ccc',
    fontWeight: 300,
    marginBottom: '50px',
  },
  coverTagline: {
    fontSize: '0.8rem',
    color: '#888',
    letterSpacing: '3px',
    lineHeight: '1.8',
  },
  imagePage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  pageNumber: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: '1.2rem',
    mixBlendMode: 'difference',
  },
  backCover: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    padding: '40px',
  },
  controls: {
    marginTop: '30px',
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  },
  navBtn: {
    background: 'transparent',
    border: '1px solid #333',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }
};

export default LookbookModal;
