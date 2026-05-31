import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const formData = new FormData(e.target);
    
    // Replace YOUR_ACCESS_KEY_HERE with the key the user provides
    formData.append("access_key", "aae6a4f5-e673-4c3d-ae4f-f038ac20da9f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setStatus('Success! We will contact you soon.');
      e.target.reset();
    } else {
      setStatus('Failed to send request. Please try again.');
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={styles.content}
        >
          <h2 style={styles.heading}>Commission a Shoot</h2>
          <p style={styles.text}>Ready to elevate your brand? Share your vision below and let CE STUDIO build your brand presence.</p>
          
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <input type="text" name="name" placeholder="Your Name" style={styles.input} required />
              <input type="email" name="email" placeholder="Email Address" style={styles.input} required />
            </div>
            <input type="text" name="brand" placeholder="Brand Name" style={styles.input} required />
            <textarea name="message" placeholder="Tell us about your collection and vision..." style={{...styles.input, minHeight: '120px'}} required></textarea>
            
            <button type="submit" className="luxury-btn" style={{width: '100%'}}>Send Request</button>
            <p style={{textAlign: 'center', color: 'var(--accent-color)', marginTop: '10px'}}>{status}</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 20px',
    backgroundColor: '#0a0a0a',
    borderTop: '1px solid var(--border-color)',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  content: {
    backgroundColor: 'var(--card-bg)',
    padding: '50px',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '15px',
    textAlign: 'center',
    fontFamily: 'Playfair Display',
  },
  text: {
    color: 'var(--text-secondary)',
    textAlign: 'center',
    marginBottom: '40px',
    letterSpacing: '1px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  input: {
    flex: '1 1 calc(50% - 10px)',
    minWidth: '200px',
    padding: '15px 20px',
    backgroundColor: '#050505',
    border: '1px solid var(--border-color)',
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: '1rem',
    outline: 'none',
  }
};

export default ContactForm;
