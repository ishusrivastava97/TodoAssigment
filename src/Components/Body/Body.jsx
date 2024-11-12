import React from 'react';
import './Body.css';
import Card from '../Card/Card';


const ALL_STATUSES = ['Todo', 'In progress', 'Done', 'Cancelled', 'Backlog'];


const statusIcons = {
    'Todo': '/icons_FEtask/To-do.svg',
    'In progress': '/icons_FEtask/in-progress.svg',
    'Done': '/icons_FEtask/Done.svg',
    'Cancelled': '/icons_FEtask/Cancelled.svg',
    'Backlog': '/icons_FEtask/Backlog.svg',
};


const userImages = {
    'Anoop Sharma': '/icons_FEtask/person1.jpg',
    'Yogesh': '/icons_FEtask/person2.jpg',
    'Suresh': '/icons_FEtask/person3.jpg',
    'Shankar Kumar': '/icons_FEtask/person4.jpg',
    'Ramesh': '/icons_FEtask/person5.jpg',
};


const priorityIcons = {
    0: '/icons_FEtask/No-priority.svg',
    1: '/icons_FEtask/Img - Low Priority.svg',
    2: '/icons_FEtask/Img - Medium Priority.svg',
    3: '/icons_FEtask/Img - High Priority.svg',
    4: '/icons_FEtask/SVG - Urgent Priority grey.svg',
};


const priorityLabels = {
    0: 'No Priority',
    1: 'Low Priority',
    2: 'Medium Priority',
    3: 'High Priority',
    4: 'Urgent Priority'
};


const groupTickets = (tickets, groupBy, users) => {
    const grouped = {};

    if (groupBy === 'status') {
        
        ALL_STATUSES.forEach(status => {
            grouped[status] = [];
        });
    } else if (groupBy === 'priority') {
        
        Object.keys(priorityIcons).forEach(priority => {
            grouped[priority] = [];
        });
    }

    tickets.forEach(ticket => {
        let key = '';
        switch (groupBy) {
            case 'user':
                const user = users.find(u => u.id === ticket.userId);
                key = user ? user.name : 'Unassigned';
                break;
            case 'priority':
                key = ticket.priority;
                break;
            case 'status':
            default:
                key = ticket.status;
                break;
        }
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(ticket);
    });
    return grouped;
};

const Body = ({ tickets, users, groupBy, sortBy }) => {
    const groupedTickets = groupTickets(tickets, groupBy, users);

    const sortedTickets = (group) => {
        return [...group].sort((a, b) => {
            if (sortBy === 'priority') return b.priority - a.priority;
            return a.title.localeCompare(b.title);
        });
    };

    return (
        <div className="kanban-board">
            {Object.entries(groupedTickets).map(([group, groupTickets]) => {
                let headerContent;

                
                if (groupBy === 'user') {
                    const userImage = userImages[group];
                    headerContent = (
                        <>
                            {userImage && (
                                <img
                                    src={userImage}
                                    alt={`${group} profile`}
                                    style={{ borderRadius: '50%', height: '50px', width: '50px', marginRight: '10px' }}
                                />
                            )}
                            {group}
                        </>
                    );
                } else if (groupBy === 'status') {
                    headerContent = (
                        <>
                            {statusIcons[group] && (
                                <img
                                    src={statusIcons[group]}
                                    alt={`${group} icon`}
                                    className="status-icon"
                                />
                            )}
                            {group}

                        </>
                    );
                } else if (groupBy === 'priority') {
                    const priorityIcon = priorityIcons[group];
                    headerContent = (
                        <>
                            {priorityIcon && (
                                <img
                                    src={priorityIcon}
                                    alt={`${priorityLabels[group]} icon`}
                                    style={{ height: '20px', width: '20px', marginRight: '10px' }}
                                />
                            )}
                            
                            {priorityLabels[group]}
                            
                        </>
                    );
                }

                return (
                    <div className="kanban-column" key={group}>
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between" }} ><h3>{headerContent }   {groupTickets.length} </h3>  
                           <div style={{ display: "flex", alignItems: "center",   }}>
                            <img src="/icons_FEtask/add.svg" alt="" style={{ marginLeft: "10px" }} />
                            <img src="/icons_FEtask/3 dot menu.svg" alt="" style={{ marginLeft: "10px" }} />
                           </div> 
                          </div>
                        </div>
                        {sortedTickets(groupTickets).map(ticket => (
                            <Card key={ticket.id} ticket={ticket} users={users} groupBy={groupBy} />
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default Body;
