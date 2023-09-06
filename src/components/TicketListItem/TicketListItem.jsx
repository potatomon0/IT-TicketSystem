import {AppContext} from '../../contexts/context'
import {useContext} from 'react';
import sendRequest from '../../utilities/send-request'
import * as ticketAPI from '../../utilities/tickets-api'
import styles from './TicketListItem.module.css'

export default function TicketListItem({ticket,param}) {
    const {currentTicket, setCurrentTicket, isSelected, setIsSelected} = useContext(AppContext)
    const selectTicket = (()=>{
        setCurrentTicket(ticket)
        setIsSelected(true)
    })
    const deleteTicket = async()=>{
        try{
            await ticketAPI.deleteTickets(currentTicket)
        }catch(err){
            console.log('cannot delete')
        }
    }
    console.log('param',param)
    return (
        <div onClick={selectTicket} className={`${styles.TicketListItemMain}`}>
            {/* <form action={`/api/user/tickets/${param}?_method=DELETE`} method='POST'><input type='submit' value='DELETE'/></form> */}
            <form onSubmit={deleteTicket} method='POST'><input type='submit' value='DELETE'/></form>
            {/* <div onClick={ticketsAPI.deleteTickets}>Delete</div> */}
            <div>{ticket.ticketTitle}</div>
        </div>
    );
}