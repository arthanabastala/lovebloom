import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Gift } from 'lucide-react';
import { GALLERY_PHOTOS } from '../constants';

interface SlideshowModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const SlideshowModal: React.FC<SlideshowModalProps> = ({ isOpen, onClose, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto slide
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isOpen && isAutoPlaying) {
      interval = setInterval(() => {
        if (currentIndex < GALLERY_PHOTOS.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setIsAutoPlaying(false);
        }
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isOpen, isAutoPlaying, currentIndex]);

  // Handle body overflow to prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoPlaying(false);
    if (currentIndex < GALLERY_PHOTOS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoPlaying(false);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  if (!isOpen) return null;

  const currentPhoto = GALLERY_PHOTOS[currentIndex];
  const isLastSlide = currentIndex === GALLERY_PHOTOS.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-[100vh] z-[60] bg-black flex flex-col items-center justify-center overflow-hidden touch-none"
    >
      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 md:top-6 md:right-6 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors z-[70] backdrop-blur-md"
      >
        <X size={24} />
      </button>

      {/* Main Content Area */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button 
            onClick={handlePrev}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/50 text-white z-[65] transition-all backdrop-blur-sm"
          >
            <ChevronLeft size={32} />
          </button>
        )}
        
        {currentIndex < GALLERY_PHOTOS.length - 1 && (
          <button 
            onClick={handleNext}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/50 text-white z-[65] transition-all backdrop-blur-sm"
          >
            <ChevronRight size={32} />
          </button>
        )}

        {/* Image Container */}
        <AnimatePresence mode="wait">
             <motion.div
                 key={currentIndex}
                 className="absolute inset-0 flex items-center justify-center w-full h-full"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.5 }}
              >
                 <img 
                   src={currentPhoto.url} 
                   alt={currentPhoto.caption}
                   className="w-full h-full object-contain"
                   style={{ maxHeight: '100vh', maxWidth: '100vw' }}
                 />
                 
                 {/* Last Slide Overlay */}
                 {isLastSlide && (
                    <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.8 }}
                          className="text-center px-6 max-w-lg"
                        >
                           <h2 className="text-2xl md:text-4xl font-serif leading-tight mb-8 text-white drop-shadow-xl">
                             And I can't wait to create more memories with you.
                           </h2>
                           
                           <motion.button
                             whileHover={{ scale: 1.05 }}
                             whileTap={{ scale: 0.95 }}
                             onClick={(e) => {
                               e.stopPropagation();
                               onComplete();
                             }}
                             className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white text-lg rounded-full shadow-lg transition-all font-serif flex items-center gap-2 mx-auto animate-pulse"
                           >
                             <span>Open Gift</span>
                             <Gift size={20} />
                           </motion.button>
                        </motion.div>
                    </div>
                 )}
              </motion.div>
        </AnimatePresence>

        {/* Bottom Overlay: Caption & Dots */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pt-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col items-center justify-end z-[65] pointer-events-none">
           <AnimatePresence mode="wait">
             <motion.p 
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-lg md:text-xl font-light italic text-white/90 mb-6 text-center max-w-2xl px-4 drop-shadow-md"
             >
               "{currentPhoto.caption}"
             </motion.p>
          </AnimatePresence>
          
          <div className="flex gap-2 pointer-events-auto">
            {GALLERY_PHOTOS.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                    setIsAutoPlaying(false);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'}`}
              />
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default SlideshowModal;