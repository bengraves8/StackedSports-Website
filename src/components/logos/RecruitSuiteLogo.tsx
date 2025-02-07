import React from 'react';

interface RecruitSuiteLogoProps {
  className?: string;
}

const RecruitSuiteLogo: React.FC<RecruitSuiteLogoProps> = ({ className = "w-6 h-6" }) => (
  <img 
    src="https://insiderinbox.co/wp-content/uploads/2025/02/RS-favicon-3-logo.svg"
    alt="RecruitSuite Logo"
    className={className}
  />
);

export default RecruitSuiteLogo;