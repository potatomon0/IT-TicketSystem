// import { checkToken } from '../../utilities/users-service'
import React, { useState, useEffect } from 'react';
import * as ticketsAPI from '../../utilities/tickets-api'
import TicketHistory from '../../components/TicketHistory/TicketHistory'

export default function TicketHistoryPage(user) {
    const [tickets, setTickets] = useState([])
    const [selectTicket, setSelectTicket] = useState(null)
    // const handleCheckToken = async () => {
    //     const expDate = await checkToken()
    //     console.log(expDate)
    // }
    const getTicketList = async () => {
        const ticketList = await ticketsAPI.getTicket()
        setTickets(ticketList)
        console.log(ticketList)
    }
    useEffect(() => {
        getTicketList()
    },[])
    function handleSelectTicket(ticket) {
        setSelectTicket(ticket);
        }
    return (
        <>
        {console.log('ticketHistory Page')}
            <h1>TicketHistoryPage</h1>
            {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
        <TicketHistory tickets={tickets} selectTicket={selectTicket} handleSelectTicket={handleSelectTicket} />
        </>
    )
}