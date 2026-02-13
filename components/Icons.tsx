import React from 'react';

export const TulipIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C13.5 4 16 6 16 9C16 11.5 14 13 12 13C10 13 8 11.5 8 9C8 6 10.5 4 12 2ZM12 13V22M12 16C9 16 6 14 6 18M12 16C15 16 18 14 18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export const StrawberryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.5 8C3.5 9.5 2 12 3 15C4 18 7.5 21 12 22C16.5 21 20 18 21 15C22 12 20.5 9.5 18.5 8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22V12" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 12L8 4M12 12L16 4M12 12V2" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="14" r="0.5" fill="currentColor" />
    <circle cx="15" cy="14" r="0.5" fill="currentColor" />
    <circle cx="12" cy="17" r="0.5" fill="currentColor" />
  </svg>
);
