import { AppContext } from '../../contexts/context'
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import styles from './TicketDetails.module.css'
// import * as ticketsAPI from '../../utilities/tickets-api'

export default function TicketDetail() {
    const { currentTicket, isSelected } = useContext(AppContext)
    return (
        <div className={`${styles.TicketDetailMain}`}>
            
            <div>{currentTicket.email}</div>
            <div>{currentTicket.name}</div>
            <div>{currentTicket.details}</div>
            {isSelected ? <Link to='/user/edit-Ticket'>Edit</Link> : ''}
        </div>
    )
}