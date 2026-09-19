import React from 'react';

export const DoodleCode: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-6',
  color = 'currentColor'
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block select-none ${className}`}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const DoodleSparkle: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-5 h-5',
  color = '#FDD657'
}) => (
  <svg
    viewBox="0 0 24 24"
    fill={color}
    className={`inline-block select-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C12.5 6 18 11.5 24 12C18 12.5 12.5 18 12 24C11.5 18 6 12.5 0 12C6 11.5 11.5 6 12 0Z" />
  </svg>
);

export const DoodleStar: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-6',
  color = '#111111'
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block select-none ${className}`}
  >
    <path d="M12 2L14.4 8.6L21.5 9.2L16.2 13.8L17.8 20.8L12 17.2L6.2 20.8L7.8 13.8L2.5 9.2L9.6 8.6L12 2Z" />
  </svg>
);

export const DoodleUnderline: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-full h-3',
  color = '#FDD657'
}) => (
  <svg
    viewBox="0 0 280 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
    preserveAspectRatio="none"
  >
    <path
      d="M3 11.5C50 4 150 2.5 277 12.5C210 6 100 7.5 18 14"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const DoodleSquiggle: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-24 h-4',
  color = '#E95755'
}) => (
  <svg
    viewBox="0 0 100 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
  >
    <path
      d="M2 10 Q 15 2, 28 10 T 54 10 T 80 10 T 98 10"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

export const DoodleArrow: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-16 h-12',
  color = '#111111'
}) => (
  <svg
    viewBox="0 0 70 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
  >
    <path
      d="M5 42C15 28 35 15 58 18C52 14 46 8 44 2M58 18L52 26"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DoodleSmiley: React.FC<{ className?: string; color?: string; fill?: string }> = ({
  className = 'w-7 h-7',
  color = '#111111',
  fill = '#FDD657'
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block select-none ${className}`}
  >
    <circle cx="16" cy="16" r="14" fill={fill} stroke={color} strokeWidth="2.2" />
    <circle cx="11.5" cy="12.5" r="1.8" fill={color} />
    <circle cx="20.5" cy="12.5" r="1.8" fill={color} />
    <path
      d="M10 18.5C11.5 22 20.5 22 22 18.5"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

export const DoodleHeart: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-6',
  color = '#E95755'
}) => (
  <svg
    viewBox="0 0 24 24"
    fill={color}
    stroke="#111111"
    strokeWidth="1.5"
    className={`inline-block select-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const DoodleSpiderman: React.FC<{ className?: string }> = ({
  className = ''
}) => (
  <div className={`flex flex-col items-center ${className} origin-top doodle-swing`}>
    <div className="w-[1.5px] h-32 bg-black/30"></div>
    <div className="text-4xl rotate-180 -mt-1 select-none drop-shadow-sm">🦸‍♂️</div>
  </div>
);

export const DoodleLightning: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-8 h-8',
  color = '#FDD657'
}) => (
  <svg
    viewBox="0 0 24 24"
    fill={color}
    stroke="#111111"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block select-none ${className}`}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const DoodlePlanet: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-10 h-10',
  color = '#8A63F2'
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#111111"
    strokeWidth="1.5"
    className={`inline-block select-none ${className}`}
  >
    <circle cx="12" cy="12" r="8" fill={color} opacity="0.8" />
    <ellipse cx="12" cy="12" rx="12" ry="4" transform="rotate(-20 12 12)" stroke="#111111" strokeWidth="1.5" fill="none" />
  </svg>
);

export const DoodleCrown: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-8 h-8',
  color = '#FDD657'
}) => (
  <svg
    viewBox="0 0 24 24"
    fill={color}
    stroke="#111111"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block select-none ${className}`}
  >
    <polygon points="2 20 22 20 19 4 15 10 12 3 9 10 5 4 2 20" />
  </svg>
);

export const DoodleWeb: React.FC<{ className?: string }> = ({
  className = 'w-12 h-12'
}) => (
  <div className={`text-5xl opacity-40 select-none ${className}`}>
    🕸️
  </div>
);

