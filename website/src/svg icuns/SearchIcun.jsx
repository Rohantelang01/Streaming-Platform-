import React from "react";

const SearchIcun = () => {
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
      className="searchIcun" // Use className instead of class
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
};

export default SearchIcun;
