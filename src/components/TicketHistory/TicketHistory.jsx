import TicketListItem from '../TicketListItem/TicketListItem'

export default function TicketHistory({tickets, selectTicket, handleSelectTicket}) {
    const ticketItems = tickets.map(t=>
        <TicketListItem ticket={t}
        isSelected={t===selectTicket}
        handleSelectTicket={handleSelectTicket} 
        key={t._id}
        />)

        return (
            <main>
                {console.log(ticketItems)}
                {ticketItems.length ?
                    ticketItems
                    :
                    <span>No Previous Tickets</span>
                }
            </main>
        );
}