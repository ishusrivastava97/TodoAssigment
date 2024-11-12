import React from 'react';
import './Card.css';
import UserCard from '../TypeCard/UserCard';
import PriorityCard from '../TypeCard/PriorityCard';
import StatusCard from '../TypeCard/StatusCards';

const Card = ({ ticket, users, groupBy}) => {
    const user = users.find(user => user.id === ticket.userId);
    return (
        <>
                    { (groupBy === 'user' && <UserCard ticket={ticket} users={users} groupBy={groupBy} />)||
                    (groupBy === 'priority' && <PriorityCard ticket={ticket} users={users} groupBy={groupBy} />)||
                    (groupBy === 'status' && <StatusCard ticket={ticket} users={users} groupBy={groupBy} />)
                }
        </>
    );
};

export default Card;
