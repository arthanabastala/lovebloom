import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SurpriseProps {
  onOpen: () => void;
}

const Surprise: React.FC<SurpriseProps> = ({ onOpen }) => {
  return (
    <section className="py-32 flex flex-col items-center justify-center text-center px-6 relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Sparkles className="w-96 h-96 text-rose-500" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <button
          onClick={onOpen}
          className="group relative px-10 py-5 bg-white border border-rose-200 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <div className="absolute inset-0 rounded-full bg-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10 text-xl md:text-2xl font-serif text-rose-800 flex items-center gap-3">
             <Sparkles size={20} className="text-yellow-600" />
             One More Thing, Eca...
             <Sparkles size={20} className="text-yellow-600" />
          </span>
        </button>
        <p className="mt-6 text-rose-800/60 text-sm tracking-widest uppercase">
            A small collection of us
        </p>
      </motion.div>
    </section>
  );
};

export default Surprise;