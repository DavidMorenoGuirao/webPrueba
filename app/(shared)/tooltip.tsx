"use client";
// Tooltip.tsx
import React, { useState, ReactNode } from "react";

type TooltipProps = {
  children: ReactNode;
  tooltipText: string;
};

const Tooltip: React.FC<TooltipProps> = ({ children, tooltipText }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (ev: React.MouseEvent) => {
    setMousePosition({ x: ev.clientX - 50, y: ev.clientY - 50 });
  };

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onMouseMove={updateMousePosition}
    >
      {children}
      {showTooltip && (
        <div
          style={{ top: mousePosition.y, left: mousePosition.x }}
          className="absolute z-10 p-2 rounded-md bg-gray-200 text-gray-700 text-sm max-w-xs transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
