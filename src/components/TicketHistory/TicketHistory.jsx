import TicketListItem from '../TicketListItem/TicketListItem'
import {useState} from 'react';


export default function TicketHistory({tickets}) {
    const ticketItems = tickets.map(t=>
        <TicketListItem ticket={t}
        />)

        return (
            <main>
                {/* {console.log(ticketItems)} */}
                {ticketItems.length ?
                    ticketItems
                    :
                    <span>No Previous Tickets</span>
                }
            </main>
        );
}