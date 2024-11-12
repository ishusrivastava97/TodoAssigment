import React from 'react';

const SelectByGroup = ({ groupBy, setGroupBy, setIsOpen }) => (
    <select value={groupBy} onChange={(e) => (
        setIsOpen(false), setGroupBy(e.target.value))} style={{ width: '100px', paddingRight: '20px', padding: '2px', borderRadius: '5px' }} >
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
    </select>
);

export default SelectByGroup;
