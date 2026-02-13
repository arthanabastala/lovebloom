import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OpeningProps {
  onComplete: () => void;
}

const Opening: React.FC<OpeningProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // Step 0: "Hi Eca..."
      await new Promise(r => setTimeout(r, 1000));
      setStep(1);
      
      // Step 1: "I made something just for you."
      await new Promise(r => setTimeout(r, 2500));
      setStep(2);

      // Step 2: "Click anywhere."
      await new Promise(r => setTimeout(r, 2500));
      setStep(3);
    };
    sequence();
  }, []);

  return (
    <div 
      onClick={() => { if (step >= 1) onComplete(); }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-rose-900 to-rose-950 text-rose-100 cursor-pointer overflow-hidden"
    >
        {/* Subtle background pulse */}
        <div className="absolute inset-0 bg-rose-800/20 animate-pulse pointer-events-none" />

        <div className="z-10 text-center px-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.h1
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-serif tracking-wide text-rose-100"
              >
                Hi Eca...
              </motion.h1>
            )}
            {step === 2 && (
              <motion.h1
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-5xl font-serif tracking-wide text-rose-100"
              >
                I made something <br/> just for you.
              </motion.h1>
            )}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col items-center"
              >
                 <h1 className="text-3xl md:text-5xl font-serif tracking-wide text-rose-100 mb-8">
                    For you, Elsa.
                 </h1>
                 <p className="text-sm uppercase tracking-widest opacity-70 animate-bounce mt-8">
                    Click anywhere to begin
                 </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
    </div>
  );
};

export default Opening;