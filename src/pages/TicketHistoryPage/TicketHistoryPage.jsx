// import { checkToken } from '../../utilities/users-service'
import React, { useState, useEffect } from 'react';
// import * as ticketsAPI from '../../utilities/tickets-api'
import TicketHistory from '../../components/TicketHistory/TicketHistory'
import axios from 'axios'


export default function TicketHistoryPage(user) {
    const [tickets, setTickets] = useState([])
    // const handleCheckToken = async () => {
    //     const expDate = await checkToken()
    //     console.log(expDate)
    // }
    const getTicketList = async () => {
        // const ticketList = await ticketsAPI.getTicket()
        console.log('first')
        const res = await axios.get('/api/user/tickets');
        let info = await res.data
        setTickets(info)
    }
    useEffect(() => {
        getTicketList()
    },[])
    return (<>
            <h1>TicketHistoryPage</h1>
            {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
        <TicketHistory tickets={tickets} />
        </>
    )
}