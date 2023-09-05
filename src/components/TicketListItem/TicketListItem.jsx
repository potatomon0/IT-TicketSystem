

export default function TicketListItem({ticket, handleSelectTicket}) {
    return (
        <div onClick={() => handleSelectTicket(ticket)}>
            <div>{ticket.ticketTitle}</div>
        </div>
    );
}