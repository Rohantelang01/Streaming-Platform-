import React, { useState } from 'react';
import SortIcun from '../../svg icuns/SortIcun.jsx';
import CloseIcun from '../../svg icuns/CloseIcun.jsx';
import './SortNavbar.css';

const SortNavbar = ({ onSortChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSortTypes = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="Navbar">
      <div className="sortTypes" style={{ height: isExpanded ? '400px' : '50px' }}>
        <div className="SortIcunCtr" onClick={toggleSortTypes}>
          {isExpanded ? <CloseIcun /> : <SortIcun />}
        </div>
        <ul>
          <li onClick={() => onSortChange('date')}>Sort By Date</li>
          <li onClick={() => onSortChange('alphabet')}>Sort By Alphabet</li>
          <li onClick={() => onSortChange('rating')}>Most Rated</li>
          <li onClick={() => onSortChange('popularity')}>Most Popular</li>
        </ul>
      </div>
    </div>
  );
};

export default SortNavbar;
