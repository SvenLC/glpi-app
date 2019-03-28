import React from 'react';

import './ticket.css'

const ticket = (props) => (
    <div className="Ticket">
        <h1>{props.name}</h1>
        <div>
            <p>{props.content}</p>
            {props.date}
        </div>
    </div>
);

export default ticket;