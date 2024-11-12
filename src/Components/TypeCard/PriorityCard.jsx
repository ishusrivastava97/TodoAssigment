import React from 'react';
import './PriorityCard.css';


const PriorityCard = ({ ticket, users, groupBy}) => {
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
            <div className='mid-card' >
            {ticket.status === 'Backlog' && <img className='img-style' src="/icons_FEtask/Backlog.svg" alt="Display SVG"  />}
            {ticket.status === 'Cancelled' && <img className='img-style' src="/icons_FEtask/Cancelled.svg" alt="Display SVG"  />}
            {ticket.status === 'Done' && <img className='img-style' src="/icons_FEtask/Done.svg" alt="Display SVG"  />}
            {ticket.status === 'Todo' && <img className='img-style' src="/icons_FEtask/To-do.svg" alt="Display SVG"  />}
            {ticket.status === 'In progress' && <img className='img-style' src="/icons_FEtask/in-progress.svg" alt="Display SVG"  />}
            <h4 className='title' >{ticket.title}</h4>{}
            </div>
            <div className='bottom-card' >
            <span className='assigned-to' >⚪ {ticket.tag[0]}</span>
            </div>
        </div>
    );
};

export default PriorityCard;
