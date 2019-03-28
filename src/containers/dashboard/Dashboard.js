import React, { Component } from 'react';
import axios from 'axios';

import Ticket from '../../components/ticket/ticket';
import './Dashboard.css'

class dashbord extends Component {

    state = {
        tickets: []
    }

    componentDidMount = async () => {
        try {
            const res = await axios.get(localStorage.getItem('url') + '/apirest.php/ticket',  {
                headers: {
                    'Session-Token' : localStorage.getItem('token')
                }
            })
    
            this.setState({ tickets: res.data });
        } catch (error) {
            console.error(error);
        }
    }  

    render() {

        const tickets = this.state.tickets.map( ticket =>{
            return <Ticket 
                key={ticket.id} 
                name={ticket.name} 
                date={ticket.date}
                content={ticket.content}
                />
        });
        return(
            <div className='Dashboard'>               
                {tickets}                              
            </div>
        );
    }
}

export default dashbord;