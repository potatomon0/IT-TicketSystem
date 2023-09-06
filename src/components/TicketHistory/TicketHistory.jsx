import TicketListItem from '../TicketListItem/TicketListItem'
import styles from './TicketHistory.module.css'

export default function TicketHistory({tickets, setCount}) {
    const ticketItems = tickets.map((ticket,i)=>{
        return <TicketListItem 
        ticket={ticket}
        key={i}
        param={ticket._id}
        setCount={setCount}
        />
    })
//key={ticket._id}
        return (
            <main className={`${styles.TicketHistoryMain}`}>
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