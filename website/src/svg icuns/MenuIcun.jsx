import React from 'react';
export const MenuIcon = ({color}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="menuIcun"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="menuIcunPath"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6H21V8H3V6ZM3 12H21V14H3V12ZM3 18H21V20H3V18Z"
        fill={color||"black"}
      />
    </svg>
  );
};



// export const searchIcun = () => {
//   return (
//     <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="white"
//     stroke-width="2"
//     stroke-linecap="round"
//     stroke-linejoin="round"
//   >
//     <circle cx="11" cy="11" r="8"></circle>
//     <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//   </svg>
  
//   )
// }

