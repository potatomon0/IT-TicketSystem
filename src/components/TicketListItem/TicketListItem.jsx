import {AppContext} from '../../contexts/context'
import {useContext} from 'react';


export default function TicketListItem({ticket}) {
    const {currentTicket, setCurrentTicket} = useContext(AppContext)
    {console.log(currentTicket)}
    return (
        <div onClick={() => setCurrentTicket(ticket)}>
            <div>{ticket.ticketTitle}</div>
        </div>
    );
}