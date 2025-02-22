import React from 'react';

interface StakdLogoProps {
  className?: string;
}

const StakdLogo: React.FC<StakdLogoProps> = ({ className = "w-6 h-6" }) => (
  <img 
    src="https://insiderinbox.co/wp-content/uploads/2025/02/S-favicon-Stakd.svg"
    alt="Stakd Logo"
    className={className}
    loading="lazy"
    decoding="async"
    style={{ imageRendering: 'crisp-edges' }}
  />
);

export default StakdLogo;