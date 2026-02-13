import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Opening from './components/Opening';
import FloatingPetals from './components/FloatingPetals';
import MusicPlayer from './components/MusicPlayer';
import Story from './components/Story';
import Surprise from './components/Surprise';
import SlideshowModal from './components/SlideshowModal';
import FinalSection from './components/FinalSection';

function App() {
  const [openingComplete, setOpeningComplete] = useState(false);
  const [startMusic, setStartMusic] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showProposal, setShowProposal] = useState(false);

  // Prevent scroll during opening, slideshow, or when proposal is shown
  useEffect(() => {
    if (!openingComplete || showProposal || showGallery) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openingComplete, showProposal, showGallery]);

  const handleOpeningComplete = () => {
    setOpeningComplete(true);
    setStartMusic(true);
    // Smooth scroll to top of story section after a tiny delay to allow unmount
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleSlideshowComplete = () => {
    setShowGallery(false);
    setShowProposal(true);
  };

  return (
    <div className="relative min-h-screen bg-rose-50">
      
      {/* Background Ambience - Always present until proposal covers it */}
      <FloatingPetals />
      
      {/* Music - starts after opening interaction */}
      <MusicPlayer shouldPlay={startMusic} />

      {/* Opening Sequence (Overlay) */}
      <AnimatePresence>
        {!openingComplete && (
          <Opening onComplete={handleOpeningComplete} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div 
        className={`transition-opacity duration-1000 ${openingComplete ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
      >
        <header className="h-screen flex items-center justify-center text-center px-4">
           <div>
             <h1 className="text-5xl md:text-7xl font-serif text-rose-900 mb-6">Our Story</h1>
             <p className="text-rose-700 uppercase tracking-widest text-sm animate-pulse">Scroll Down</p>
           </div>
        </header>

        <Story />
        
        <Surprise onOpen={() => setShowGallery(true)} />
        
        <footer className="py-20 text-center text-rose-300 text-sm">
           Made with love for Elsa
        </footer>
      </div>

      {/* Modal */}
      <SlideshowModal 
        isOpen={showGallery} 
        onClose={() => setShowGallery(false)} 
        onComplete={handleSlideshowComplete}
      />

      {/* Final Proposal "New Page" Overlay */}
      <AnimatePresence>
        {showProposal && <FinalSection />}
      </AnimatePresence>

    </div>
  );
}

export default App;