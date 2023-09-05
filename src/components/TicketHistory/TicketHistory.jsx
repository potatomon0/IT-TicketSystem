import TicketListItem from '../TicketListItem/TicketListItem'


export default function TicketHistory({tickets}) {
    const ticketItems = tickets.map(ticket=>{
        return <TicketListItem 
        ticket={ticket}
        key={ticket._id}
        />
    })

        return (
            <main>
                {ticketItems.length ?
                    ticketItems
                    :
                    <span>No Previous Tickets</span>
                }
            </main>
        );
}

// import TicketListItem from '../TicketListItem/TicketListItem'

// export default function TicketHistory({tickets}) {
//         return (
//             <main>
//                 {/* {console.log(ticketItems)} */}
//                 {tickets.length ?
//                     tickets.map(ticket=>{
//                         return <TicketListItem ticket={ticket}/>
//                     })
//                     :
//                     <span>No Previous Tickets</span>
//                 }
//             </main>
//         );
// }