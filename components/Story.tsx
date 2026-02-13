import React from 'react';
import { motion } from 'framer-motion';
import { STORY_BLOCKS } from '../constants';
import { TulipIcon, StrawberryIcon } from './Icons';

const Story: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto space-y-32">
      {STORY_BLOCKS.map((block, index) => (
        <motion.div
          key={block.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 relative`}
        >
          {/* Decorative Icons */}
          <div className="absolute -z-10 opacity-10 text-rose-400 transform -rotate-12 scale-150 top-0 -left-10">
            {index % 2 === 0 ? <TulipIcon className="w-32 h-32" /> : <StrawberryIcon className="w-32 h-32" />}
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-rose-200 rounded-2xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
              <img 
                src={block.image} 
                alt={block.title} 
                className="relative z-10 w-full h-80 md:h-[400px] object-cover rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-rose-900 mb-6 relative inline-block">
              {block.title}
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-rose-300/50 rounded-full"></span>
            </h2>
            <p className="text-lg text-rose-800/80 leading-relaxed font-light">
              {block.content}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Story;