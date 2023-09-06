import {AppContext} from '../../contexts/context'
import {useContext} from 'react';
import sendRequest from '../../utilities/send-request'
import * as ticketsAPI from '../../utilities/tickets-api'
import styles from './TicketListItem.module.css'

export default function TicketListItem({ticket,param}) {
    const {currentTicket, setCurrentTicket} = useContext(AppContext)
    console.log('param',param)
    return (
        <div onClick={() => setCurrentTicket(ticket)} className={`${styles.TicketListItemMain}`}>
            {/* <form action={`/api/user/tickets/${param}?_method=DELETE`} method='POST'><input type='submit' value='DELETE'/></form> */}
            <form action={`/api/user/tickets/${ticket._id}?_method=DELETE`} method='POST'><input type='submit' value='DELETE'/></form>
            {/* <div onClick={ticketsAPI.deleteTickets}>Delete</div> */}
            <div>{ticket.ticketTitle}</div>
        </div>
    );
}