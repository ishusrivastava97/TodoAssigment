import React from 'react';

const SelectBySorting = ({ sortBy, setSortBy,setIsOpen}) => (
    <select   value={sortBy} onChange={(e) => (setIsOpen(false),
        setSortBy(e.target.value))}  style={{ width: '100px', paddingRight: '20px', padding: '2px', borderRadius: '5px' }}>
        <option  value="priority">Priority</option>
        <option  value="title">Title</option>
    </select>
);

export default SelectBySorting;
