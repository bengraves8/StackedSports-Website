import React from 'react';

interface InsiderInboxLogoProps {
  className?: string;
}

const InsiderInboxLogo: React.FC<InsiderInboxLogoProps> = ({ className = "w-6 h-6" }) => (
  <img 
    src="https://insiderinbox.co/wp-content/uploads/2025/02/IN-favicon.svg"
    alt="Insider Inbox Logo"
    className={className}
    loading="lazy"
    decoding="async"
    style={{ imageRendering: 'crisp-edges' }}
  />
);

export default InsiderInboxLogo;