import React, { useState } from 'react';
import './Dropdown.css';
import SelectByGroup from '../SelectByGroup';
import SelectBySorting from '../SelectBySorting';

const Dropdown = ({ options, placeholder ,groupBy, setGroupBy, sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Handle selecting an option
//   const handleSelect = (option) => {
//     setSelected(option);
//     setIsOpen(false); // Close dropdown after selecting
//   };

  return (
    <div className="dropdown">
      
      <div className="dropdown-header" onClick={handleToggle}>
        <img src="/icons_FEtask/Display.svg" alt="Display SVG" width="30" />
        {selected ? selected.label : placeholder}
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}><img src="/icons_FEtask/down.svg" alt="Display SVG" width="30" /></span>
      </div>

      
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option.value}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
                <div className='section1' >Grouping
                <div className='selections-w' ><SelectByGroup groupBy={groupBy} setGroupBy={setGroupBy} setIsOpen={setIsOpen}/></div>     
                </div>
                <div className='section1' >
                    Ordering
                    <SelectBySorting sortBy={sortBy} setSortBy={setSortBy} setIsOpen={setIsOpen}/>
                </div>
                
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
