import React from "react";

const CloseIcun = ({ color }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="closeIcun" // Use className instead of class
    >
      <g id="Menu / Close_SM">
        <path
          className="closeIcunPath" // Use className instead of class
          id="Vector"
          d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
          stroke={color || "blue"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default CloseIcun;
