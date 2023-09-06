import {AppContext} from '../../contexts/context'
import {useContext} from 'react';
import sendRequest from '../../utilities/send-request'
import * as ticketAPI from '../../utilities/tickets-api'
import styles from './TicketListItem.module.css'

export default function TicketListItem({ticket,param,setCount}) {
    const {currentTicket, setCurrentTicket, isSelected, setIsSelected} = useContext(AppContext)
    console.log(ticket._id)
    const selectTicket = (()=>{
        setCurrentTicket(ticket)
        setIsSelected(true)
    })
    const deleteTicket = async(e, id)=>{
        e.preventDefault()
        try{
            await ticketAPI.deleteTickets(id)
            setCount(prev => prev+1)
        }catch(err){
            console.log('cannot delete')
        }
    }
    console.log('param',param)
    return (
        <div onClick={selectTicket} className={`${styles.TicketListItemMain}`}>
            {/* <form action={`/api/user/tickets/${param}?_method=DELETE`} method='POST'><input type='submit' value='DELETE'/></form> */}
            {/* <form onSubmit={deleteTicket} method='POST'><input type='submit' value='DELETE'/></form> */}
            {/* <div onClick={ticketsAPI.deleteTickets}>Delete</div> */}
            <button onClick={(e)=>deleteTicket(e, ticket._id)}>Delete</button>
            <div>{ticket.ticketTitle}</div>
        </div>
    );
}