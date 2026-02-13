import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import canvasConfetti from 'canvas-confetti';
import { TulipIcon } from './Icons';
import FloatingPetals from './FloatingPetals';

const TULIPS = [
  { id: 1, message: "For your smile.", color: "text-rose-500", fill: "fill-rose-500", rotation: -12, delay: 0 },
  { id: 2, message: "For your kindness.", color: "text-rose-400", fill: "fill-rose-400", rotation: -6, delay: 0.15 },
  { id: 3, message: "For every moment with you.", color: "text-red-500", fill: "fill-red-500", rotation: 0, delay: 0.3, scale: 1.1 }, // Center
  { id: 4, message: "For the love we share.", color: "text-rose-400", fill: "fill-rose-400", rotation: 6, delay: 0.45 },
  { id: 5, message: "For you, Eca.", color: "text-rose-500", fill: "fill-rose-500", rotation: 12, delay: 0.6 }
];

const InteractiveTulip = ({ 
  item, 
  isClicked, 
  isActive,
  onClick,
  showStartHint
}: { 
  item: typeof TULIPS[0]; 
  isClicked: boolean; 
  isActive: boolean;
  onClick: () => void;
  showStartHint?: boolean;
}) => {
  
  // Counter-rotate to keep text horizontal regardless of flower rotation
  const counterRotate = -item.rotation; 

  return (
    <div 
      className="relative flex flex-col items-center justify-end cursor-pointer group select-none tap-highlight-transparent"
      style={{ 
        transform: `rotate(${item.rotation}deg) translateY(${Math.abs(item.rotation * 1.5)}px)`,
        transformOrigin: 'bottom center',
        height: '220px', // Reduced height to keep label closer
        width: '60px',
        zIndex: isActive ? 60 : (isClicked ? 50 : 10) 
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {/* Start Hint - Positioned relative to this tulip container */}
      <AnimatePresence>
        {showStartHint && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute z-[70] pointer-events-none flex flex-col items-center"
            style={{ 
                bottom: '160px', // Just above the 150px flower
                left: '50%',
                transform: `translateX(-50%) rotate(${counterRotate}deg)`, // Center horizontally and counter-rotate
                width: 'max-content'
            }}
          >
            <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm mb-1">
                <p className="text-rose-800 font-serif italic text-sm whitespace-nowrap">
                    Pencet Dari sini
                </p>
            </div>
             {/* Simple Down Arrow */}
             <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-rose-600 animate-bounce drop-shadow-sm"
             >
               <path d="M12 5v14" />
               <path d="M19 12l-7 7-7-7" />
             </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message Bubble - Only visible if isActive */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -20, scale: 1 }} // Closer to flower
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.15 } }}
            className="absolute top-0 w-[160px] flex justify-center z-[100] pointer-events-none"
            style={{ 
                transform: `rotate(${counterRotate}deg)`, 
                transformOrigin: 'bottom center'
            }}
          >
            <div className="bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-rose-100 relative mt-4">
                <p className="text-sm font-medium font-serif text-rose-800 text-center leading-snug">
                   {item.message}
                </p>
                {/* Center Arrow */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-rose-100 transform rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flower SVG */}
      <motion.div
        animate={{ 
          scale: isClicked ? 1.15 : 1,
          y: isClicked ? -15 : [0, -3, 0] 
        }}
        transition={{ 
          y: { duration: 2.5 + item.delay, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.4, type: "spring", stiffness: 200 }
        }}
        className="relative z-20 origin-bottom"
      >
        <svg 
          width="100" 
          height="150" 
          viewBox="0 0 100 150" 
          className={`drop-shadow-sm transition-colors duration-500 ${item.color}`}
          style={{ overflow: 'visible' }}
        >
           {/* Stem */}
           <path d="M50 150 Q 52 100 50 60" stroke="#15803d" strokeWidth="3" fill="none" />
           {/* Leaf */}
           <path d="M50 120 Q 20 100 20 80 Q 50 90 50 120" fill="#16a34a" />

           {/* Petals */}
           <g className={`${item.fill} transition-transform duration-700`}>
             <motion.path 
               d="M50 60 C 20 60 20 10 50 10" 
               animate={{ rotate: isClicked ? -18 : 0, x: isClicked ? -4 : 0 }}
               className="opacity-90 origin-[50px_60px]"
             />
             <motion.path 
               d="M50 60 C 80 60 80 10 50 10" 
               animate={{ rotate: isClicked ? 18 : 0, x: isClicked ? 4 : 0 }}
               className="opacity-90 origin-[50px_60px]"
             />
             <motion.path 
               d="M50 60 C 35 30 35 0 50 0 C 65 0 65 30 50 60" 
               animate={{ scaleY: isClicked ? 1.05 : 1, y: isClicked ? -4 : 0 }}
               className="opacity-100 origin-bottom"
             />
           </g>
        </svg>
      </motion.div>
    </div>
  );
};

const FinalSection: React.FC = () => {
  const [clickedTulips, setClickedTulips] = useState<number[]>([]);
  const [activeTulipId, setActiveTulipId] = useState<number | null>(null);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const handleTulipClick = (id: number) => {
    setActiveTulipId(id); 

    if (!clickedTulips.includes(id)) {
      const newClicked = [...clickedTulips, id];
      setClickedTulips(newClicked);
      
      if (newClicked.length === TULIPS.length) {
        setTimeout(() => {
          setShowFinalMessage(true);
          setActiveTulipId(null); 
          triggerConfetti();
        }, 1200);
      }
    }
  };

  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      canvasConfetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      canvasConfetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[70] bg-rose-50 flex flex-col items-center justify-center overflow-hidden touch-none"
      onClick={() => setActiveTulipId(null)}
    >
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-5 pointer-events-none grid grid-cols-6 gap-8 p-8">
          {Array.from({ length: 30 }).map((_, i) => (
             <div key={i} className="flex justify-center items-center">
                <TulipIcon className="w-12 h-12 text-rose-800" />
             </div>
          ))}
       </div>

       {showFinalMessage && <FloatingPetals zIndex="z-[80]" />}

       {/* Main Container */}
       <div className="z-[90] w-full max-w-lg flex flex-col items-center justify-between h-full p-6 pb-12 relative">
          
          {/* Header Message */}
          <div className="flex-1 flex flex-col items-center justify-center w-full">
            <AnimatePresence mode="wait">
                {!showFinalMessage ? (
                    <motion.div 
                        key="instruction"
                        exit={{ opacity: 0, y: -20 }}
                        className="flex flex-col items-center text-center mt-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-rose-900 mb-2 leading-tight">
                            Eca, this is for you.
                        </h2>
                        {clickedTulips.length > 0 && clickedTulips.length < TULIPS.length && (
                           <p className="text-rose-600/60 uppercase tracking-widest text-xs md:text-sm animate-pulse mt-2">
                              Keep going...
                           </p>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="final"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex flex-col items-center text-center z-[100] mt-10"
                    >
                        <h2 className="text-3xl md:text-6xl font-serif text-rose-900 leading-tight mb-6 whitespace-nowrap drop-shadow-sm">
                            Happy Valentine’s Day, Eca.
                        </h2>
                        <p className="text-rose-700 text-lg md:text-2xl font-light">
                            I’m the luckiest person to have you.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
          </div>

          {/* Bouquet Section - Pushed to bottom */}
          <div className="relative w-full flex justify-center items-end">
             <div className="flex justify-center items-end -space-x-6 md:-space-x-4">
                {TULIPS.map((tulip) => (
                    <InteractiveTulip 
                        key={tulip.id}
                        item={tulip}
                        isClicked={clickedTulips.includes(tulip.id)}
                        isActive={activeTulipId === tulip.id}
                        onClick={() => handleTulipClick(tulip.id)}
                        showStartHint={tulip.id === 1 && clickedTulips.length === 0}
                    />
                ))}
             </div>
          </div>

       </div>
    </motion.div>
  );
};

export default FinalSection;