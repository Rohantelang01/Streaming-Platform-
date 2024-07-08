import React from "react";

const RightArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2" // Use strokeWidth instead of stroke-width
      strokeLinecap="round" // Use strokeLinecap instead of stroke-linecap
      strokeLinejoin="round" // Use strokeLinejoin instead of stroke-linejoin
      className="Arrows"// Use className instead of class
    >
      <line x1="2" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
};

export default RightArrowIcon;
