import React from 'react';

export const DoodleSun = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2.5" />
    <path d="M12 19.5v2.5" />
    <path d="m4.93 4.93 1.77 1.77" />
    <path d="m17.3 17.3 1.77 1.77" />
    <path d="M2 12h2.5" />
    <path d="M19.5 12h2.5" />
    <path d="m6.7 17.3-1.77 1.77" />
    <path d="m19.07 4.93-1.77 1.77" />
  </svg>
);

export const DoodleMoon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    <path d="M19 4v3" />
    <path d="M17.5 5.5h3" />
  </svg>
);

export const DoodleStar = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 2-2 6.5-6.5 2 6.5 2 2 6.5 2-6.5 6.5-2-6.5-2L12 2Z" />
  </svg>
);

export const DoodlePlant = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 21h10" />
    <path d="M12 21v-9" />
    <path d="M12 12a5 5 0 0 0-6-5c0 4 3.5 5 6 5Z" />
    <path d="M12 10a5 5 0 0 1 6-5c0 4-3.5 5-6 5Z" />
  </svg>
);

export const DoodleTree = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 2-5 7h3l-4 6h5v5h2v-5h5l-4-6h3l-5-7z" />
  </svg>
);

export const DoodleMountain = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    <path d="M4.5 15.5c2.5-1.5 5-1.3 7.5.5 2.5 1.8 5 1.8 7.5.2" />
  </svg>
);

export const DoodleCycling = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="5.5" cy="17.5" r="3.5" />
    <circle cx="18.5" cy="17.5" r="3.5" />
    <path d="M15 6h2l2 4" />
    <path d="M12 17.5V13l3-4-4-3-3 4" />
    <path d="m5.5 17.5 4-7.5h5.5l-3 7.5H5.5z" />
    <path d="M7.5 7.5h3.5" />
  </svg>
);

export const DoodleSwimming = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="18" cy="6" r="1.8" />
    <path d="m5 10 5-2 4 3 4-2" />
    <path d="M2 16.5c2.2 0 3.3-.9 5.5-.9s3.3.9 5.5.9 3.3-.9 5.5-.9 3.3.9 5.5.9" />
    <path d="M2 20.5c2.2 0 3.3-.9 5.5-.9s3.3.9 5.5.9 3.3-.9 5.5-.9 3.3.9 5.5.9" />
  </svg>
);

export const DoodleCoding = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="10" y1="20" x2="14" y2="4" />
  </svg>
);

export const DoodleReading = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z" />
    <path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" />
    <path d="M6 8h3" />
    <path d="M15 8h3" />
  </svg>
);

export const DoodleWriting = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M13 3l8 8-11 11H2v-8L13 3z" />
    <path d="M10 6l8 8" />
    <path d="M2 22l3-3" />
  </svg>
);

export const DoodleDrawing = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="13.5" cy="6.5" r=".7" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".7" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".7" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".7" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9-10-9Z" />
  </svg>
);

export const DoodleMusic = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

export const DoodleCar = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.8C2.1 11 2 11.4 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

export const DoodleBike = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="5" cy="16" r="3" />
    <circle cx="19" cy="16" r="3" />
    <path d="M12 16h2l2-6H8l2 6" />
    <path d="m14 10 2-4h2" />
    <path d="M6 10h4" />
  </svg>
);

export const DoodleMartialArts = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Clean minimal martial arts belt & knot silhouette */}
    <path d="M3 8h18v4H3z" />
    <rect x="10" y="7" width="4" height="6" rx="1" />
    <path d="M10.5 13v7l2.5-2-1.5-5" />
    <path d="M13.5 13v8l-2.5-2 1.5-6" />
    <path d="M7 8V4l5 2 5-2v4" />
  </svg>
);

export const DoodleNature = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 20A7 7 0 0 1 4 13C4 6 11 3 20 3c0 9-3 17-9 17Z" />
    <path d="M4 13c7 0 10 3 10 7" />
  </svg>
);
