import { AppContext } from '../../contexts/context'
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import styles from './TicketDetails.module.css'
import EditTicket from '../EditTicket/EditTicket'
// import * as ticketsAPI from '../../utilities/tickets-api'

export default function TicketDetail() {
    const { currentTicket } = useContext(AppContext)
    return (
        <div className={`${styles.TicketDetailMain}`}>
            <Link to='/user/edit-Ticket'>Edit</Link>
            {/* {currentTicket ? <EditTicket /> : ""} */}
            <div>{currentTicket.email}</div>
            <div>{currentTicket.name}</div>
            <div>{currentTicket.details}</div>
        </div>
    )
}