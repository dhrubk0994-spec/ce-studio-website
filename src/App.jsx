import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Collage from './components/Collage';
import LookbookModal from './components/LookbookModal';
import ContactForm from './components/ContactForm';
import './index.css'; // Make sure styles are imported

function App() {
  const [selectedCollection, setSelectedCollection] = useState(null);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Collage onSelectCollection={setSelectedCollection} />
      <ContactForm />
      
      {selectedCollection && (
        <LookbookModal 
          collection={selectedCollection} 
          onClose={() => setSelectedCollection(null)} 
        />
      )}
    </div>
  );
}

export default App;
