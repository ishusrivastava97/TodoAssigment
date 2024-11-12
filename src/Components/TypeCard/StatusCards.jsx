import React from 'react';
import './StatusCards.css';


const StatusCard = ({ ticket, users, groupBy}) => {
    const user = users.find(user => user.id === ticket.userId);
    return (
        <div className="ticket-card">
            <div className='top-card' >
            <h3>{ticket.id}</h3>{}
            {user.name==='Anoop sharma'&& <img src="/icons_FEtask/person1.jpg" alt="Display SVG" style={{ borderRadius: '50%', height: '50px', width: '50px' } } />}
            {user.name==='Yogesh'&& <img src="/icons_FEtask/person2.jpg" alt="Display SVG" style={{ borderRadius: '50%', height: '50px', width: '50px' } } />}
            {user.name==='Suresh'&& <img src="/icons_FEtask/person3.jpg" alt="Display SVG" style={{ borderRadius: '50%', height: '50px', width: '50px' } } />}
            {user.name==='Shankar Kumar'&& <img src="/icons_FEtask/person4.jpg" alt="Display SVG" style={{ borderRadius: '50%', height: '50px', width: '50px' } } />}
            {user.name==='Ramesh'&& <img src="/icons_FEtask/person5.jpg" alt="Display SVG" style={{ borderRadius: '50%', height: '50px', width: '50px' } } />}
            </div>
            <h4 className='title' >{ticket.title}</h4>{}
            <div className='bottom-card' >
            {ticket.priority === 0 && <img className='img-style' src="/icons_FEtask/No-priority.svg" alt="Display SVG"  />}
            {ticket.priority === 1 && <img className='img-style' src="/icons_FEtask/Img - Low Priority.svg" alt="Display SVG"  />}            
            {ticket.priority === 2 && <img className='img-style' src="/icons_FEtask/Img - Medium Priority.svg" alt="Display SVG"  />}
            {ticket.priority === 3 && <img className='img-style' src="/icons_FEtask/Img - High Priority.svg" alt="Display SVG"  />}
            {ticket.priority === 4 && <img className='img-style' src="/icons_FEtask/SVG - Urgent Priority grey.svg" alt="Display SVG"  />}
            
            <p className='assigned-to' >⚪ {ticket.tag[0]}</p>{}
            </div>
            
            {}
            
        </div>
    );
};

export default StatusCard;
