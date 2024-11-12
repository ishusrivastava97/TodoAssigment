import React from 'react';
import './UserCard.css';


const UserCard = ({ ticket, users, groupBy}) => {
    const user = users.find(user => user.id === ticket.userId);
    return (
        <div className="ticket-card">
            <h3 className='top-card' >{ticket.id}</h3>{}
            <div className='mid-card' >
            {ticket.status === 'Backlog' && <img className='img-style' src="/icons_FEtask/Backlog.svg" alt="Display SVG"  />}
            {ticket.status === 'Cancelled' && <img className='img-style' src="/icons_FEtask/Cancelled.svg" alt="Display SVG"  />}
            {ticket.status === 'Done' && <img className='img-style' src="/icons_FEtask/Done.svg" alt="Display SVG"  />}
            {ticket.status === 'Todo' && <img className='img-style' src="/icons_FEtask/To-do.svg" alt="Display SVG"  />}
            {ticket.status === 'In progress' && <img className='img-style' src="/icons_FEtask/in-progress.svg" alt="Display SVG"  />}
            <h4 className='title' >{ticket.title}</h4>{}
            </div>
            <div className='bottom-card' >
            {ticket.priority === 0 && <img  className='img-style' src="/icons_FEtask/No-priority.svg" alt="Display SVG"  />}
            {ticket.priority === 1 && <img className='img-style' src="/icons_FEtask/Img - Low Priority.svg" alt="Display SVG"  />}            
            {ticket.priority === 2 && <img className='img-style' src="/icons_FEtask/Img - Medium Priority.svg" alt="Display SVG"  />}
            {ticket.priority === 3 && <img className='img-style' src="/icons_FEtask/Img - High Priority.svg" alt="Display SVG"  />}
            {ticket.priority === 4 && <img className='img-style' src="/icons_FEtask/SVG - Urgent Priority grey.svg" alt="Display SVG"  />}
            <p className='assigned-to' >⚪  {ticket.tag[0]}</p>{}
            </div>
    
        </div>
    );
};

export default UserCard;
