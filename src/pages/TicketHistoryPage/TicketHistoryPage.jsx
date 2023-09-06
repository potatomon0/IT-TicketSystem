// import { checkToken } from '../../utilities/users-service'
import React, { useState, useEffect, useContext } from 'react';
// import * as ticketsAPI from '../../utilities/tickets-api'
import TicketHistory from '../../components/TicketHistory/TicketHistory'
import TicketDetail from '../../components/TicketDetail/TicketDetail'
import * as ticketsAPI from '../../utilities/tickets-api'
import styles from './TicketHistoryPage.module.css'


export default function TicketHistoryPage({ user }) {
    const [count,setCount] = useState(0)
    const [tickets, setTickets] = useState([])
    const getTicketList = async () => {
        const ticketList = await ticketsAPI.getTickets()
        setTickets(ticketList)
    }
    // const deleteTicket = async()=>{
    //     await ticketsAPI.deleteTickets()
    // }
    useEffect(() => {
        getTicketList()
    }, [count])
    return (
        <div className={`${styles.TicketHistoryMain}`}>
            <div className={`${styles.TicketHistoryComponent}`}>
                <TicketHistory tickets={tickets} setCount={setCount}/>
            </div>
            <div className={`${styles.TicketDetailComponent}`}>
                <TicketDetail user={user} />
            </div>
        </div>
    )
}