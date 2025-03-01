"use client"

import React from 'react';

interface ChipProps {
  className?: string;
  label: string;
}

const Chip: React.FC<ChipProps> = ({ className, label }) => {
  return (
    <div className={`bg-blue-500 text-white rounded-full px-4 py-2 ${className}`}>  
      {label}  
    </div>
  );
};

export default Chip;
